"use client";

import { useState } from "react";

export default function RTPHeader() {

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="rtpNav">

      <a href="/" className="rtpNavLogo">
        <img src="/rtp-logo.png" alt="RTP Awards" />
      </a>


      <nav className="rtpDesktopNav">
        <a href="/#about">About</a>
        <a href="/vote">Awards</a>
        <a href="/nominees">Nominees</a>
        <a href="/winners">Winners</a>
        <a href="/#news">News</a>
        <a href="/#events">Events</a>
        <a href="/#media">Media</a>
      </nav>


      <a href="/vote" className="rtpNavVote">
        VOTE NOW
        <span>→</span>
      </a>


      <button
        className={`rtpMenuButton ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <i></i>
        <i></i>
      </button>


      <div className={`rtpMobileMenu ${open ? "open" : ""}`}>

        <div className="rtpMobileMenuGlow"></div>

        <nav>
          <a href="/" onClick={closeMenu}>
            <span>01</span> Home
          </a>

          <a href="/#about" onClick={closeMenu}>
            <span>02</span> About RTP
          </a>

          <a href="/vote" onClick={closeMenu}>
            <span>03</span> Awards
          </a>

          <a href="/nominees" onClick={closeMenu}>
            <span>04</span> Nominees
          </a>

          <a href="/winners" onClick={closeMenu}>
            <span>05</span> Winners
          </a>

          <a href="/#news" onClick={closeMenu}>
            <span>06</span> News
          </a>

          <a href="/#events" onClick={closeMenu}>
            <span>07</span> Events
          </a>

          <a href="/#media" onClick={closeMenu}>
            <span>08</span> Media
          </a>

          <a href="/#partners" onClick={closeMenu}>
            <span>09</span> Partners
          </a>
        </nav>


        <a
          href="/vote"
          className="rtpMobileVote"
          onClick={closeMenu}
        >
          <small>RTP AWARDS 2026</small>

          <strong>
            VOTE NOW
            <b>→</b>
          </strong>
        </a>

      </div>

    </header>
  );
}
