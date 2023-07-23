export type ProjectDetail = {
    _id:number,
    type?:string,
    img?:string,
    name:string,
    description:string,
    stack?:Array<string>,
    route:string
}

const pType = {
    basic :"basic",
    intermediate:"intermediate",
    advance:"advance"
}

export const ProjectDetailBasic:Array<ProjectDetail> = [
    {
        _id:1111,
        type:pType.basic,
        img:"url",
        name:"calculater",
        description:"this applicaiton is used for calculation",
        stack:["next js" , "javascript"],
        route:"basic/calculater"
    },
    {
        _id:1112,
        type:pType.basic,
        img:"url",
        name:"unit converter",
        description:"this applicaiton is used for unit conversion",
        stack:["next js" , "javascript"],
        route:"basic/converter"
    },
    {
        _id:1113,
        type:pType.basic,
        img:"url",
        name:"sticky notes",
        description:"make beautifull sticky notes",
        stack:["next js" , "javascript"],
        route:"basic/stickynotes"
    },
]
export const ProjectDetailIntermediate:Array<ProjectDetail>= [
    {
        _id:2111,
        type:pType.intermediate,
        img:"url",
        name:"translater",
        description:"translater used to translate",
        stack:["next js" , "javascript"],
        route:"basic/translater"
    },
    {
        _id:2112,
        type:pType.intermediate,
        img:"url",
        name:"name goes here",
        description:"this applicaiton is used for web scraping",
        stack:["next js" , "javascript"],
        route:"basic/calculater"
    },
    {
        _id:2113,
        type:pType.intermediate,
        img:"url",
        name:"name goes here",
        description:"this applicaiton is used for web scraping",
        stack:["next js" , "javascript"],
        route:"basic/calculater"
    },
]
export const ProjectDetailAdvance:Array<ProjectDetail>= [
    {
        _id:3111,
        type:pType.advance,
        img:"url",
        name:"name goes here",
        description:"this applicaiton is used for web scraping",
        stack:["next js" , "javascript"],
        route:"basic/calculater"
    },
    {
        _id:3112,
        type:pType.advance,
        img:"url",
        name:"name goes here",
        description:"this applicaiton is used for web scraping",
        stack:["next js" , "javascript"],
        route:"basic/calculater"
    },
]

export const searchQuery:Array<ProjectDetail>= [...ProjectDetailBasic , ...ProjectDetailIntermediate , ...ProjectDetailAdvance]