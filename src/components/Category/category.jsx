import './category.css';
import {
    FaHeartbeat,
    FaHeart,
    FaBolt,
    FaBullseye,
    FaFire,
    FaTrophy
} from "react-icons/fa";

export default function Category() {

    const items = [
        {
            icon: <FaHeartbeat />,
            color: "--primary-red",
            name: "Musculação1"
        },
        {
            icon: <FaHeart />,
            color: "--primary-orange",
            name: "Cardio"
        },
        {
            icon: <FaBolt />,
            color: "--primary-red",
            name: "HIIT"
        },
        {
            icon: <FaBullseye />,
            color: "--primary-orange",
            name: "Funcional"
        },
        {
            icon: <FaFire />,
            color: "--primary-red",
            name: "CrossFit"
        },
        {
            icon: <FaTrophy />,
            color: "--primary-orange    ",
            name: "Performance"
        }
    ];

    return (
        <>
            <div className='category container'>

                <p className='title'>Categoria de<span style={{ color: "var(--primary-red)" }}>Treino</span></p>
                <div className='cards'>
                    {items.map((item, index) => (
                        <div key={index} className="infos">
                            <div><span style={{ color: `var(${item.color})` }}>{item.icon}</span></div>
                            <div><p>{item.name}</p></div>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}
