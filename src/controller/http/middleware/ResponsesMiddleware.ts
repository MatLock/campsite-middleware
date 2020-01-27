import { NextFunction, Request, Response } from "express";

export const messageToResponse = (req:Request,res:Response,next:NextFunction) => {
  res.set("Middleware-Metadata","Powered By CampSite Middleware!");
  next();
}