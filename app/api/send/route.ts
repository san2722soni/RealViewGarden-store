import { mailOptions ,transpoter } from '@/app/config/nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

    try {
      const body = await req.json();
      const {name, email, description} = body;
      
      await transpoter.sendMail({
        ...mailOptions,
        subject: name,
        text: `Recived an email from website."`,
        html: `
        <h1>RVG-MAIL</h1>
        <h3>NAME:</h3>
        <p style="margin-left: 10px;">${name}</p>
        <h3>EMAIL:</h3>
        <a style="margin-left: 10px;" href="mailto:${email}">${email}</a>
        <h3>Description:</h3>
        <p style="margin-left: 10px;">${description}</p>
        `,
      });

      return new NextResponse("Mail sent...", {status: 200});
    } catch (err) {
      return new NextResponse("Internal server error" , {status: 400})
    }
}