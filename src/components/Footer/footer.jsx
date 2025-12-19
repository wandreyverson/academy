import './footer.css';
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="itens-footer container">
                    <div className='footer-logo'>
                        <img src="./src/assets/link.svg" alt="" className='space-footer' />
                        <p>Transforme seu corpo e mente com a melhor
                            academia da região.</p>
                    </div>
                    <div className='footer-links'>
                        <h2 className='space-footer'>Links Rápidos</h2>
                        <ul>
                            <li>Treinos</li>
                            <li>Equipamentos</li>
                            <li>Notícias</li>
                            <li>Suplementos</li>
                        </ul>
                    </div>
                    <div className='footer-contact'>
                        <h2 className='space-footer'>Contato</h2>
                        <ul>
                            <li>(11) 9999-9999</li>
                            <li>contato@fitpower.com</li>
                            <li>Av. Paulista, 1000 - São Paulo, SP</li>
                        </ul>
                    </div>
                    <div className='footer-networks'>
                        <h2 className='space-footer'>Redes Sociais</h2>
                        <ul>
                            <li><FiFacebook /></li>
                            <li><FaInstagram /></li>
                            <li><CiYoutube /></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}


