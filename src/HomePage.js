import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';

const HomePage = ({ isAuthenticated }) => {
  return (
    <div className="home-page">
         <Navbar />
      <div className="content-section">
        <div className="soundcloud-embed">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1507046836&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </div>
        <div className="links-container">
          <a
            href="https://gate.sc/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSeIsBvKTDUC17v-jzpRzg0vbFzq8Mf-KVrsN6KdydDhrsX9fw%2Fviewform%3Fusp%3Dsf_link&token=e8ab9d-1-1683482139113"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Submissions Form
          </a>
          <a
            href="https://gate.sc/?url=https%3A%2F%2Fwww.instagram.com%2Fbloxe.bristol%2F&token=d29253-1-1683482139113"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
