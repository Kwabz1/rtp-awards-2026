'use client';
import {useEffect,useState} from 'react';
const groups=['Main Competitive','Regional','Technical / Industry','Digital','Honorary Awards'];
const nav=['About RTP','Awards','Nominees','Winners','News','Events','Media','Partners'];
export default function Home(){
 const [scroll,setScroll]=useState(0); const [menu,setMenu]=useState(false);
 useEffect(()=>{const f=()=>setScroll(window.scrollY);addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 return <main>
  <header className="top"><a className="brand" href="#home"><img src="/rtp-logo.png"/><span>RTP AWARDS</span></a><nav>{nav.map(x=><a key={x} href={'#'+x.toLowerCase().replaceAll(' ','-')}>{x}</a>)}</nav><button className="vote">VOTE NOW</button><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button></header>
  {menu&&<div className="mobileMenu">{nav.map(x=><a key={x} onClick={()=>setMenu(false)} href={'#'+x.toLowerCase().replaceAll(' ','-')}>{x}</a>)}</div>}
  <section id="home" className="approvedHero">
   <div className="approvedHeroBg"/>
   <div className="approvedHeroVignette"/>
   <a className="heroHotspot heroVoteHotspot" href="#nominees" aria-label="Vote now"><span/></a>
   <a className="heroHotspot heroExploreHotspot" href="#awards" aria-label="Explore awards"><span/></a>
   <div className="heroParticles" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
  </section>
  <section id="about-rtp" className="about section"><div><span className="kicker">ABOUT RTP</span><h2>Celebrating the people behind <em>Ghana's media.</em></h2></div><div><p>The Radio and Television Personality Awards is a premier platform for recognising excellence in Ghanaian broadcasting.</p><p>RTP celebrates impact across radio, television and the evolving digital media landscape — recognising professionalism, creativity, innovation and contribution to the industry.</p><a className="textLink" href="#">DISCOVER OUR STORY →</a></div></section>
  <section id="awards" className="philosophy section"><div className="bigNum rtpLogoStage">
<img src="/rtp-logo.png" alt="RTP Awards 2026" className="rtp3DLogo"/>
<div className="rtpOrbit orbitOne"></div>
<div className="rtpOrbit orbitTwo"></div>
<div className="rtpGlow"></div>
</div><div><span className="kicker">AWARDS PHILOSOPHY</span><h2>MORE THAN <em>POPULARITY.</em></h2><p>Great broadcasting is an ecosystem. RTP celebrates both the personalities audiences know and the professionals working behind the scenes.</p></div></section>
  <section id="categories" className="categories section"><div className="sectionHead"><div><span className="kicker">RTP 2026</span><h2>AWARD <em>CATEGORIES</em></h2></div><p>Recognising excellence across Ghana's entire broadcasting and digital media ecosystem.</p></div><div className="grid">{groups.map((g,i)=><article key={g}><span>0{i+1}</span><h3>{g}</h3><p>{['Celebrating standout personalities, programmes and stations.','Honouring broadcasting excellence across Ghana’s regions.','Recognising the professionals and craft behind great broadcasting.','Celebrating innovation and impact across new media platforms.','Distinguished recognition for lasting contribution and achievement.'][i]}</p><button>EXPLORE →</button></article>)}</div></section>
  <section id="nominees" className="nominees section"><span className="kicker">THE PEOPLE SHAPING BROADCASTING</span><h2>2026 <em>NOMINEES</em></h2><div className="nomineeGrid">{['Radio','Television','Journalism','Digital'].map((x,i)=><div className="nominee" key={x}><div className="portrait"><span>{String(i+1).padStart(2,'0')}</span></div><h3>{x} Excellence</h3><p>Nominees coming soon</p></div>)}</div><a className="goldBtn">VIEW ALL NOMINEES</a></section>
  <section className="cta"><img src="/rtp-logo.png"/><div><span className="kicker">NOMINATE • VOTE • CELEBRATE</span><h2>YOUR VOICE<br/><em>MATTERS.</em></h2><p>Celebrate the broadcasters and media professionals making an impact.</p><button>VOTE NOW</button></div></section>
  <section id="winners" className="section simple"><span className="kicker">RTP LEGACY</span><h2>WINNERS & <em>HALL OF FAME</em></h2><p>Explore the personalities, programmes and institutions recognised by RTP through the years.</p></section>
  <footer><div><img src="/rtp-logo.png"/><p>Honouring Excellence. Shaping Broadcasting.</p></div><div><b>RTP AWARDS</b><a>About</a><a>Awards</a><a>Nominees</a><a>Winners</a></div><div><b>MEDIA</b><a>News</a><a>Photos</a><a>Videos</a><a>Press Kit</a></div><div><b>CONNECT</b><a>Partners</a><a>Contact</a><a>Events</a></div><small>© 2026 RTP Awards. Ghana.</small></footer>
  <div className="bottomNav"><a>HOME</a><a>AWARDS</a><a className="round">★</a><a>WINNERS</a><a>MORE</a></div>
 </main>
}
