import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div id='top'>
                <img id='logo' src="./images/logo-branco.png" alt=""/>
                <a href="https://www.facebook.com/HubLocalOficial/" target='blank' className='social-media'><AiOutlineFacebook /></a>
                <a href="https://www.instagram.com/hub.local/?hl=pt" target='blank' className='social-media'><AiOutlineInstagram /></a>
                <a href="https://www.linkedin.com/company/hublocaloficial/" target='blank' className='social-media'><AiOutlineLinkedin /></a>   
            </div>
            <p>Desenvolvido por <a href="https://github.com/Wanderson-Valentim" target='blank' id='my-name'>Wanderson Valentim</a>©</p>
        </div>
    );
}