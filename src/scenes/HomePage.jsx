import {
    Navbar,
    Hero,
    Cards,
    Hands,
    Move,
    Testimonial,
    Continent,
    Blog,
    CTA,
    Footer
} from '../components';

import { Helmet } from 'react-helmet';

const HomePage = () => {

    return (
        <div className='font-manrope'>
            <Helmet>
                <title>Envoy Angel Shipping and Logistics</title>
                <meta name="description" content="Content" />
            </Helmet>

            <Navbar />
            <Hero />
            <Cards />
            <Hands />

            <div className='move'>
                <Move />
            </div>

            <Testimonial />

            <div className='move'>
                <Continent />
            </div>

            <Blog />

            <div className='cta'>
                <CTA />
            </div>
            
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
};

export default HomePage;