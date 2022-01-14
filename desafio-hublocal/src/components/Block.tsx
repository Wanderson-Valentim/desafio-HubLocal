import React from "react";
import "../styles/block.css"

type blockProps = {
    src: string,
    title: string,
    description: string
}

export default function Block( { src, title, description } : blockProps ){
    return(
        <div className="display">
            <div className="block">
                <img src={src} alt="" className="image"/>
                <p className="title-block">{title}</p>
            </div>
        </div>
    );
}