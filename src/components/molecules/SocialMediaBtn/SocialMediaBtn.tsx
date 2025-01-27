import React from "react";
type SociaMediaButtonProps={
    image: string,
    onClick: ()=>void,
    height:number,
    width:number,
    margin:number,
}

function SociaMediaButton({image,onClick,height,width,margin}:SociaMediaButtonProps){

    const button_style = {
        display:"flex",
        background:"transparent",
        border:"none",
        margin:margin,
    };

    return(
        <button onClick={onClick} style={button_style}>
            <img src={image} alt={"image"} height={height} width={width} />
        </button>
    )
}
export default React.memo(SociaMediaButton)