import React from "react";
import "../styles/demonstration.css"
import Item from "./Item";
import Form from "./Form";

export default function Demonstration(){
    return(
        <div className="elements">
            <div className="demo">
                <h1 className="demo-title"><em className="demo-text-deco">Fortaleça</em> a presença on-line da sua empresa e <em className="demo-text-deco">aumente</em> seu número de <em className="demo-text-deco">vendas.</em></h1>
                <p className="demo-text">A HubLocal insere, otimiza e gerencia a sua empresa em todas as principais listas de mapas e diretórios da internet. Tudo feito de forma totalmente automatizada.</p>
                <div className="demo-items">
                    <h3 className="title-items">Solicite a demonstração e receba:</h3>
                    <div className="items">
                        <Item text="Uma análise de presença online, que vai identificar se sua empresa está sendo encontrada de forma notável nos principais mapas e listas."/>
                        <Item text="Correção de presença, adicionado sua empresa de forma automatizada e personalizada em vários canais de uma vez só."/>
                        <Item text="Aumento de presença, fazendo os ajustes necessários para que consolide a relevância local da sua empresa."/>
                        <Item text="Atração de mais clientes, gerenciando e otimizando sua presença local para aumentar o número de ligações, acessos ao seu website e visitas até o seu estabelecimento físico."/>
                    </div>
                </div>
            </div> 
            <div className="demonstration-form">
                <Form/>
            </div>
        </div>
    );
}