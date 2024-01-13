import React from 'react';
import './homePage1.css';
import './homePage2.css';
import './homePage3.css';
import {useNavigate } from "react-router-dom";
import { makeup,appliancesData,bathbody,skincare } from '../Data/allData';
import CardItem from '../image/CardItem';

function Homepage() {
    const navigate = useNavigate();
    
    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToContact = () => {
        navigate('/contact');
    };

    const navigateToAbout = () => {
        navigate('/about');
    };

    return (
        <>
            <header>
                <nav>
                    <div class="logo">
                        <img src="img/nykaalogo.png" alt="" />
                    </div>
                    <ul>
                        <button className="navbutton" onClick={navigateToAbout}>About</button>
                        <button className="navbutton" onClick={navigateToLogin}>Login</button>
                        <button className="navbutton" onClick={navigateToContact}>Contact</button>

                    </ul>
                    <div class="search">
                        <input type="text" id="" placeholder="Search" />
                        <button type="submit" class="btn">Search</button>
                    </div>

                    <div class="cart">
                        <img class="wishlist " src="img/wishlist.png" alt="" />
                        <img class="scart" src="img/shopping-cart.png" alt="" />
                    </div>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="slider">
                        <img src="https://source.unsplash.com/1600x500/?shopping,makeup" alt="" />
                    </div>
                    <div class="card">
                        <h2 class="my-2">Make-up</h2>
                        <div class="cards">
                           {makeup.map((img) => {
                                return <CardItem img={img.image} name={img.name} offer={img.offer}/>
                           })
                           }
                        </div>
                    </div>
                    <div class="card">
                        <h2 class="my-2">Skincare</h2>
                           <div className="cards">
                           {skincare.map((img) => {
                                return <CardItem img={img.image} name={img.name} offer={img.offer}/>
                           })
                           }
                           </div>
                    </div>

                    <div class="card">
                        <h2 class="my-2">Bath and Body</h2>
                        <div className="cards">
                           {bathbody.map((img) => {
                                return <CardItem img={img.image} name={img.name} offer={img.offer}/>
                           })
                           }
                           </div>
                    </div>

                    <div class="card">
                        <h2 class="my-2">Appliances</h2>
                        <div class="cards">
                        {appliancesData.map((img) => {
                                return <CardItem img={img.image} name={img.name} offer={img.offer}/>
                           })
                           }
                        </div>
                    </div>

                </div>
            </main>
            <footer class="flex-all-center">
                <p>Copyright &copy; Nykaa.com</p>
            </footer>
        </>
    )
}

export default Homepage;