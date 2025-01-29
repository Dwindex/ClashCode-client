import { User } from "../common"

export type problem = {
    problem_id : number,
    title : string,
    description:string,
    public_sample_input:string,
    public_sample_output:string,
    explanation:string,
    private_input:string,
    private_output :string,
    tags:[]
}

export type matchmakingDataModel = {
    problem : problem,
    session_id:string,
    status :boolean,
    user1: User,
    user2: User
}

export type chatDataModal = {
    time:string,
    message:string,
    sender_id:number
}

export type chatModal = chatDataModal[]

export type socketChatDataModal = {
    "type":string,
    "session_id":string,
    "data": chatDataModal
}


export type codeEditorProps = {
    value:string,
    isFullScreen:boolean,
    cancelFullScreen:() => void
    onChange:(value:string) => void

}

export type runDataResponseModal = {
    stdout:string,
    time:string,
    memory:number,
    stderr:string,
    token:string,
    compile_output:string,
    message:string,
    status:string,
    submission_id:number
}

export type runDataModal ={
    status:boolean,
    session_id:string,
    response:runDataResponseModal
}