require('dotenv').config();
require('../../src/config/mongooseConfig');

const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require('../../src/routes');
const expressPino = require('express-pino-logger');
const logger = require('../../src/utils/logger');

const expressLogger = expressPino({ logger });

const app = express();
const server = http.createServer(app);

// Allow all origins (for testing)
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(expressLogger);
app.use(cors(corsOptions)); // Enable CORS for all routes
app.use(express.static("sharing"));

app.use(express.json());
app.use('/api', express.static("sharing"));

// Health check endpoint
app.get('/status', (req, res) => {
    res.status(200).send('OK');
});

app.use(routes); // Use centralized route management

const PORT = 8080;
server.listen(PORT, "0.0.0.0", () => {
    logger.info(`Server started on http://0.0.0.0:${PORT}`);
});
