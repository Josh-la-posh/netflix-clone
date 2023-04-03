import { Component } from "react";
import Footer from "../Footer/Footer";
import "./HomePage.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleFaq = this.handleFaq.bind(this);
  }

  handleFaq(e) {
    e.preventDefault();

    var element = e.target.nextSibling.classList;
    if (element.contains("open")) {
      element.remove("open");
    } else {
      element.add("open");
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home-content">
          <nav className="">
            <div className="nav__content">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
                alt="Logo"
                className="logo"
              />
              <a href="/signin" className="signin">
                Sign In
              </a>
            </div>
          </nav>
          <main>
            <header id="header">
              <div className="header-img">
                <div className="header__img">
                  <div className="header__img__blur"></div>
                </div>
              </div>
              <div className="header__content">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <form action="" className="header__form">
                  <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <div className="header__form-content">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email address"
                        id="email"
                        name="email"
                      />
                      <label htmlFor="email" className="placeLabel">
                        Email address
                      </label>
                    </div>
                    <div className="label">
                      <button className="" type="submit">
                        <span>Get Started</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </header>

            <section className="story-card">
              <div className="story-card__container">
                <div className="story-card__text">
                  <h1 className="story-card__title">Enjoy on your TV.</h1>
                  <h2 className="story-card__subtitle">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                  </h2>
                </div>
                <div className="story-card__img">
                  <div className="story-card__animation__container">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                      alt=""
                      className="story-card__img"
                    />
                    <div className="story-card__animation">
                      <video className="story-card__video" autoPlay muted loop>
                        <source
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="story-card">
              <div className="story-card__container reverse">
                <div className="story-card__text">
                  <h1 className="story-card__title">
                    Download your shows to watch offline.
                  </h1>
                  <h2 className="story-card__subtitle">
                    Save your favourites easily and always have something to
                    watch.
                  </h2>
                </div>
                <div className="story-card__img">
                  <div className="story-card__animation__container-2">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                      alt=""
                      className="story-card__img"
                    />
                    <div className="story-card__animation-content">
                      <div className="story-card__animation__img">
                        <img
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                          alt=""
                        />
                      </div>
                      <div className="story-card__animation__text">
                        <div className="text-0">Stranger Things</div>
                        <div className="text-1">Downloading...</div>
                      </div>
                      <div className="story-card__animation-custom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="story-card">
              <div className="story-card__container">
                <div className="story-card__text">
                  <h1 className="story-card__title">Watch everywhere.</h1>
                  <h2 className="story-card__subtitle">
                    Stream unlimited movies and RV shows on your phone, tablet,
                    laptop, and TV.
                  </h2>
                </div>
                <div className=""></div>
              </div>
            </section>

            <section className="story-card">
              <div className="story-card__container reverse">
                <div className="story-card__text">
                  <h1 className="story-card__title">
                    Create profiles for kids.
                  </h1>
                  <h2 className="story-card__subtitle">
                    Send kids on adventurs with their favorite characters in
                    space made just for them-- free with your membership.
                  </h2>
                </div>
                <div className="story-card__img">
                  <div className="story-card__animation__container">
                    <img
                      src="https://occ-0-300-1168.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
                      alt=""
                      className="story-card__img"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="story-card story-faq">
              <div className="">
                <h1 className="story-card__faq">Frequently Asked Questions</h1>

                <ul className="faq-list">
                  <li
                    className="faq-list__item"
                    onClick={(e) => this.handleFaq(e)}
                  >
                    <button className="faq-question">
                      What is Netflix?
                      <svg className="svg-icon svg-closed"></svg>
                    </button>
                    <div className="faq-answer closed">
                      <span>
                        Netflix is a streaming service that offers a wide
                        variety of award-winning TV shows, movies, anime,
                        documentaries, and more on thousands of
                        internet-connected devices.
                        <br />
                        <br />
                        You can watch as much as you want, whenever you want
                        without a single commercial – all for one low monthly
                        price. There's always something new to discover and new
                        TV shows and movies are added every week!
                      </span>
                    </div>
                  </li>
                  <li className="faq-list__item">
                    <button
                      className="faq-question"
                      onClick={(e) => this.handleFaq(e)}
                    >
                      How much does Netflix cost?
                      <svg className="svg-icon svg-closed"></svg>
                    </button>
                    <div className="faq-answer closed">
                      <span>
                        Watch Netflix on your smartphone, tablet, Smart TV,
                        laptop, or streaming device, all for one fixed monthly
                        fee. Plans range from ₦1,200 to ₦4,400 a month. No extra
                        costs, no contracts.
                      </span>
                    </div>
                  </li>
                  <li className="faq-list__item">
                    <button
                      className="faq-question"
                      onClick={(e) => this.handleFaq(e)}
                    >
                      What can I watch?
                      <svg className="svg-icon svg-closed"></svg>
                    </button>
                    <div className="faq-answer closed">
                      <span>
                        Watch anywhere, anytime. Sign in with your Netflix
                        account to watch instantly on the web at netflix.com
                        from your personal computer or on any internet-connected
                        device that offers the Netflix app, including smart TVs,
                        smartphones, tablets, streaming media players and game
                        consoles.
                        <br />
                        <br />
                        ou can also download your favorite shows with the iOS,
                        Android, or Windows 10 app. Use downloads to watch while
                        you're on the go and without an internet connection.
                        Take Netflix with you anywhere.
                      </span>
                    </div>
                  </li>
                  <li className="faq-list__item">
                    <button
                      className="faq-question"
                      onClick={(e) => this.handleFaq(e)}
                    >
                      How do I cancel?
                      <svg className="svg-icon svg-closed"></svg>
                    </button>
                    <div className="faq-answer closed">
                      <span>
                        Netflix is flexible. There are no pesky contracts and no
                        commitments. You can easily cancel your account online
                        in two clicks. There are no cancellation fees – start or
                        stop your account anytime.
                      </span>
                    </div>
                  </li>
                  <li className="faq-list__item">
                    <button
                      className="faq-question"
                      onClick={(e) => this.handleFaq(e)}
                    >
                      What can I watch on Netflix?
                      <svg className="svg-icon svg-closed"></svg>
                    </button>
                    <div className="faq-answer closed">
                      <span>
                        Netflix has an extensive library of feature films,
                        documentaries, TV shows, anime, award-winning Netflix
                        originals, and more. Watch as much as you want, anytime
                        you want.
                      </span>
                    </div>
                  </li>
                  <li className="faq-list__item">
                    <button
                      className="faq-question"
                      onClick={(e) => this.handleFaq(e)}
                    >
                      Is Netflix good for kids?
                      <svg className="svg-icon svg-closed"></svg>
                    </button>
                    <div className="faq-answer closed">
                      <span>
                        The Netflix Kids experience is included in your
                        membership to give parents control while kids enjoy
                        family-friendly TV shows and movies in their own space.
                        <br />
                        <br />
                        Kids profiles come with PIN-protected parental controls
                        that let you restrict the maturity rating of content
                        kids can watch and block specific titles you don’t want
                        kids to see.
                      </span>
                    </div>
                  </li>
                </ul>

                <form action="" className="header__form cta-form">
                  <h3>
                    Ready to warch? Enter your email to create or restart your
                    membership.
                  </h3>
                  <div className="header__form-content">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email address"
                        id="email"
                        name="email"
                      />
                      <label htmlFor="email" className="placeLabel">
                        Email address
                      </label>
                    </div>
                    <div className="label">
                      <button className="" type="submit">
                        <span>Get Started</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
  playsinline;
}

export default Home;
