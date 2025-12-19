import Banner from "../../components/banner/banner";
import Category from "../../components/Category/category";
import Equipment from "../../components/Equipment/equipment";
import Footer from "../../components/Footer/footer";
import News from "../../components/News/news";
import Training from "../../components/Training/training";

export default function Home() {
    return (
        <>
            <Banner />
            <Category />
            <Training />
            <Equipment />
            <News />
            <Footer />
        </>
    )
}