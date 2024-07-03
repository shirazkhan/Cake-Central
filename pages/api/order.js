import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, postCode, 
        budget, notes, cakeSize, typeOfCake, dateNeeded, timeNeeded, 
        deliveryNeeded, spongeFlavour, icingFlavour } = req.body;

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
      subject: `Cake Enquiry from ${firstName}`,
      text: `
        Name: ${firstName}
        Email: ${email}
        Phone: ${phone}
        Message: ${notes}
      `,
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Postcode:</strong> ${postCode}</p>
        <p><strong>Delivery:</strong> ${deliveryNeeded}</p>
        <p><strong>Date & Time Required:</strong> ${dateNeeded} ${timeNeeded}</p>
        <p><strong>Cake Info:</strong> Type: ${typeOfCake} Size: ${cakeSize} Sponge: ${spongeFlavour} Icing: ${icingFlavour}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${notes}</p>
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