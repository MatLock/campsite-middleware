import { Request, Response } from "express";
import {Response as ReservationResponse} from './http/response/Response';
import { get } from './http/HttpHelper';
import {AvailabilityParams} from "./http/request/AvailabilityParams";

export let availability = async (req : Request, res : Response) => {
   let params: AvailabilityParams = new AvailabilityParams(req.query.startDate,req.query.endDate);
   let response : ReservationResponse = await get('/reservation/availability',params);
   res.json(response);
}




