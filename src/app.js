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
app.get("/campsite-middleware/availability", controller.availability);


export default app;