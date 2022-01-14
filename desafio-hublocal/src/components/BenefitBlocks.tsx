import React from "react";
import '../styles/benefitBlocks.css'
import Block from "./Block";

export default function BenefitBlocks(){
    return(
        <div className="display">
            <h1 className="benefits-title">Benefícios que a HubLocal te proporciona:</h1>
            <div className="blocks">
                <Block src="./images/notification.png" title="Feed de atividades e alertas de modificações" description="" />
                <Block src="./images/marketing.png" title="Publicações em massa de postagens e conteúdos" description="" />
                <Block src="./images/reputation.png" title="Controle de reputação" description="" />
                <Block src="./images/solution.png" title="Integração profunda entre mapas e listas" description="" />
                <Block src="./images/delete-message.png" title="Exclusão automatizada de registros duplicados" description="" />
                <Block src="./images/sweeping.png" title="Limpeza e organização de dados" description="" />
                <Block src="./images/browser.png" title="Gerenciamento de perfil em tempo real" description="" />
                <Block src="./images/customer-service.png" title="Suporte para mapas e listas" description="" />
                <Block src="./images/location.png" title="Gerenciamento de dados de localização" description="" />
            </div>
        </div>
    );
}