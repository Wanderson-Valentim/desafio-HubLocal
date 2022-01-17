import "../styles/modal.css"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin , AiOutlineCloseCircle} from 'react-icons/ai';

interface Props {
    name: string | undefined;
    companyName: string | undefined;
    email: string | undefined;
    setModal():void
}

export default function Modal({name, companyName, email, setModal}:Props ){
    const outsideClick = (event:any) => {
        console.log(event)
        if (event.target.id === 'modal') setModal()
    }

    return(
        <div className="modal" id="modal" onClick={outsideClick}>
            <div className="contents">
                <div className="close-div">
                    <button onClick={setModal} className="close"><AiOutlineCloseCircle/></button>
                </div>
                <img src="./images/logo-header.png" alt="" className='logo-modal'/>
                <p className="text-modal">Obrigado <em className="text-deco-modal">{name}</em> por confiar na HubLocal</p>
                <p className="text-modal">Primeiro passo dado para o crescimento de sua empresa <em className="text-deco-modal">{companyName}</em></p>
                <p className="text-modal">E-mail enviado para <em className="text-deco-modal">{email}</em></p>
                <p className="title-social-modal">Conheça também nossas redes sociais:</p>
                <div className='social-links-modal'>
                    <a href="https://www.facebook.com/HubLocalOficial/" target='blank' className='social-media-modal'><AiOutlineFacebook /></a>
                    <a href="https://www.instagram.com/hub.local/?hl=pt" target='blank' className='social-media-modal'><AiOutlineInstagram /></a>
                    <a href="https://www.linkedin.com/company/hublocaloficial/" target='blank' className='social-media-modal'><AiOutlineLinkedin /></a>   
                </div>
            </div>
        </div>
    );
}