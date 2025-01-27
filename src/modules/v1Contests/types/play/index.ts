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