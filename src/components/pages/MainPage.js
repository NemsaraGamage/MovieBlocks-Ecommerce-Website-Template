import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar"; 
import FooterBottom from "../Footer"
import pic1 from '../pics/1.jpg';
import pic2 from '../pics/2.jpg';
import pic3 from '../pics/3.jpg';
import pic4 from '../pics/4.jpg';
import pic5 from '../pics/5.jpg';
import pic6 from '../pics/6.jpg';
import pic7 from '../pics/7.jpg';
import pic8 from '../pics/8.jpg';
import pic9 from '../pics/9.jpg';
import pic10 from '../pics/10.jpg';
import pic11 from '../pics/11.jpg';
import pic12 from '../pics/12.jpg';
import pic13 from '../pics/13.jpg';
import pic14 from '../pics/14.jpg';
import pic15 from '../pics/15.jpg';
import pic16 from '../pics/16.jpg';
import pic17 from '../pics/17.jpg';
import pic18 from '../pics/18.jpg';
import pic19 from '../pics/19.jpg';
import pic20 from '../pics/20.jpg';
import dogLogo from '../pics/dog.png'

const MainPage = () => { 

  return (
    <>
      <div className="backgroundColor">

        {/* Nav bar */}
        <NavBarHead></NavBarHead>

        {/* Latest Movies */}
        <div className="latestMovie_TvshowsList">

          <div className="doglogoCon">
            <img className="doglogo" src={dogLogo} alt="Dog Logo" />
          </div>

          <a className="line"></a>

          <h1>One stop for all movie or Tv show!</h1>

          <p className="desBlock">MovieBlocks is a place where you can watch all your movies, tv shows and other content that you desire</p>

          <div className="large-search-bar">
            <input type="text" placeholder="Search..." />
          </div>

          <p>Trending Movies</p>

          <div className="secbackgorund">

            <div className="movieCardContainer">
              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic1} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>Godzilla Minus One</p>
                  <p>2023 | 125m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>The Fall Guy</p>
                  <p>2024 | 126m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>Boy Kills World</p>
                  <p>2024 | 111m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>Kingdom of the Plan....</p>
                  <p>2024 | 145m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>Godzilla x Kong: The....</p>
                  <p>2024 | 115m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>Kung Fu Panda 4</p>
                  <p>2024 | 94m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>Ghostbusters: Frozen...</p>
                  <p>2024 | 115m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>The Garfield Movie</p>
                  <p>2024 | 101m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>South Park: The End....</p>
                  <p>2024 | 51m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
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
                  <p>xXx</p>
                  <p>2002 | 124m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Movie</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* extra */}
        <div className="watchMore">
          <p>.......... Watch more ..........</p>
        </div>

        {/* Tv shows */}
        <div className="latestMovie_TvshowsList">

          <p>TV-Shows</p>

          <div className="secbackgorund">

            <div className="movieCardContainer">
              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic11} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>Shogun</p>
                  <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic12} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>Fallout</p>
                  <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic13} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>The Artful Dodger</p>
                  <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic14} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>Goosebumps</p>
                  <p>SS1 | EPS 10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic15} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>FUBAR</p>
                  <p>SS1 | EPS 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic16} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>The Witchers: Blood....</p>
                  <p>SS1 | EPS 4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic17} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>Moon Knight</p>
                  <p>SS1 | EPS 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic18} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>True Lies</p>
                  <p>SS1 | EPS 13 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic19} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>Moving</p>
                  <p>SS1 | EPS 20 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

              <div className="movieCard">
                <div className="movieCard-image">
                  <img src={pic20} alt="Movie poster" />
                  <div class="overlay">
                    <div class="play-button">&#9654;</div>
                  </div>
                </div>
                <div className="movieCard-content">
                  <p>X-Men '97</p>
                  <p>SS1 | EPS 10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TV</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* extra */}
        <div className="watchMore">
          <p>.......... Watch more ..........</p>
        </div>
      </div>

      {/* footer */}
      <FooterBottom></FooterBottom>

    </>
  );
};

export default MainPage;