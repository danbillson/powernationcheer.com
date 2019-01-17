import React from 'react';
import { fourItemLinksBlocks, whyChooseUs, priceList } from '../../config/home';
import Hero from '../../components/Hero/Hero';
import FourItemLinks from '../../components/FourItemLinks/FourItemLinks';
import Info from '../../components/Info/Info';
import CTABanner from '../../components/CTABanner/CTABanner';

const Home = () => {
    return (
        <div className="container">
            <Hero 
                title="Power Nation Cheer"
                subtitle="UK's Leading supplier for cheer apparel"
                buttonPrimary={{ text: 'Our Work', link: '/' }}
                buttonSecondary={{ text: 'Contact Us', link: '/' }}
            />
            <div className="content">
                <FourItemLinks blocks={ fourItemLinksBlocks }/>
                <Info info={ whyChooseUs }/>
                <CTABanner banner={ priceList }/>
            </div>
            
        </div>
    );
}

export default Home;