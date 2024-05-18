export class Profile{
    id: string ='';
    link: string;
    desc: string;
    message: string;
    react: number;
    constructor(id: string ='', link: string = '', desc: string = '', message: string='', react: number = 0){
        this.id = id;
        this.link = link;
        this.desc = desc;
        this.message = message;
        this.react = react;
    }
}


export interface iProfile{
    id: string;
    link: string;
    desc: string;
    message: string;
    react: number;

}