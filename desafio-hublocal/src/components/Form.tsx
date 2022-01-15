import React from "react";
import "../styles/form.css"

export default function Form(){
    return(
        <form action="" className="form">
            <p className="description-form">Preencha os campos abaixo para obter acesso aos benefícios da HubLocal diretamente no seu e-mail!</p>
            <input type="text" className="field" placeholder="Nome da Empresa"/>
            <input type="text" className="field" placeholder="Principais Produtos e Serviços"/>
            <input type="email" className="field" placeholder="E-mail"/>
            <input type="text" className="field" placeholder="Seu Nome"/>
            <input type="text" className="field" placeholder="Seu Cargo na Empresa"/>
            <input type="submit" className="button-form" value="Solicite a Demonstração"/>
        </form>
    );
}