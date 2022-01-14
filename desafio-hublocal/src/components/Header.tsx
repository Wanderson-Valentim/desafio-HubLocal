import React from 'react';
import '../styles/header.css'

export default function Header() {
    return (
        <div id='header'>
            <img src="./images/logo-header.png" alt="" id='logo-header'/>

            <div id='title'>
                <img src="./images/img-header.png" alt="" id='image'/>

                <div id='texts'>
                    <h1>Você deseja <em>aumentar</em>  o seu número de <em>vendas</em>?</h1>
                    <h2>Conheça então a HubLocal e seja o responsável por mudar o destino da sua empresa.</h2>
                </div>
            </div>

        </div>
    );
}