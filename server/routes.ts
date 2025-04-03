import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, company, email, arrRange, message } = req.body;
      
      // Validate required fields
      if (!name || !company || !email || !arrRange) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // In a real application, you would send an email or create a database entry
      // For now, we'll just log the submission
      console.log('Contact form submission received:', {
        name,
        company,
        email,
        arrRange,
        message: message || '(No message provided)'
      });
      
      // Simulate successful submission
      return res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
      console.error('Error processing contact form submission:', error);
      return res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
