export type option = {
    label:string,
    value: string
}

export type options = option[]

export type DropDownProps ={
    placeHolder:string,
    value:string|null,
    options:options,
    onChange:(e:string)=>void,
    height?:string,
    width?:string,
    backgroundColor?:string,
    fontColor?:string,
    fontSize?:string,
    padding?:string,
    borderRadius?:string,
}