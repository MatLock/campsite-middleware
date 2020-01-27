import bodyParser from "body-parser";
import express from "express";
import { messageToResponse } from './controller/http/middleware/ResponsesMiddleware';
import * as controller from './controller/CampsiteController';

const app = express();

// Middleware
app.use(messageToResponse);

// App config
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/campsite-middleware/reservation/availability', controller.availability);
app.get('/campsite-middleware/reservation/:id',controller.getReservation)
app.post('/campsite-middleware/reservation',controller.createReservation);
app.put('/campsite-middleware/reservation/:id',controller.updateReservation);
app.delete('/campsite-middleware/reservation/:id',controller.deleteReservation);

export default app;