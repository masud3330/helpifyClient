import { Helmet } from 'react-helmet';
import Heading from '../../Component/Heading/Heading';

const About = () => {
    return (
       <div>
         <Helmet>
                <title>About | Helpify</title>
            </Helmet>
        <Heading heading={'About Us'}></Heading>
        <div className='grid grid-cols-2 gap-10 my-10'>
        
         <div className='text-justify space-y-3'>
            <p>Local Need Finder is a community-driven platform that connects people in need with those who are willing to help — within their local area. Whether someone needs urgent blood, food support, home repair, or tuition help, this app bridges the gap instantly.</p>
            <p>We believe that help should never be far away. With real-time location-based posts and instant notifications, you can post your needs or lend a helping hand to someone nearby — all from one simple, easy-to-use app.</p>
            <ul className='list-disc  pl-6'>
                <li>Empowering Communities.</li>
                <li>Fast Local Response.</li>
                <li>Trusted Human Connections.</li>
            </ul>
        </div>
        <div>
            <p>image add</p>
        </div>
       </div>
       </div>
    );
};

export default About;