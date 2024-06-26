import React from "react";
import '../styles.css'; 
import FooterBottom from "../Footer"
import Pagination from "../pages/Pagination";
import NavBarHead from "../NavBar";
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
import pic11 from '../pics/2.jpg';
import pic12 from '../pics/9.jpg'
import pic13 from '../pics/6.jpg'
import pic14 from '../pics/comedySection/11.jpg';
import pic15 from '../pics/comedySection/12.jpg';

const ComedySecPage = () => { 

    return (
        <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Comedy Sec */}
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
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
                            <div className="movieCard-content-Sec">
                            <p>Love and Monsters</p>
                            <p>2020 | 118m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic11} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content-Sec">
                            <p>The Fall Guy</p>
                            <p>2024 | 126m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic12} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content-Sec">
                            <p>South Park: The End....</p>
                            <p>2024 | 51m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic13} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content-Sec">
                            <p>Kung Fu Panda 4</p>
                            <p>2024 | 94m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic14} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content-Sec">
                            <p>Rush Hour</p>
                            <p>1994 | 98m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                            </div>
                        </div>

                        <div className="movieCard">
                            <div className="movieCard-image">
                            <img src={pic15} alt="Movie poster" />
                            <div class="overlay">
                                <div class="play-button">&#9654;</div>
                            </div>
                            </div>
                            <div className="movieCard-content-Sec">
                            <p>Weird: The Al Yanko.....</p>
                            <p>2022 | 108m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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