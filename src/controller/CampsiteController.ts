import { Request, Response } from "express";
import {Response as ReservationResponse} from './response/Response';
import { get } from './http/HttpHelper';

export let availability = async (req : Request, res : Response) => {
   let response : ReservationResponse = await get('/reservation/availability');
   response.metadata = "Powered By CampSite Middleware!";
   res.json(response);
}




