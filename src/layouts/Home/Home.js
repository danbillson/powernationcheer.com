import React from 'react';
import { fourItemLinksBlocks, whyChooseUs, priceList } from '../../config/home';
import Hero from '../../components/Hero/Hero';
import FourItemLinks from '../../components/FourItemLinks/FourItemLinks';
import Info from '../../components/Info/Info';
import CTABanner from '../../components/CTABanner/CTABanner';
import { hero } from '../../config/home';

const Home = () => {
    return (
        <div className="container">
            <Hero 
                title={ hero.title }
                subtitle={ hero.subtitle }
                buttonPrimary={ hero.buttonPrimary }
                buttonSecondary={ hero.buttonSecondary }
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