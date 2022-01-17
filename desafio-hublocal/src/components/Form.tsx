import React from "react";
import "../styles/form.css"
import { useForm, SubmitHandler } from "react-hook-form";

type IFormInput = {
    companyName: string;
    productsServices: string;
    email: string;
    name: string;
    positionCompany: string;
}

export default function Form(){
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <p className="description-form">Preencha os campos abaixo para obter acesso aos benefícios da HubLocal diretamente no seu e-mail!</p>
            <input {...register("companyName", { required: true })} name="companyName" type="text" className="field" placeholder="Nome da Empresa"/>
            <p className="alert">{errors.companyName && "Campo Obrigatório"}</p>
            <input {...register("productsServices", { required: true })} name="productsServices" type="text" className="field" placeholder="Principais Produtos e Serviços"/>
            <p className="alert">{errors.productsServices && "Campo Obrigatório"}</p>
            <input {...register("email", { required: true })} name="email" type="email" className="field" placeholder="E-mail"/>
            <p className="alert">{errors.email && "Campo Obrigatório"}</p>
            <input {...register("name", { required: true })} name="name" type="text" className="field" placeholder="Seu Nome"/>
            <p className="alert">{errors.name && "Campo Obrigatório"}</p>
            <input {...register("positionCompany", { required: true })} name="positionCompany" type="text" className="field" placeholder="Seu Cargo na Empresa"/>
            <p className="alert">{errors.positionCompany && "Campo Obrigatório"}</p>
            <input type="submit" className="button-form" value="Solicite a Demonstração"/>
        </form>
    );
}