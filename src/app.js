import bodyParser from "body-parser";
import express from "express";
import { messageToResponse } from './controller/http/middleware/ResponsesMiddleware';
import * as controller from './controller/CampsiteController';

const app = express();
const COMMON_ENDPOINT = '/campsite-middleware/reservation';

// Middleware
app.use(messageToResponse);

// App config
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get(`${COMMON_ENDPOINT}/availability`, controller.availability);
app.get(`${COMMON_ENDPOINT}/:id`,controller.getReservation)
app.post(COMMON_ENDPOINT,controller.createReservation);
app.put(`${COMMON_ENDPOINT}/:id`,controller.updateReservation);
app.delete(`${COMMON_ENDPOINT}/:id`,controller.deleteReservation);

export default app;