import './Home.scss';
import React from 'react';
import { fourItemLinksBlocks, whyChooseUs, priceList, socialIcons, footerInfo } from '../../config/home';
import Hero from '../Hero/Hero';
import FourItemLinks from '../FourItemLinks/FourItemLinks';
import Info from '../Info/Info';
import CTABanner from '../CTABanner/CTABanner';
import Footer from '../Footer/Footer';

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
                <div className="content__contained">
                    <FourItemLinks blocks={ fourItemLinksBlocks }/>
                    <Info info={ whyChooseUs }/>
                </div>
                <CTABanner banner={ priceList }/>
                <Footer social={ socialIcons } footerInfo={ footerInfo }/>
            </div>
            
        </div>
    );
}

export default Home;