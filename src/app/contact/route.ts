import { NextResponse } from "next/server";

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body =
      (await request.json()) as ContactRequest;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    /* -------------------------------------------------------
       Validation
    ------------------------------------------------------- */

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message:
            "Name, email, and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          message: "Name is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          message: "Email address is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          message: "Message is too long.",
        },
        {
          status: 400,
        }
      );
    }

    /* -------------------------------------------------------
       Environment variables
    ------------------------------------------------------- */

    const apiKey =
      process.env.MAILERSEND_API_TOKEN;

    const fromEmail =
      process.env.MAILERSEND_FROM_EMAIL;

    const toEmail =
      process.env.MAILERSEND_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error(
        "MailerSend environment variables are missing."
      );

      return NextResponse.json(
        {
          message:
            "Email service is not configured yet.",
        },
        {
          status: 500,
        }
      );
    }

    /* -------------------------------------------------------
       Escape user input for HTML email
    ------------------------------------------------------- */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />"
    );

    /* -------------------------------------------------------
       MailerSend request
    ------------------------------------------------------- */

    const mailerSendResponse = await fetch(
      "https://api.mailersend.com/v1/email",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          from: {
            email: fromEmail,
            name: "Orville Gym Website",
          },

          to: [
            {
              email: toEmail,
              name: "Orville Gym",
            },
          ],

          reply_to: {
            email,
            name,
          },

          subject: `New Orville Gym enquiry from ${name}`,

          text: `
New contact form submission

Name: ${name}
Email: ${email}

Message:

${message}
          `.trim(),

          html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Orville Gym Enquiry</title>
  </head>

  <body
    style="
      margin:0;
      padding:40px 20px;
      background:#0a0a0a;
      font-family:Arial,Helvetica,sans-serif;
      color:#f0ede8;
    "
  >
    <div
      style="
        max-width:600px;
        margin:0 auto;
        background:#111111;
        border:1px solid #292929;
      "
    >
      <div
        style="
          padding:28px 32px;
          border-bottom:1px solid #292929;
        "
      >
        <div
          style="
            color:#cc1414;
            font-size:24px;
            font-weight:900;
            letter-spacing:2px;
          "
        >
          ORVILLE GYM
        </div>

        <div
          style="
            margin-top:8px;
            color:#c8952a;
            font-size:11px;
            font-weight:bold;
            letter-spacing:2px;
            text-transform:uppercase;
          "
        >
          New Contact Enquiry
        </div>
      </div>

      <div style="padding:32px">

        <div style="margin-bottom:24px">
          <div
            style="
              color:#c8952a;
              font-size:11px;
              font-weight:bold;
              letter-spacing:2px;
              text-transform:uppercase;
              margin-bottom:8px;
            "
          >
            Full Name
          </div>

          <div style="font-size:16px">
            ${safeName}
          </div>
        </div>

        <div style="margin-bottom:24px">
          <div
            style="
              color:#c8952a;
              font-size:11px;
              font-weight:bold;
              letter-spacing:2px;
              text-transform:uppercase;
              margin-bottom:8px;
            "
          >
            Email
          </div>

          <div style="font-size:16px">
            ${safeEmail}
          </div>
        </div>

        <div>
          <div
            style="
              color:#c8952a;
              font-size:11px;
              font-weight:bold;
              letter-spacing:2px;
              text-transform:uppercase;
              margin-bottom:8px;
            "
          >
            Message
          </div>

          <div
            style="
              background:#0a0a0a;
              border:1px solid #292929;
              padding:20px;
              line-height:1.7;
              color:#d0d0d0;
            "
          >
            ${safeMessage}
          </div>
        </div>

      </div>

      <div
        style="
          padding:20px 32px;
          border-top:1px solid #292929;
          color:#666;
          font-size:12px;
        "
      >
        Sent from the Orville Gym website.
      </div>
    </div>
  </body>
</html>
          `.trim(),
        }),
      }
    );

    if (!mailerSendResponse.ok) {
      const errorText =
        await mailerSendResponse.text();

      console.error(
        "MailerSend error:",
        errorText
      );

      return NextResponse.json(
        {
          message:
            "We couldn't send your message right now. Please try again later.",
        },
        {
          status: 502,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}