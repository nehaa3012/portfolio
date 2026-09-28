import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
    fullName: string;
    email: string;
    message: string;
    turnstileToken?: string;
}

async function verifyTurnstile(token: string): Promise<boolean> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        // If Turnstile secret is not set, allow in development or fallback
        return true;
    }
    try {
        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    secret,
                    response: token,
                }),
            }
        );
        const data = await response.json();
        return data.success;
    } catch {
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();
        const { fullName, email, message, turnstileToken } = body;

        if (!fullName || !email) {
            return NextResponse.json(
                { error: "Full name and email are required" },
                { status: 400 }
            );
        }

        if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
            const isValidToken = await verifyTurnstile(turnstileToken);
            if (!isValidToken) {
                return NextResponse.json(
                    { error: "Verification failed. Please try again." },
                    { status: 400 }
                );
            }
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                {
                    error: "Email service is currently unconfigured. Please email directly at nehach782@gmail.com",
                    mailtoFallback: `mailto:nehach782@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${fullName}`)}&body=${encodeURIComponent(message || "")}`
                },
                { status: 503 }
            );
        }

        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <contact@resend.dev>",
            to: ["nehach782@gmail.com"],
            replyTo: email,
            subject: `New Portfolio Message from ${fullName}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #151515;">
          <h2 style="color: #B08D57;">New Portfolio Message</h2>
          <hr style="border: 1px solid #D8D2C8;" />
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <h3 style="color: #151515;">Message:</h3>
          <div style="background-color: #F5F3EF; padding: 16px; border-radius: 8px; border-left: 4px solid #B08D57;">
            <p style="margin: 0; white-space: pre-wrap;">${message || "No message provided"}</p>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please use direct email: nehach782@gmail.com" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}