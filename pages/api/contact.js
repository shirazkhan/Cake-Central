import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cakecentralsender@gmail.com', // Your Gmail address
        pass: 'snxa ujaz bkyh zrpa' //'cewj vbbx hbns nnqj' //process.env.GMAIL_APP_PASSWORD, // Your app password
      },
    });

    // Email content
    const mailOptions = {
      from: 'info@cakecentral.co.uk', // Sender address
      to: 'info@cakecentral.co.uk', // Your email address to receive form submissions
      subject: `Contact Us Page Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      replyTo: email, // Reply-to email address
    };

    // Send mail
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};