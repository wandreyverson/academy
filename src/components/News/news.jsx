import './news.css';
import NovasAulas from "../../assets/NovasAulas.svg";
import Button from '../Button/button';
import { GoArrowRight } from "react-icons/go";

export default function News() {

    const items = [
        {
            image: NovasAulas,
            date: "15 Jan 2025",
            title: "Esteiras Profissionais",
            news: "20 esteiras de última geração",
        },
        {
            image: NovasAulas,
            date: "15 Jan 2025",
            title: "Esteiras Profissionais",
            news: "20 esteiras de última geração",
        }
    ];

    return (
        <>
            <section className='news'>
                <div className=' container'>

                    <p className='title'>Últimas<span style={{ color: "var(--primary-red)" }}>Notícias</span></p>
                    <div className='news-cards'>
                        {items.map((item, index) => (
                            <div key={index} className="news-infos">
                                <img src={item.image} alt="" />
                                <div className='news-infos-text'>
                                    <p className='date-news'>{item.date}</p>
                                    <p className='title-news'>{item.title}</p>
                                    <p className='sub-title-news'>{item.news}</p>
                                </div>

                                <Button type="button" variant="without">Leia Mais <GoArrowRight /> </Button>

                            </div>

                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}
