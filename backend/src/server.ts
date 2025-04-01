import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Initialize Express app
const app = express();

// Load environment variables
dotenv.config();

// CORS configuration
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '20kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Import Routes

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the Backend APIs of FortunaAI',
  });
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(
    `⚙️  Server is running at port: ${
      process.env.PORT ? process.env.PORT : 4000
    }`
  );
});
