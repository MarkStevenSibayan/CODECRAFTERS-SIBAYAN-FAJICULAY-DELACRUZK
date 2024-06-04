export class User{
    id: string;
    link: string;
    desc: string;
    message: string;
    react: number;

    constructor(id: string ='', link: string = '', desc: string = '', message: string='', react: number = 0, color: string =''){
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

export class Assembly{
    id: string;
    aslink: string;
    asdesc: string;
    asmessage: string;
    asreact: number;
    constructor(id: string ='', aslink: string = '', asdesc: string = '', asmessage: string='', asreact: number = 0){
        this.id = id;
        this.aslink = aslink;
        this.asdesc = asdesc;
        this.asmessage = asmessage;
        this.asreact = asreact;
    }
}


export interface iAssembly{
    id: string;
    aslink: string;
    asdesc: string;
    asmessage: string;
    asreact: number;
}


export class News{
    id: string;
    newslink: string;
    newsdesc: string;
    newsmessage: string;
    newsreact: number;
    constructor(id: string ='', newslink: string = '', newsdesc: string = '', newsmessage: string='', newsreact: number = 0){
        this.id = id;
        this.newslink = newslink;
        this.newsdesc = newsdesc;
        this.newsmessage = newsmessage;
        this.newsreact = newsreact;
    }
}


export interface iNews{
    id: string;
    newslink: string;
    newsdesc: string;
    newsmessage: string;
    newsreact: number;
}