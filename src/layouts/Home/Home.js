import React from 'react';
import { fourItemLinksBlocks, whyChooseUs, CTABlock } from '../../config/home';
import Hero from '../../components/Hero/Hero';
import FourItemLinks from '../../components/FourItemLinks/FourItemLinks';
import Info from '../../components/Info/Info';
import DoubleBanner from '../../components/DoubleBanner/DoubleBanner';
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
                <DoubleBanner banners={ CTABlock }/>
            </div>
            
        </div>
    );
}

export default Home;