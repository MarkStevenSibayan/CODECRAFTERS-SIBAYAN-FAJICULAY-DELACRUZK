export class User{
    id: string;
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


export interface iUser{
    id: string;
    link: string;
    desc: string;
    message: string;
    react: number;
}


export class Comset{
    id: string;
    comlink: string;
    comdesc: string;
    commessage: string;
    comreact: number;
    constructor(id: string ='', comlink: string = '', comdesc: string = '', commessage: string='', comreact: number = 0){
        this.id = id;
        this.comlink = comlink;
        this.comdesc = comdesc;
        this.commessage = commessage;
        this.comreact = comreact;
    }
}


export interface iComset{
    id: string;
    comlink: string;
    comdesc: string;
    commessage: string;
    comreact: number;
}