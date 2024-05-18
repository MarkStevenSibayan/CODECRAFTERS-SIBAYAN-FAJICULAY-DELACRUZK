export class Notification{
    id: string;
    message: string;

    constructor(id: string ='', message: string='',){
        this.id = id;
        this.message = message;
    }
}


export interface iNotification{
    id: string;
    message: string;
}