import express from 'express';
import path from 'path';
import cors from 'cors';
import users from './routes/user.js';
import errorHandler from './middlewares/error.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.static('public'));

app.use('/api/users', users);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));