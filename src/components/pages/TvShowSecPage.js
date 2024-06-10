import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar"; 
import FooterBottom from "../Footer"
import Pagination from "../pages/Pagination";
import pic1 from '../pics/tvshowSection/1.jpg';
import pic2 from '../pics/18.jpg';
import pic3 from '../pics/15.jpg';
import pic4 from '../pics/13.jpg';
import pic5 from '../pics/12.jpg';
import pic6 from '../pics/comedySection/2.jpg';
import pic7 from '../pics/16.jpg';
import pic8 from '../pics/tvshowSection/2.jpg';
import pic9 from '../pics/tvshowSection/3.jpg';
import pic10 from '../pics/tvshowSection/4.jpg';

const TvShowSecPage = () => { 

    return (
        <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Comedy Sec */}
            <div className="latestMovie_TvshowsList">

                <p>TV Shows</p>

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
                        <p>Fresh Off the Boat</p>
                        <p>SS6 | EPS 15 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>True Lies</p>
                        <p>SS1 | EPS 13 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>FUBAR</p>
                        <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>The Artful Dodger</p>
                        <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>Fallout</p>
                        <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>ted</p>
                        <p>SS1 | EPS 7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>The Witchers: Blood....</p>
                        <p>SS1 | EPS 4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>One Piece</p>
                        <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>Ahsoka</p>
                        <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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
                        <p>Django</p>
                        <p>SS1 | EPS 10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
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

export default TvShowSecPage;