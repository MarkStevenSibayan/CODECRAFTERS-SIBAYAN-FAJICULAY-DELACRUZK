export class Profile{
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


export interface iProfile{
    id: string;
    link: string;
    desc: string;
    message: string;
    react: number;
}

export class Information{
    id: string;
    bio: string;
    age: number;
    name: string;
    gender: string;
    constructor(id: string = '', bio: string = '',age: number = 18, name: string = '', gender : string = ''){
        this.id = id,
        this.bio = bio
        this.age = age
        this.name = name
        this.gender = gender
    }
}

export interface iInfo{
    id: string;
    bio: string;
    age: number;
    name: string;
    gender: string;
}