import React from 'react';
import '../styles/header.css'

export default function Header() {
    return (
        <div className='header'>
            <img src="./images/logo-header.png" alt="" className='logo-header'/>

            <div className='title-header'>
                <img src="./images/img-header.png" alt="" className='image-header'/>

                <div className='texts-header'>
                    <h1 className='title1'>Você deseja <em className='header-text-deco'>aumentar</em>  o seu número de <em className='header-text-deco'>vendas</em>?</h1>
                    <h2 className='title2'>Conheça então a HubLocal e seja o responsável por mudar o destino da sua empresa.</h2>
                </div>
            </div>

        </div>
    );
}