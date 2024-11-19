const nodemailer = require("nodemailer");
const path = require("path");

const index = (req, res) => {
  res.render(path.resolve(__dirname, "../Views/contacto.ejs"));
};

const submit = async (req, res) => {
  const transporter = await nodemailer.createTransport({

    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    
  });

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${req.body.nombre}" <${req.body.correo}>`, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Formulario De contacto", // Subject line
      text: req.body.mensaje, // plain text body
      html: `<pre>${req.body.mensaje}</pre>`, // html body
    });
    console.log("Message sent: %s", info);
  } catch (error) {
    console.error(error);
  }
  res.send("Enviado");
};

module.exports = {
  index,
  submit,
};
