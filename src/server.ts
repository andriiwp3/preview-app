import express from 'express';
import bodyParser from 'body-parser';
import { connectToDatabase } from './db/db';
import linkPreviewRouter from './api/linkPreview';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', linkPreviewRouter);

const startServer = async () => {
    await connectToDatabase();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();
