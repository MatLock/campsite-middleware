export class Response {
    message: String;
    error: Boolean;
    response: Object;

    constructor(message: String, response: Object,error:Boolean) {
        this.response = response;
        this.error = error;
        this.message = message;
    }
}