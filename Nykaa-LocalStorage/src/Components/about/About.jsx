import React from 'react';
import './about.css';

function About() {
    return (

        <>
            <div class="about-section">

                <h1>About Us</h1>
                <h3>India's Largest Beauty Destination</h3>
                <p>Since our launch, we have not only redefined the art of e-retailing beauty and personal care in India, but
                    also have been instrumental in fostering the growth of a previously relatively nascent ecosystem. From
                    bringing you domestic brands, international brands, luxury and prestige brands, premium brands, niche and
                    cult brands and expert advice and videos, coupled with our understanding of the needs and preferences of the
                    consumers,to more than 72 Luxe and On-Trend and Kiosk Stores, an ever growing online community for beauty
                    buffs, and a Beauty Helpline, we go out of our way to give you only the very best. With 2400+, 100%
                    authentic brands Nykaa offers a well curated comprehensive selection of makeup, skincare, haircare, bath and
                    body, fragrance, grooming appliances, personal care, and health and wellness categories.
                    Derived from the Sanskrit word Nayaka meaning actress or one in the spotlight, Nykaa is all about
                    celebrating the star in each woman, and being her confidante and companion as she embarks on her own journey
                    to discover her unique identity and personal style. From the widest selection of genuine beauty products
                    from around the world to beauty advice, Nykaa is truly passionate about catering to your every beauty and
                    wellness need. Because after all,
                </p>
                <p>Because after all,Your Beauty is Our Passion.
                </p>
            </div>

            < img className='aboutimg' src="https://wallpaperaccess.com/full/2357380.jpg" alt="" />

            <div class="about-card">
                <div class="about-card-item">

                    <h2 className="vision">Our Vision</h2>
                    <p>Bring inspiration and joy to people, everywhere, everyday.</p>


                </div>


                <div class="about-card-item">

                    <h1 className="mission">Our Mission</h1>
                    <p>To create a world where our consumers have access to a finely curated, authentic assortment
                        of
                        products and services that delight and elevate the human spirit.</p>

                </div>
            </div>
            <div class="values">
                <h1>Our Values</h1>
                < img className='aboutimg' src="https://adn-static1.nykaa.com/media/wysiwyg/2021/who-are-we/Nykaa-Beauty.jpg" alt="" />
                <h1>Careers</h1>
                <h3>To Apply, mail us your resume at <a href="careers@nykaa.com">careers@nykaa.com</a></h3>
            </div>


            <div class="authenticity">
                < img className='aboutimg' src="https://adn-static1.nykaa.com/media/wysiwyg/2019/who-we-are/nykaaguarnte.png" alt="" />
                <h1>Authenticity</h1>
                <p>We have developed systems and processes to ensure that the products sold on our platform are authentic, and
                    build trust among our consumers and brands. For our beauty and personal care offering, our business is
                    predominantly inventory led. This approach ensures sourcing directly from brands or their authorized
                    distributors in India. It allows us to guarantee authenticity of products bought by our consumers, an
                    important consideration for consumers of such products. We also conduct quality checks at our warehouses
                    periodically on our beauty and personal care products. For our fashion offering, we operate a managed
                    marketplace and ensure that the sellers we onboard are authorized resellers only. We have also developed
                    systems to monitor and address consumer complaints towards our ongoing commitment to authenticity.</p>
                <button className='aboutbutton'>Know More</button>
            </div>
        </>
    )
}

export default About