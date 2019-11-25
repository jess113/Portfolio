import React, { Component } from 'react';
import logo from './images/Long_SPM_logo.png';
import introduction from './images/SPMintro.jfif';
import SPMlogo from './images/SPMlogo.png';
import SPMicons from './images/SPMicons.png';
import SPMcolour from './images/SPMcolour.png';
import SPMtypo from './images/SPMtypo.png';
import SPMflow from './images/SPMflow.png';
import SPMflowsketch from './images/SPMflowsketch.png';

import ImageGallery from 'react-image-gallery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';


const navItems = ['introduction', 'research', 'ideation', 'prototype']

class SPM extends Component {
  state = {
    showMobileMenu: false,
  }

  render() {
    const { showMobileMenu } = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'

    return (
      <React.Fragment>
        <nav id="nav-wrap">
          <div className="mobile-btn"
            onClick={() => this.setState({ showMobileMenu: !showMobileMenu })}>
          </div>
          {/* <div className="mobile-btn" href="#" title="Hide navigation">Hide navigation</div> */}
          <ul id="nav" className={navClass}>
            {/*<Link id="back" to="/" style={{ padding: '10px' }}>back</Link>*/}
            <Scrollspy id="list" items={navItems} currentClassName="current">
              {navItems.map((item, i) => {
                return <li key={i}><AnchorLink href={`#${item}`}>{capitalize(item)}</AnchorLink></li>
              })}
            </Scrollspy>
          </ul>
        </nav>

        <img src={logo} title="A visual design exercise" alt="SPM" />
        <section id="introduction">
          <div className="row top-content">
            <div className="three columns header-col">
              <h1><span>Introduction</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <p>
                      The Seattle Pinball Museum (SPM) is an arcade center dedicated to the preservation of pinball. Their stated mission is to share pinball with local collectors and display vintage pinball machines as a form of interactive, kinetic art. The primary audience are “pinheads”—pinball enthusiasts and collectors—as well as tourists; the venue is also a popular spot for Seattle locals.
                  </p>
                    <p>
                      In this visual design exercise, I set out to completely redesign the logo, iconography, and typography of the SPM brand.
                  </p>
                    <img src={introduction} title="Introduction" alt="in" style={{ marginBottom: 30 }} />
                    <p>
                      This project was completed over nine weeks as part of an undergraduate course on User-Centered Design in the Human Centered Design and Engineering department at the University of Washington in Winter 2019.
                  </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="research">
          <div className="row content">
            <div className="three columns header-col">
              <h1><span>Research</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Design Research</h3>
                    <p>
                      In the initial stage of the final assignment, my team first conduct background research on the client to understand their mission, and how that mission is visually represented in their current brand identity. By visiting SPM's physical location in Seattle and interviewing storeowners over phone, we are able to identify SPM's stated mission, primary and secondary audience, constituent relation, and current visual brand.
                    </p>
                    <h6>Takeaways</h6>
                    <ul>
                      <li><span>• </span>Mission: Sharing vintage pinball display as interactive kinetic art while revitalizing Chinatown neighbourhood</li>
                      <li><span>• </span>Audience: Pinball enthusiasts "pinheads", collectors, tourists (~14%), and locals (~22%)</li>
                      <li><span>• </span>Relationship: A haven for pinheads and a family-like partnership with both fellow collectors and the local community</li>
                    </ul>
                    <h3>Competitive Analysis</h3>
                    <p>
                      We look at both local and national competitors to SPM. We review the official websites of the Pacific Pinball Museum (Alameda, CA) and the Pinball Hall of Fame (Las Vegas, CA), as well as more than 15 local pinball and other game arcades in Seattle. By evaluating their respective visual brands we can get a better sense of industry standards and expectations, and thus decide on what can be done to improve SPM.
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="ideation">
          <div className="row content">
            <div className="three columns header-col">
              <h1><span>Ideation</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Logo</h3>
                    <p>
                      After conducting design research—a visual brand audit—on SPM, I move on to develop three distinct directions for a new logo, and finally decided on a stylized wordmark as the strategic direction.
                    </p>
                    <img src={SPMlogo} title="Logo" alt="lg" style={{ marginBottom: 30 }} />
                    <p>
                      The logo is a stylized rendering of the acronym SPM. The goal is to convey the vintage aesthetic and the playful tone of a gaming venue. Retro and geometric elements from the current logo’s display typeface are preserved. The letters are altered to form a single graphic through similarity and proximity. The colour palette is an analogous scheme of purple and red, characteristic of the strikingly colourful pinball machines.
                    </p>
                    <h3>Iconography</h3>
                    <p>
                    In the next phase of creating a consistent visual system, I design a pair of icons for SPM's potential web/mobile site. The “Games” icon features a pinball and a single flipper, while the “Hours” icon is an hourglass. The design themes here are still retro and playful. The icon designs remain visually consistent with that of the logo—simple, geometric in shape and bright red in colour. On the mobile app, the alternative design (neon version) is activated when the icon is tapped.
                    </p>
                    <img src={SPMicons} title="Icons" alt="lc" style={{ marginBottom: 30 }} />
                    <h3>Colour &amp; Typography</h3>
                    <p>
                      To complete the brand book, I delineate directions colour scheme and typographic choices. The general colour palette for the brand is an analogous scheme of red and purple with value/saturation changes.
                    </p>
                    <img src={SPMcolour} title="Colour Scheme" alt="cs" style={{ marginBottom: 30 }} />
                    <p>
                      For typography, a combination of two typefaces with variations in weight and size is capable of showing at least 4 levels of information hierarchy.
                    </p>
                    <img src={SPMtypo} title="Typographic Choices" alt="tc" style={{ marginBottom: 30 }} />
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <section id="prototype">
          <div className="row bottom-content">
            <div className="three columns header-col">
              <h1><span>Prototype</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Mobile Flow</h3>
                    <p>
                      As the culmination of refining the new visual systm, I design a 3-screen flow for an imagined SPM mobile site/app illustrating a potential microinteraction—searching through a list of pinball games in the SPM collection. "Pinheads" and other pinball enthusiasts would want to look up information of a specific game on the SPM site/app. On the “Games List” page, user can tap on any game card to view its info on a pop-up window.
                    </p>
                    <img src={SPMflowsketch} title="Mobile Flow Sketches" alt="mfs" style={{ marginBottom: 30 }} />
                    <img src={SPMflow} title="3-Screen Mobile Flow" alt="mf" style={{ marginBottom: 30 }} />
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}

export default SPM;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}