import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

// Initialize the Gemini AI Client with the API key
const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

export const handleChat = async (req, res) => {
  const { question, simulationContext } = req.body;

  if (!question ||!simulationContext) {
    return res.status(400).json({ error: 'Question and simulationContext are required.' });
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    You are a computer science teaching assistant.
    A student is looking at a simulation and has a question.
    
    Simulation Context:
    - Type: ${simulationContext.type}
    - Input: ${JSON.stringify(simulationContext.input)}
    - Output: ${JSON.stringify(simulationContext.output)}

    Student's Question: "${question}"

    Please provide a clear, helpful explanation based on the simulation context.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ answer: response.text() });
  } catch (error) {
    console.error('Error in handleChat:', error);
    res.status(500).json({ error: 'Failed to get response from AI.' });
  }
};