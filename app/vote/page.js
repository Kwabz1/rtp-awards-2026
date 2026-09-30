'use client';

import { useState } from 'react';

const categories = [
  {
    id: 'radio-personality',
    name: 'Radio Personality',
    subtitle: 'Personality of the Year',
    icon: '🎙️',
  },
  {
    id: 'television-personality',
    name: 'Television Personality',
    subtitle: 'Personality of the Year',
    icon: '📺',
  },
  {
    id: 'radio-program',
    name: 'Radio Program',
    subtitle: 'Program of the Year',
    icon: '🎧',
  },
  {
    id: 'television-program',
    name: 'Television Program',
    subtitle: 'Program of the Year',
    icon: '🎥',
  },
  {
    id: 'sports-presenter',
    name: 'Sports Presenter',
    subtitle: 'Presenter of the Year',
    icon: '⚽',
  },
  {
    id: 'entertainment-presenter',
    name: 'Entertainment Presenter',
    subtitle: 'Presenter of the Year',
    icon: '★',
  },
  {
    id: 'music-presenter',
    name: 'Music Presenter',
    subtitle: 'Presenter of the Year',
    icon: '♫',
  },
  {
    id: 'digital-media',
    name: 'Digital Media Personality',
    subtitle: 'Personality of the Year',
    icon: '◉',
  },
];

export default function VotePage() {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="votePage">

      {/* BACKGROUND EFFECTS */}
      <div className="voteAmbient" aria-hidden="true">
        <div className="voteGlow voteGlowOne"></div>
        <div className="voteGlow voteGlowTwo"></div>

        <img
          src="/rtp-logo.png"
          alt=""
          className="voteBackgroundLogo"
        />
      </div>

      {/* HEADER */}
      <header className="voteHeader">

        <a href="/#home" className="voteBrand">
          <img src="/rtp-logo.png" alt="RTP Awards 2026" />
          <div>
            <strong>RTP AWARDS</strong>
            <span>2026</span>
          </div>
        </a>

        <nav className="voteNav">
          <a href="/#home">HOME</a>
          <a href="/#about">ABOUT</a>
          <a href="/vote" className="active">
            VOTE NOW
          </a>
          <a href="/#nominees">NOMINEES</a>
          <a href="/#news">NEWS</a>
        </nav>

        <a href="#categories" className="headerVoteButton">
          VOTE NOW
        </a>

      </header>


      {/* HERO */}
      <section className="voteHero">

        <div className="voteHeroLogo">
          <img src="/rtp-logo.png" alt="RTP Awards 2026" />
        </div>

        <p className="voteEyebrow">
          RTP AWARDS 2026
        </p>

        <h1>
          MAKE YOUR <span>VOICE COUNT.</span>
        </h1>

        <p className="voteIntro">
          Celebrate excellence. Support your favourites.
          Vote for the personalities and programmes shaping
          Ghanaian media.
        </p>

        <div className="voteHeroLine">
          <span></span>
          <strong>CAST YOUR VOTE</strong>
          <span></span>
        </div>

      </section>


      {/* CATEGORIES */}
      <section id="categories" className="categoriesSection">

        <div className="categoriesHeading">

          <p>RTP AWARDS 2026</p>

          <h2>
            SELECT AN AWARD
            <span> CATEGORY</span>
          </h2>

          <div className="goldDivider"></div>

          <p className="categoryDescription">
            Choose a category below to view its nominees
            and cast your vote.
          </p>

        </div>


        {/* SEARCH */}
        <div className="categorySearch">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search award categories..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

        </div>


        {/* CATEGORY GRID */}
        <div className="categoryGrid">

          {filteredCategories.map((category, index) => (

            <a
              key={category.id}
              href={`/vote/${category.id}`}
              className="categoryCard"
              style={{
                '--delay': `${index * 0.08}s`,
              }}
            >

              <div className="cardShine"></div>
              <div className="cardGlow"></div>

              <div className="cardTop">

                <img
                  src="/rtp-logo.png"
                  alt="RTP Awards"
                  className="categoryLogo"
                />

                <span className="categoryNumber">
                  {String(index + 1).padStart(2, '0')}
                </span>

              </div>


              <div className="categoryIcon">
                <span>{category.icon}</span>
              </div>


              <div className="categoryCardContent">

                <p>RTP AWARDS 2026</p>

                <h3>{category.name}</h3>

                <span className="categorySubtitle">
                  {category.subtitle}
                </span>

              </div>


              <div className="viewNominees">

                <span>VIEW NOMINEES</span>

                <span className="categoryArrow">
                  →
                </span>

              </div>

            </a>

          ))}

        </div>


        {filteredCategories.length === 0 && (

          <div className="noCategories">
            No award category found.
          </div>

        )}

      </section>


      {/* VOTING MESSAGE */}
      <section className="votingMessage">

        <img
          src="/rtp-logo.png"
          alt="RTP Awards"
        />

        <p>YOUR VOICE</p>

        <h2>
          YOUR CHOICE.
          <br />
          <span>YOUR AWARDS.</span>
        </h2>

        <p className="votingMessageText">
          Every vote celebrates the people creating,
          informing and entertaining Ghana.
        </p>

      </section>


      <footer className="voteFooter">

        <img
          src="/rtp-logo.png"
          alt="RTP Awards"
        />

        <p>
          © 2026 Radio and Television Personality Awards.
        </p>

      </footer>

    </main>
  );
}
