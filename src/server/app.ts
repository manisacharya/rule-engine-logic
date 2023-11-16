import express from 'express';
import { router } from '../routes/get.route';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 4000;
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

//middlewares
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/', router);
app.use('/rule', router);
app.use('/userRelationships', router);
app.use('/userRelationships/:userId', router);
app.use('/timesheet', router);
app.use('/matched-timesheet', router);
app.use('/precepted-notification/:userId', router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});