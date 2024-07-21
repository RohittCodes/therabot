import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

export const thera = async (text: any) => {
    
    const prompt = `Act like therabot, an Ai powered mental health chatbot, and provide a response to the following chat history. Note that the user is seeking help for their mental health, and there may be or may not be previous messages from the bot, so read the chat history carefully and provide a response accordingly.\n\n${text}`;
    const { response } = await model.generateContent(prompt);
    
    const responseText = response.candidates?.[0]?.content.parts?.[0].text;
    return responseText;
};