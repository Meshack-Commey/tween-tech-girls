
function LandingPage() {
    const landpage = document.getElementById('main');

    landpage.innerHTML=`
        <section class="hero-container">
            <div class="overlay"></div>
            <div class="hero-row">
                <div class="hero-text-box">
                    <h2> Tween Girls In Tech </h2>
                    <h1> Empowering Future Female Engineers </h1>
                    <p> We're building the world's largest pipeline of future female engineers </p>
                    <span>
                        <button class="btn success"> Learn more </button>
                        <button class="btn success"> Get Involved </button>
                    </span>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <div class="what-we-do">
                    <div class="text">
                        <h1> What we do</h1>
                        <p>
                            Tween Girls is on a mission to close the gender gap in technology and to change 
                            the image of what a programmer looks like and does.
                        </p>
                        <br />
                        <a href="#aboutus">About us</a>
                    </div>
                    <figure class="image">
                        <img src="../assets/what we do.jpg" />
                    </figure>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <div class="card">
                    <figure> <i id="club-icon">&hearts;</i> </figure>
                    <h2> SUMMER PROGRAMS </h2>
                    <p>Summer programs teach high school students to code and provide exposure to tech jobs</p>
                    <p><button>Read more</button></p>
                </div>
                <div class="card">
                    <figure> <i id="club-icon">&clubs;</i> </figure>
                    <h2> CLUBS </h2>
                    <p>Clubs for 3rd-5th and 6th-12th graders to explore coding in a fun & friendly environment</p>
                    <p><button>Read more</button></p>
                </div>
                <div class="card">
                    <figure><i id="club-icon">&diams;</i></figure>
                    <h2> COLLEGE & CAREER PROGRAMS </h2>
                    <p>College programs to help our alumni succeed and build community with other women in tech</p>
                    <button>Read more</button>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <figure class="image">
                    <img src="../assets/Summer-Camp-2023-Graphic-2-1.jpg" />
                </figure>
                <div class="text">
                    <h1>JOIN OUR SUMMER CAMP</h1>
                    <p>The Tween Girls In Tech Summer Camp is a one-day virtual event featuring over 25 partner companies who will share their upcoming opportunities, answer questions, and network with the GWC community and beyond! Attendees will have the opportunity to attend engaging panels, network with peers and professionals, and be considered for first-round interviews with recruiters during the live event.</p>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <div class="text">
                    <h1>Tween Girls Robo</h1>
                    <p>
                        Tween Girls Robo is a gaming experience that empowers users to code characters that better reflect them and the diversity of their communities. Users can use code to customize their character’s body type, skin tone, facial features, hair styles, outfit details and accessories, personality and identity details.
                    </p>
                </div>
                <figure class="image">
                    <img src="../assets/TweenRoboticsCamp_FE_760x460_FINAL.png" alt="Tween Girls Robo" />
                </figure>
            </div>
        </section>

        <section class="subscribe-container">
            
        </section>

        <section class="container">
            <div class="row">
                <figure class="image">
                    <img src="../assets/tween world.jpg" />
                </figure>
                <div class="text">
                    <h1> WHO RUNS THE WORLD? </h1>
                    <p>
                        Tween Girls has over 6,300 programs worldwide, and we’re growing fast! Find a Club, Summer Immersion Program, or College Loop near you or get one started.
                    </p>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <div class="subscription-box">
                    <div class="subscribe">
                        <div class="text">
                            <h1> SUBSCRIBE TO OUR NEWSLETTER </h1>
                            <p>
                                Our Weekly Newsletter is a collection of the latest and greatest from Tween Girls – top tech stories, real talk from our CEO, and news about young women changing the world.
                            </p> <br />
                            <p> <input type="email" placeholder="email" /> </p>
                            <p> <input type="submit" value="Subscribe" /> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
        <div class="row">
            <div class="subscribe">
                <div class="text">
                    <h1> BECOME A TWEEN GIRLS PARTNER </h1>
                    <p>
                        Every year, major companies and philanthropic foundations sponsor our Programs. Most partners host interactive events and mentorship, offering students a truly immersive experience.
                    </p>
                </div>
            </div>
        </div>
    </section>
    `;

    return landpage;
}


LandingPage()