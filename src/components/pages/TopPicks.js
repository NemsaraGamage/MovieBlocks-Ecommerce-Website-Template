import React from "react";
import '../styles.css'; 
import FooterBottom from "../Footer"
import Pagination from "../pages/Pagination";
import NavBarHead from "../NavBar";
import pic1 from '../pics/comedySection/1.jpg';
import pic2 from '../pics/comedySection/2.jpg';
import pic3 from '../pics/comedySection/10.jpg';
import pic4 from '../pics/3.jpg';
import pic5 from '../pics/12.jpg';


const TopPicks = () => { 

    return (
        <>
        <div className="backgroundColor">

            {/* Nav bar */}
            <NavBarHead></NavBarHead>

            {/* Top Picks */}
            <div className="latestMovie_TvshowsList">

                <p>Top Picks</p>

                <div className="secGenrebackgorund">

                    <div className="topPickCardContainer">

                        <div class="movieItem">
                            <img src={pic1} alt="Movie poster"></img>
                            <div class="movieDetails">
                                <p class="title">1. G'wed</p>
                                <p class="info">1972 &nbsp; &nbsp; 2h 55m</p>
                                <div class="movieRating">
                                    <p>&#9733;</p>
                                    <p>9.2 </p>
                                    <p class="rateLink">&#9734; Rate</p>
                                </div>
                            </div>
                        </div>

                        <div class="movieItem">
                            <img src={pic2} alt="Movie poster"></img>
                            <div class="movieDetails">
                                <p class="title">2. ted</p>
                                <p class="info">2012 &nbsp; &nbsp; 1h 46m</p>
                                <div class="movieRating">
                                    <p>&#9733;</p>
                                    <p>9.2 </p>
                                    <p class="rateLink">&#9734; Rate</p>
                                </div>
                            </div>
                        </div>

                        <div class="movieItem">
                            <img src={pic3} alt="Movie poster"></img>
                            <div class="movieDetails">
                                <p class="title">3. Love and Monsters</p>
                                <p class="info">2020 &nbsp; &nbsp; 1h 16m</p>
                                <div class="movieRating">
                                    <p>&#9733;</p>
                                    <p>6.2 </p>
                                    <p class="rateLink">&#9734; Rate</p>
                                </div>
                            </div>
                        </div>

                        <div class="movieItem">
                            <img src={pic4} alt="Movie poster"></img>
                            <div class="movieDetails">
                                <p class="title">4. Boy Kills World</p>
                                <p class="info">2024 &nbsp; &nbsp; 2h 16m</p>
                                <div class="movieRating">
                                    <p>&#9733;</p>
                                    <p>9.7 </p>
                                    <p class="rateLink">&#9734; Rate</p>
                                </div>
                            </div>
                        </div>

                        <div class="movieItem">
                            <img src={pic5} alt="Movie poster"></img>
                            <div class="movieDetails">
                                <p class="title">5. Fallout</p>
                                <p class="info">2024 &nbsp; &nbsp; 56m</p>
                                <div class="movieRating">
                                    <p>&#9733;</p>
                                    <p>8.0 </p>
                                    <p class="rateLink">&#9734; Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* footer */}
         <FooterBottom></FooterBottom>
        </>
    )
}

export default TopPicks;