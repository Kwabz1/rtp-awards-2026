'use client';

import { useEffect, useState } from 'react';

const eventDate = new Date('2026-12-12T18:00:00');

const slides = [
  '/rtp-memory-01.jpg',
  '/rtp-memory-02.jpg',
  '/rtp-memory-03.jpg',
  '/rtp-memory-04.jpg',
  '/rtp-memory-05.jpg',
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  /* ================================
     AUTOMATIC IMAGE ROTATION
  ================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  /* ================================
     EVENT COUNTDOWN
  ================================= */

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = eventDate.getTime() - now.getTime();

      if (distance <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
      );
      const seconds = Math.floor(
        (distance / 1000) % 60
      );

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();

    const countdown = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const goNext = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveSlide(
      (activeSlide - 1 + slides.length) % slides.length
    );
  };

  const getPosition = (index) => {
    const difference =
      (index - activeSlide + slides.length) % slides.length;

    if (difference === 0) return 'active';
    if (difference === 1) return 'right';
    if (difference === 2) return 'farRight';
    if (difference === slides.length - 1) return 'left';

    return 'farLeft';
  };

  return (
    <main className="rtpSite">
<div className="floatingRtpLogo" aria-hidden="true">
  <img src="/rtp-logo.png" alt="" />
</div>

      {/* ================= HEADER ================= */}

      <header className="rtpHeader">

        <a href="#home" className="rtpBrand">
          <img
            src="/rtp-logo.png"
            alt="RTP Awards 2026"
          />

          <span>RTP AWARDS</span>
        </a>

        <nav className="desktopNav">
          <a href="#about">About RTP</a>
          <a href="#awards">Awards</a>
          <a href="#nominees">Nominees</a>
          <a href="#events">Journey</a>
          <a href="#media">Gallery</a>
          <a href="#partners">Partners</a>
        </nav>

        <a href="#vote" className="voteButton">
          VOTE NOW
        </a>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>

      {menuOpen && (
        <div className="mobileMenu">
          <a onClick={() => setMenuOpen(false)} href="#about">About RTP</a>
          <a onClick={() => setMenuOpen(false)} href="#awards">Awards</a>
          <a onClick={() => setMenuOpen(false)} href="#nominees">Nominees</a>
          <a onClick={() => setMenuOpen(false)} href="#events">Journey</a>
          <a onClick={() => setMenuOpen(false)} href="#media">Gallery</a>
          <a onClick={() => setMenuOpen(false)} href="#partners">Partners</a>
          <a onClick={() => setMenuOpen(false)} href="#vote">Vote Now</a>
        </div>
      )}

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="heroIntro">

          <span className="heroLine"></span>

          <p>RTP AWARDS 2026</p>

          <span className="heroLine"></span>

        </div>

        <h1>
          THE VOICE.
          <span> THE FACE.</span>
          <br />
          THE STORIES.
        </h1>

        <p className="heroSub">
          Celebrating the personalities, voices and stories
          shaping Ghanaian media.
        </p>

        {/* ================= CAROUSEL ================= */}

        <div className="carousel">

          <button
            className="carouselArrow carouselPrev"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="carouselStage">

            {slides.map((src, index) => (

              <button
                key={src}
                className={`slide ${getPosition(index)}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`View RTP Awards memory ${index + 1}`}
              >

                <img
                  src={src}
                  alt={`Moment from RTP Awards ${index + 1}`}
                />

                <span className="slideNumber">
                  {String(index + 1).padStart(2, '0')}
                </span>

              </button>

            ))}

          </div>

          <button
            className="carouselArrow carouselNext"
            onClick={goNext}
            aria-label="Next image"
          >
            ›
          </button>

        </div>

        {/* ================= CAPTION ================= */}

        <div className="carouselCaption">

          <div className="captionTop">

            <span></span>

            <strong>
              MOMENTS FROM RTP AWARDS
            </strong>

            <span></span>

          </div>

          <p>
            A look back at the personalities, celebrations
            and unforgettable moments from previous RTP Awards.
          </p>

        </div>

        {/* ================= COUNTDOWN ================= */}

        <div className="countdownSection">

          <p className="countdownLabel">
            COUNTDOWN TO THE MAIN EVENT
          </p>

          <h2>
            12 DECEMBER 2026
          </h2>

          <p className="eventLocation">
            ACCRA · GHANA
          </p>

          <div className="countdown">

            <div className="timeBox">
              <strong>{timeLeft.days}</strong>
              <span>DAYS</span>
            </div>

            <div className="timeBox">
              <strong>{timeLeft.hours}</strong>
              <span>HOURS</span>
            </div>

            <div className="timeBox">
              <strong>{timeLeft.minutes}</strong>
              <span>MINUTES</span>
            </div>

            <div className="timeBox">
              <strong>{timeLeft.seconds}</strong>
              <span>SECONDS</span>
            </div>

          </div>

        </div>

      </section>

{/* ================= ABOUT RTP ================= */}

<section id="about" className="aboutRtp" data-reveal>

  <div className="aboutRtpGlow"></div>

  <div className="aboutRtpInner">

    {/* OFFICIAL RTP LOGO */}
    <div className="aboutRtpVisual">

      <div className="aboutLogoHalo"></div>

      <img
        src="/rtp-logo.png"
        alt="RTP Awards 2026"
        className="aboutRtpLogo"
      />

      <div className="aboutSince">
        <span></span>
        CELEBRATING GHANAIAN MEDIA
        <span></span>
      </div>

    </div>


    {/* ABOUT CONTENT */}
    <div className="aboutRtpContent">

      <p className="aboutEyebrow">
        ABOUT RTP
      </p>

      <h2>
        Celebrating the people
        <br />
        behind <em>Ghana&apos;s media.</em>
      </h2>

      <p className="aboutLead">
        The Radio and Television Personality Awards is a premier
        platform dedicated to recognising excellence in Ghanaian
        broadcasting.
      </p>

      <p className="aboutText">
        RTP celebrates the personalities, voices and creative forces
        shaping radio, television and the evolving digital media
        landscape — recognising professionalism, creativity,
        innovation and contribution to the industry.
      </p>

      <div className="aboutStats">

        <div>
          <strong>2026</strong>
          <span>RTP AWARDS</span>
        </div>

        <div>
          <strong>12 DEC</strong>
          <span>ACCRA · GHANA</span>
        </div>

      </div>

      <a href="#awards" className="aboutDiscover">
        DISCOVER RTP
        <span>→</span>
      </a>

    </div>

  </div>

</section>

{/* ================= VOTING CATEGORIES ================= */}

<section id="vote" className="homeVoteSection" data-reveal>

  <div className="homeVoteGlow"></div>

  <div className="homeVoteHeading">

    <p className="homeVoteEyebrow">
      RTP AWARDS 2026
    </p>

    <h2>
      Your Voice.
      <br />
      <span>Your Vote.</span>
    </h2>

    <p className="homeVoteIntro">
      Celebrate the personalities, programmes and voices shaping
      Ghanaian media. Choose an award category and vote for your
      favourite nominee.
    </p>

    <div className="homeVoteDivider">
      <span></span>
      <img src="/rtp-logo.png" alt="RTP Awards 2026" />
      <span></span>
    </div>

  </div>


  <div className="homeVoteGrid">

    <a href="/vote/radio-personality" className="homeVoteCard">
      <div className="homeVoteShine"></div>

      <span className="homeVoteNumber">01</span>

      <div className="homeVoteLogo">
        <img src="/rtp-logo.png" alt="" />
      </div>

      <div className="homeVoteCardContent">
        <small>RTP AWARDS 2026</small>
        <h3>Radio<br />Personality</h3>
        <p>View nominees & vote</p>
      </div>

      <div className="homeVoteArrow">→</div>
    </a>


    <a href="/vote/television-personality" className="homeVoteCard">
      <div className="homeVoteShine"></div>

      <span className="homeVoteNumber">02</span>

      <div className="homeVoteLogo">
        <img src="/rtp-logo.png" alt="" />
      </div>

      <div className="homeVoteCardContent">
        <small>RTP AWARDS 2026</small>
        <h3>Television<br />Personality</h3>
        <p>View nominees & vote</p>
      </div>

      <div className="homeVoteArrow">→</div>
    </a>


    <a href="/vote/radio-program" className="homeVoteCard">
      <div className="homeVoteShine"></div>

      <span className="homeVoteNumber">03</span>

      <div className="homeVoteLogo">
        <img src="/rtp-logo.png" alt="" />
      </div>

      <div className="homeVoteCardContent">
        <small>RTP AWARDS 2026</small>
        <h3>Radio<br />Program</h3>
        <p>View nominees & vote</p>
      </div>

      <div className="homeVoteArrow">→</div>
    </a>


    <a href="/vote/television-program" className="homeVoteCard">
      <div className="homeVoteShine"></div>

      <span className="homeVoteNumber">04</span>

      <div className="homeVoteLogo">
        <img src="/rtp-logo.png" alt="" />
      </div>

      <div className="homeVoteCardContent">
        <small>RTP AWARDS 2026</small>
        <h3>Television<br />Program</h3>
        <p>View nominees & vote</p>
      </div>

      <div className="homeVoteArrow">→</div>
    </a>

  </div>


 <a href="/vote" className="exploreAwardsCard">
  <div className="exploreAwardsCardGlow"></div>

  <div className="exploreAwardsCardLogo">
    <img
      src="/rtp-logo.png"
      alt="RTP Awards 2026"
    />
  </div>

  <div className="exploreAwardsCardContent">
    <span>RTP AWARDS 2026</span>

    <h3>
      Explore All
      <br />
      Award Categories
    </h3>

    <p>
      Discover all categories, nominees and cast your vote.
    </p>

    <div className="exploreAwardsArrow">→</div>
  </div>
</a>

</section>

{/* =========================================================
    RTP AWARDS — HOMEPAGE EXTENSION
    Keep existing Hero / About / Voting sections above this
========================================================= */}

{/* ===================== NOMINEES / WINNERS ===================== */}
<section className="rtpShowcase" id="nominees" data-reveal>
  <div className="rtpSectionGlow rtpGlowOne"></div>

  <div className="rtpContainer">
    <div className="rtpSectionIntro">
      <span className="rtpEyebrow">RTP AWARDS</span>

      <h2>
        Celebrating Ghana's
        <span> Finest Voices.</span>
      </h2>

      <p>
        Discover the personalities, programmes and media professionals
        who continue to shape Ghana's broadcasting industry.
      </p>
    </div>

    <div className="rtpFeatureGrid">

      <a href="/nominees" className="rtpFeature rtpFeatureLarge">
        <img
          src="/rtp-gallery/award-winner.jpg"
          alt="RTP Awards"
        />

        <div className="rtpFeatureShade"></div>

        <div className="rtpFeatureText">
          <span>2026 RTP AWARDS</span>
          <h3>Meet The Nominees</h3>
          <p>
            Discover this year's nominees across all award categories.
          </p>

          <div className="rtpTextButton">
            VIEW NOMINEES <b>→</b>
          </div>
        </div>
      </a>

      <a href="/winners" className="rtpFeature">
        <img
          src="/rtp-gallery/award-winner1.jpg"
          alt="RTP award winner"
        />

        <div className="rtpFeatureShade"></div>

        <div className="rtpFeatureText">
          <span>RTP LEGACY</span>
          <h3>Past Winners</h3>
          <p>Celebrating excellence through the years.</p>

          <div className="rtpTextButton">
            DISCOVER <b>→</b>
          </div>
        </div>
      </a>

      <a href="/vote" className="rtpFeature rtpVoteFeature">
        <div className="rtpFeatureShade"></div>

        <div className="rtpVoteStar">★</div>

        <div className="rtpFeatureText">
          <span>RTP AWARDS 2026</span>
          <h3>Your Voice.<br />Your Vote.</h3>

          <p>
            Support the personalities and programmes that made an impact.
          </p>

          <div className="rtpGoldButton">
            VOTE NOW <b>→</b>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>


{/* ===================== EVENTS ===================== */}
<section className="rtpEvents" id="events" data-reveal>

  <div className="rtpEventsGlow"></div>

  <div className="rtpContainer">

    <div className="rtpSectionIntro rtpIntroLeft">
      <span className="rtpEyebrow">THE ROAD TO RTP 2026</span>

      <h2>
        The Journey To
        <span> Awards Night.</span>
      </h2>

      <p>
        Follow the major moments leading to Ghana's celebration of
        excellence in broadcasting.
      </p>
    </div>


    <div className="rtpTimeline">

      <div className="rtpTimelineItem">
        <span className="rtpTimelineNumber">01</span>

        <div>
          <small>RTP AWARDS 2026</small>
          <h3>Nomination Launch</h3>
          <p>The journey begins.</p>
        </div>

        <span className="rtpTimelineArrow">↗</span>
      </div>


      <div className="rtpTimelineItem">
        <span className="rtpTimelineNumber">02</span>

        <div>
          <small>RTP AWARDS 2026</small>
          <h3>Nominees Announcement</h3>
          <p>Meet the personalities competing for the honours.</p>
        </div>

        <span className="rtpTimelineArrow">↗</span>
      </div>


      <div className="rtpTimelineItem">
        <span className="rtpTimelineNumber">03</span>

        <div>
          <small>INDUSTRY</small>
          <h3>RTP Conference</h3>
          <p>Connecting Ghana's broadcasting and media industry.</p>
        </div>

        <span className="rtpTimelineArrow">↗</span>
      </div>


      <div className="rtpTimelineItem rtpTimelineFeatured">
        <span className="rtpTimelineNumber">04</span>

        <div>
          <small>12 DEC • ACCRA</small>
          <h3>RTP Awards Night</h3>
          <p>The ultimate celebration of Ghanaian media excellence.</p>
        </div>

        <span className="rtpTimelineArrow">→</span>
      </div>

    </div>

  </div>
</section>


{/* ================= CINEMATIC VIDEO ================= */}

<section className="rtpFilm" data-reveal>

  <video
    className="rtpFilmVideo"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source
      src="/rtp-gallery/winner-stage.mp4"
      type="video/mp4"
    />
  </video>

  <div className="rtpFilmShade"></div>

  <div className="rtpFilmContent">
    <span>THE RTP STAGE</span>

    <h2>
      Where Ghana's<br />
      <em>Stars Shine.</em>
    </h2>

    <p>
      Experience the energy, emotion and unforgettable moments
      from Ghana's premier radio and television awards.
    </p>

    <a href="#vote">
      EXPLORE THE AWARDS <b>→</b>
    </a>
  </div>

  <div className="rtpFilmLabel">
    RTP AWARDS • ACCRA • GHANA
  </div>

</section>


{/* ===================== GALLERY ===================== */}
<section className="rtpGallery" id="media" data-reveal>

  <div className="rtpContainer">

    <div className="rtpSplitHeading">
      <div>
        <span className="rtpEyebrow">RTP MEDIA</span>

        <h2>
          Moments That
          <span> Live Forever.</span>
        </h2>
      </div>

      <a href="/media" className="rtpCircleLink">
        <span>VIEW MEDIA</span>
        <b>→</b>
      </a>
    </div>


    <div className="rtpGalleryGrid">

      <div className="rtpGalleryPhoto rtpGalleryTall">
        <img
          src="/rtp-gallery/award-winner1.jpg"
          alt="RTP award presentation"
        />

        <div className="rtpGalleryOverlay">
          <span>AWARDS NIGHT</span>
          <h3>Celebrating Excellence</h3>
        </div>
      </div>


      <div className="rtpGalleryPhoto">
        <img
          src="/rtp-gallery/red-carpet-event.jpg"
          alt="RTP red carpet"
        />

        <div className="rtpGalleryOverlay">
          <span>RED CARPET</span>
          <h3>Style & Elegance</h3>
        </div>
      </div>


      <div className="rtpGalleryPhoto">
        <img
          src="/rtp-gallery/award-winner.jpg"
          alt="RTP award winner"
        />

        <div className="rtpGalleryOverlay">
          <span>WINNERS</span>
          <h3>Icons Of Broadcasting</h3>
        </div>
      </div>


      <div className="rtpGalleryPhoto rtpGalleryWide">
        <img
          src="/rtp-gallery/traditional-guests.jpg"
          alt="RTP ceremony"
        />

        <div className="rtpGalleryOverlay">
          <span>RTP LEGACY</span>
          <h3>Ghana. Culture. Media.</h3>
        </div>
      </div>


      <div className="rtpGalleryPhoto">
        <img
          src="/rtp-gallery/red-carpet-event.jpg"
          alt="RTP red carpet event"
        />

        <div className="rtpGalleryOverlay">
          <span>ARRIVALS</span>
          <h3>The Red Carpet</h3>
        </div>
      </div>


      <div className="rtpGalleryPhoto">
        <img
          src="/rtp-gallery/celebration.jpg"
          alt="RTP celebration"
        />

        <div className="rtpGalleryOverlay">
          <span>CELEBRATION</span>
          <h3>Unforgettable Moments</h3>
        </div>
      </div>

    </div>

  </div>
</section>


{/* ===================== PARTNERS ===================== */}
<section className="rtpPartners" id="partners" data-reveal>

  <div className="rtpContainer">

    <span className="rtpEyebrow">RTP PARTNERS</span>

    <h2>
      Together We
      <span> Celebrate Excellence.</span>
    </h2>

    <p>
      RTP Awards proudly works with organisations committed to
      supporting Ghanaian media and creative excellence.
    </p>

  </div>


  <div className="rtpPartnerMarquee">

    <div className="rtpPartnerTrack">

      <span>MEDIA PARTNER</span>
      <i>✦</i>

      <span>OFFICIAL PARTNER</span>
      <i>✦</i>

      <span>RTP AWARDS 2026</span>
      <i>✦</i>

      <span>SPONSOR</span>
      <i>✦</i>

      <span>MEDIA PARTNER</span>
      <i>✦</i>

      <span>OFFICIAL PARTNER</span>
      <i>✦</i>

      <span>RTP AWARDS 2026</span>
      <i>✦</i>

      <span>SPONSOR</span>
      <i>✦</i>

    </div>

  </div>

  <p className="rtpPartnerNote">
    Official partner logos will appear here.
  </p>

</section>


{/* ===================== FINAL CTA ===================== */}
<section className="rtpFinalCTA" data-reveal>

  <div className="rtpCTAGlow"></div>

  <div className="rtpCTAStar">★</div>

  <div className="rtpCTAContent">

    <span>RTP AWARDS 2026</span>

    <h2>
      The Voices.<br />
      The Faces.<br />
      <em>The Stories.</em>
    </h2>

    <p>
      Ghana decides who takes the spotlight.
    </p>


    <div className="rtpCTAActions">

      <a href="/vote" className="rtpMainCTA">
        VOTE NOW
        <b>→</b>
      </a>

      <a href="/nominees" className="rtpSecondaryCTA">
        VIEW NOMINEES
      </a>

    </div>

  </div>

</section>


{/* ===================== FOOTER ===================== */}
<footer className="rtpFooter">

  <div className="rtpFooterGlow"></div>

  <div className="rtpContainer">

    <div className="rtpFooterTop">

      <div className="rtpFooterBrand">

        <img src="/rtp-logo.png" alt="RTP Awards" />

        <p>
          Celebrating the personalities, voices and creative forces
          shaping Ghanaian broadcasting.
        </p>

      </div>


      <div className="rtpFooterLinks">

        <div>
          <span>EXPLORE</span>

          <a href="#about">About RTP</a>
          <a href="/vote">Awards</a>
          <a href="/nominees">Nominees</a>
          <a href="/winners">Winners</a>
        </div>


        <div>
          <span>DISCOVER</span>

          <a href="/news">News</a>
          <a href="#events">Journey</a>
          <a href="#media">Gallery</a>
          <a href="#partners">Partners</a>
        </div>


        <div>
          <span>CONNECT</span>

          <a href="/contact">Contact</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>

      </div>

    </div>


    <div className="rtpFooterBottom">

      <span>© 2026 RTP AWARDS. ALL RIGHTS RESERVED.</span>

      <a href="/vote">
        YOUR VOICE. YOUR VOTE. →
      </a>

    </div>

  </div>

</footer>



{/* Subtle Ghana motion accents */}
<div className="ghanaMotionLayer" aria-hidden="true">
  <div className="ghanaFloatFlag">
    <span className="ghanaRed"></span><span className="ghanaGold"><b>★</b></span><span className="ghanaGreen"></span>
  </div>
  <div className="ghanaGoldCar">
    <div className="carFlag"><i></i><i></i><i></i><b>★</b></div>
    <div className="carCabin"></div><div className="carBody"></div>
    <span className="wheel wheelOne"></span><span className="wheel wheelTwo"></span>
  </div>
</div>


</main>
    
  );
}
