import bodyParser from "body-parser";
import express from "express";
import * as controller from './controller/CampsiteController';

const app = express();


app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/campsite-middleware/availability", controller.availability);


export default app;