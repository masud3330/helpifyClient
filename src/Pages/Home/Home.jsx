import { Helmet } from "react-helmet";
import Banner from "../../Component/Banner/Banner";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Helpify</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;