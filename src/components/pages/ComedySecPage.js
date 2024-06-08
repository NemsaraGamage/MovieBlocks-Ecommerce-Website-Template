import React, { useState } from "react";
import '../styles.css';
import NavbarHead from "../NavBar"; 
import FooterBottom from "../Footer"
import pic1 from '../pics/comedySection/1.jpg';
import pic2 from '../pics/comedySection/2.jpg';
import pic3 from '../pics/comedySection/3.jpg';
import pic4 from '../pics/comedySection/4.jpg';
import pic5 from '../pics/comedySection/5.jpg';
import pic6 from '../pics/comedySection/6.jpg';
import pic7 from '../pics/comedySection/7.jpg';
import pic8 from '../pics/comedySection/8.jpg';
import pic9 from '../pics/comedySection/9.jpg';
import pic10 from '../pics/comedySection/10.jpg';
import Pagination from "../pages/Pagination";

const ComedySecPage = () => { 

    return (
        <>
        <div className="backgroundColor">

            {/* Navigation bar */}
            <NavbarHead />

            {/* Latest Movies */}
            <div className="latestMovie_TvshowsList">

                <p>Comedy Movies and Shows</p>

                <div className="secGenrebackgorund">
                    <div className="movieCardContainer">

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic1} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>G'wed</p>
                            <p>SS1 | EPS 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic2} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>ted</p>
                            <p>SS1 | EPS 7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic3} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>Chicken Run:Dawn.......</p>
                            <p>2024 | 97m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic4} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>The Family Plan</p>
                            <p>2023 | 119m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic5} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>Freelance</p>
                            <p>2023 | 109m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic6} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>Krapopolis</p>
                            <p>SS1 | EPS 23 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic7} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>Black Ops</p>
                            <p>SS1 | EPS 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic8} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>Animal Control</p>
                            <p>SS2 | EPS 9 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic9} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>Harold & Kumar Go.....</p>
                            <p>2002 | 109m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic10} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content">
                            <p>Love and Monsters</p>
                            <p>2020 | 118m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Pagination */}
            <Pagination/>

        </div>

        {/* footer */}
        <FooterBottom></FooterBottom>
        </>
    )
}

export default ComedySecPage;