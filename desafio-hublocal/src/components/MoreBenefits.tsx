import React from "react";
import "../styles/moreBenefits.css"

export default function MoreBenefits(){
    return(
        <div className="elements-more-benefits">
            <h1 className="title-more">Com a HubLocal você sabe de onde os seus clientes estão vindo.</h1>
            <div className="text-image-block">
                <img src="./images/image-more.png" alt="" className="image-more"/>
                <p className="text-more">Tenha acesso a poderosos relatórios que monitoram todas as visitas e ligações para o seu estabelecimento, mostrando como os seus clientes encontraram sua empresa e o que eles fizeram quando a viram nas pesquisas.</p>
            </div>
            <div className="title-button-block">
                <h2 className="satisfied">Junte-se aos mais de <em className="deco-more">4000</em> clientes satisfeitos! </h2>
                <a href="#form" className="request-button">Solicite a Demonstração</a>
            </div>
        </div>
    );
}