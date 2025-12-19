import './equipment.css'; 
import EsteirasProfissionais from "../../assets/EsteirasProfissionais.svg";

export default function Equipment() {

    const items = [
        {
            image: EsteirasProfissionais,
            name: "Esteiras Profissionais",
            equipment: "20 esteiras de última geração",
        },
        {
            image: EsteirasProfissionais,
            name: "Esteiras Profissionais",
            equipment: "20 esteiras de última geração",
        },
        {
            image: EsteirasProfissionais,
            name: "Esteiras Profissionais",
            equipment: "20 esteiras de última geração",
        },
        {
            image: EsteirasProfissionais,
            name: "Esteiras Profissionais",
            equipment: "20 esteiras de última geração",
        }
    ];

    return (
        <>
            <section className='equipment'>
                <div className=' container'>

                    <p className='title'>Nossos<span style={{ color: "var(--primary-red)" }}>Equipamentos</span></p>
                    <div className='equipment-cards'>
                        {items.map((item, index) => (
                            <div key={index} className="equipment-infos">
                                <img src={item.image} alt="" />
                                <div className='equipment-infos-text'>
                                    <p className='title-equipment'>{item.name}</p>
                                    <p className='type-equipment'>{item.equipment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}
