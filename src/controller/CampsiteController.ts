import { Request, Response } from "express";
import {Response as ReservationResponse} from './http/response/Response';
import * as helpers from './http/HttpHelper';
import {AvailabilityParams} from "./http/request/AvailabilityParams";

export const availability = async (req : Request, res : Response) => {
   let params: AvailabilityParams = new AvailabilityParams(req.query.startDate,req.query.endDate);
   let response = await helpers.GET('/reservation/availability',params);
  onResponse(response,res);
};

export const createReservation = async (req:Request,res:Response) =>{
  let response = await helpers.POST('/reservation',null,req.body);
  onResponse(response,res);
};

export const getReservation = async (req:Request,res:Response) =>{
  let response = await helpers.GET(`/reservation/${req.params.id}`,null);
  onResponse(response,res);
};

export const deleteReservation = async (req:Request,res:Response) =>{
  let response = await helpers.DELETE(`/reservation/${req.params.id}`,req.query);
  onResponse(response,res);
};

export const updateReservation = async(req:Request,res:Response) =>{
  let response = await helpers.PUT(`/reservation/${req.params.id}`,req.body);
  onResponse(response,res);
};

function onResponse(axiosResponse:any,res:Response) {
  res.status(axiosResponse.status);
  res.json(axiosResponse.data);
}




