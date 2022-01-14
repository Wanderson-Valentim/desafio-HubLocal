import React from "react";
import "../styles/item.css"

type Text = {
    text: string
}

export default function Item( {text}: Text ){
    return(
        <div>
            <p className="text-item"><img src="../images/mark.png" alt="" className="mark" />{text}</p>
        </div>
    );
}