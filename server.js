import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRouter from './src/routes/taskRoutes.js';
import { securityHeaders } from './src/middleware/security.js';
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware pipeline
app.use(securityHeaders); // Custom security middleware
app.use(cors()); // Enable cross-origin requests
app.use(morgan('dev')); // Request logging
app.use(express.json()); // Parse JSON bodies
// Routes
app.use('/api/tasks', taskRouter);
// Error handling middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ error: 'Internal Server Error' });
});
// Start server
app.listen(PORT, () =>
    console.log(`TaskFlow API running on port ${PORT}`)
);
