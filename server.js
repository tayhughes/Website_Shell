import express from 'express';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
import apiRoutes from './routes/api.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port_interface = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set the view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// This will allow us to use routes for directing the controller
app.use('/api', apiRoutes);
app.use('/', apiRoutes);

// Middleware that may be needed later for serving static files (CSS, client side JS, images)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port_interface, () => {
    console.log(`Server is running on http://localhost:${port_interface}`);
});

