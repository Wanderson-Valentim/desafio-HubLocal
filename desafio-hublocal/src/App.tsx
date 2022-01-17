import React, {useState } from "react";
import './styles/app.css'
import Header from './components/Header';
import BenefitBlocks from './components/BenefitBlocks';
import Footer from './components/Footer';
import Demonstration from './components/Demonstration';
import MoreBenefits from './components/MoreBenefits';
import Modal from './components/Modal';

type ModalData = {
  companyName: string;
  email: string;
  name: string;
  positionCompany: string;
  productsServices: string;
}

export default function App() {
  const [data, setData] = useState<ModalData>()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const setStateModal = () => {
    isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true)
  }

  return (
    <div className="App">
      <Header/>
      <Demonstration setData={setData} setModal={setStateModal}/>
      <BenefitBlocks/>
      <MoreBenefits/>
      <Footer/>
      {isModalVisible ? (<Modal name={data?.name} companyName={data?.companyName} email={data?.email}  setModal={setStateModal}/>) : null}
    </div>
  );
}