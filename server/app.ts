import express, { Express, Request, Response } from "express";
import { connectToDB } from "./database";
import { config } from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import usersRouter from "./routes/users.routes";

config();

const openAIConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(openAIConfiguration);

const PORT = 8000;
const app: Express = express();

connectToDB();

// middleware
app.use(cors());
// - transform request body to JSON
app.use(express.json());


// routes
app.get('/', (request: Request, response: Response) => {
    console.log("Someone pinged!");
    //response.send("WooHoo, Hola");
});

app.post('/', async (request: Request, response: Response) => {
    try {
        const prompt = request.body.prompt;

        const openaiResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        });

        response.status(200).send({
            answer: openaiResponse.data.choices[0].text
        })
    } catch (error) {
        response.status(500).send({ error });
    }
});

app.use("/api/users", usersRouter);



app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});