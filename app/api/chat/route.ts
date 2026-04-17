import { NextRequest, NextResponse } from "next/server";

// Define the structure strictly
interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    // FIX: Instead of (msg: any), we use (msg: ChatMessage)
    // This removes the ESLint error and ensures data integrity
    const clientMessages: ChatMessage[] = body.messages.map((msg: ChatMessage) => ({
      role: msg.role === "assistant" ? "assistant" : "user",
      content: msg.content || "",
    }));

    const systemMessage: ChatMessage = {
      role: "system",
      content: `You are the expert AI assistant for FlexiPay Systems, a UK-based accounting firm. 
      - Advice must strictly follow UK tax laws (HMRC/Companies House).
      - Topics: VAT, PAYE, Corporation Tax, National Insurance, Self-Assessment.
      - Use British English (e.g., 'organisation', 'optimisation').
      - Refer to the UK tax year (6 April to 5 April).
      - Disclaimer REQUIRED at the end of every response: "\n\nNote: This is general information and does not constitute formal tax advice."`
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY?.trim()}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", 
        messages: [systemMessage, ...clientMessages],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI Error Details:", data.error);
      return NextResponse.json(
        { error: data.error?.message || "OpenAI API failed" }, 
        { status: response.status }
      );
    }

    const reply = data.choices[0].message.content;
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Critical Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}