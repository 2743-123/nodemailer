
const sendEmail = async (to, subject, html) => {
    try {
        await transporter.sendMail({
            from: `World best places <${process.env.EMAIL_USER}>`,
            to,

            subject,
            html,

        })
        console.log ('Email sent successfully');
    }
    catch (err) {
        console.error("Error sending email:", err)
        throw err;
    }
};
modules.exports = sendEmail;