import express from 'express';
import dotenv from "dotenv"
// @ts-ignore
import cors from "cors"
import {Resend} from "resend";
import {corsOptions} from "./config/corsOptions";

const app = express();
dotenv.config()

const port = process.env.PORt || 3500;
const resend = new Resend(process.env.EMAIL_KEY);


app.use(cors(corsOptions))
app.use(express.json())

app.post('/', async (req, res) => {

    const body = req.body

    try {
        const resp = await resend.emails.send({
            from: `onboarding@resend.dev`,
            to: body.to,
            subject: body.subject,
            html: `<div>Hi, Im test email from ${body.from}</div>`
        });

        res.json({status: `ok`, resp})

    } catch (error) {
        console.log(error)
    }

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});