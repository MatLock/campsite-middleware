export default class ReservationRequest {

  fullName: String;
  startDate: Date;
  endDate: Date;
  email: String;

  constructor(fullName: String, email: String,startDate:Date,endDate:Date) {
    this.fullName = fullName;
    this.email = email;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}