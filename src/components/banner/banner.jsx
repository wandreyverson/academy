import "./banner.css";
import imagem from "../../assets/banner.svg";
import Button from "../Button/button";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-content container">
                <div className="banner-text">
                    <h1>Supere seus <span style={{ color: "var(--primary-red)" }}>limites</span></h1>
                    <p>Transforme seu corpo e mente com treinos personalizados,<br />
                        equipamentos de ponta e suporte profissional.</p>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                    <Button type="button" variant="primary">Matricule-se agora</Button>
                    <Button type="button" variant="outline">Conheça a academia</Button>
                </div>
            </div>
            <div className="banner-img">
                <img src={imagem} alt="banner" />
            </div>
        </div>
    );
}
