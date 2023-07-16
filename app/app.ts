import express from 'express';
import { registerRoutes } from './routes/routes';


export const startServer = async () => {
    try {
        const app = express();

        registerRoutes(app)

        const { PORT } = process.env;
        app.listen(
            PORT || 3000,
            () => console.log(`SERVER STARTED ON PORT: ${PORT || 3000}`)
        );
    } catch (e) {
        console.log('COULD NOT START SERVER', e);
        process.exit(1);
    }
}