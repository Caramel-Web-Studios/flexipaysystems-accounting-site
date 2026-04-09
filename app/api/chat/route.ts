import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    // UK-Specific Professional Persona
    const systemMessage = {
      role: "system",
      content: `You are the expert AI assistant for FlexiPay Systems, a UK-based accounting firm. 
      - All advice must strictly follow UK tax laws, HMRC regulations, and Companies House requirements.
      - Focus on UK-specific topics: VAT, PAYE, Corporation Tax, National Insurance, and Self-Assessment.
      - Use British English spelling (e.g., 'organisation', 'summarise', 'optimisation').
      - Refer to the UK tax year (6 April to 5 April) where relevant.
      - If asked about US or international tax, politely state you are a UK compliance specialist.
      - ALWAYS include this short disclaimer at the end of every response: "Note: This is general information and does not constitute formal tax advice."`
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", 
        messages: [systemMessage, ...messages],
        temperature: 0.2, // Very low temperature for high factual accuracy
        max_tokens: 500,  // Keeps responses concise
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI Error:", errorData);
      return NextResponse.json({ error: "API connection failed" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}