// /app/api/save-lead/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    const res = await fetch(`https://api.hubapi.com/contacts/v1/contact?hapikey=${process.env.HUBSPOT_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        properties: [
          { property: "email", value: email },
          { property: "firstname", value: name || "Unknown" },
          { property: "lifecyclestage", value: "lead" }
        ]
      })
    });

    if (!res.ok) throw new Error("HubSpot API failed");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}