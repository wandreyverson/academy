import './training.css'; 
import { GoPulse } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import CostasBíceps from "../../assets/CostasBíceps.svg";

export default function Training() {

    const items = [
        {
            image: CostasBíceps,
            name: "Treino de Peito e Tríceps",
            time: "45 min",
            tag: "Intermediário",
            training: "Peito, Tríceps",
        },
        {
            image: CostasBíceps,
            name: "Treino de Peito e Tríceps",
            time: "45 min",
            tag: "Intermediário",
            training: "Peito, Tríceps",
        },
        {
            image: CostasBíceps,
            name: "Treino de Peito e Tríceps",
            time: "45 min",
            tag: "Intermediário",
            training: "Peito, Tríceps",
        },
        {
            image: CostasBíceps,
            name: "Treino de Peito e Tríceps",
            time: "45 min",
            tag: "Intermediário",
            training: "Peito, Tríceps",
        }
    ];

    return (
        <>
            <section className='training'>
                <div className=' container'>

                    <p className='title'>Treinos<span style={{ color: "var(--primary-red)" }}>Recomendos</span></p>
                    <div className='training-cards'>
                        {items.map((item, index) => (
                            <div key={index} className="training-infos">
                                <img src={item.image} alt="" />
                                <div className='training-infos-text'>
                                    <p className='title-training'>{item.name}</p>
                                    <div className='training-infos-description'><AiOutlineClockCircle /> <p className='time-training'> {item.time} </p> - <p className='tag-training'> {item.tag}</p></div>
                                    <p className='type-training'> <GoPulse /> {item.training}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}
