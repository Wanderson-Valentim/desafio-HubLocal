import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <img className='logo-footer' src="./images/logo-branco.png" alt=""/>
                <div className='social-links'>
                    <a href="https://www.facebook.com/HubLocalOficial/" target='blank' className='social-media'><AiOutlineFacebook /></a>
                    <a href="https://www.instagram.com/hub.local/?hl=pt" target='blank' className='social-media'><AiOutlineInstagram /></a>
                    <a href="https://www.linkedin.com/company/hublocaloficial/" target='blank' className='social-media'><AiOutlineLinkedin /></a>   
                </div>
            </div>
            <p className='developed'>Desenvolvido por <a href="https://github.com/Wanderson-Valentim" target='blank' className='my-name'>Wanderson Valentim</a>©</p>
        </div>
    );
}