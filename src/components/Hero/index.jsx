import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import { Link } from 'react-router-dom';
import portrait from '../../assets/profil.jpg';
import styled from 'styled-components';
import cv from '../../file/CV_ALEX_FOUEGUIM_DOUANLA.pdf';

const PortraitContainer = styled.div`
  position: relative;
  width: 170px;
  height: 210px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PortraitBg = styled.div`
  position: absolute;
  width: 150px;
  height: 190px;
  background: #7e74f1;
  border-radius: 22px;
  top: 10px;
  left: 10px;
  transform: rotate(-10deg);
  z-index: 1;
  box-shadow: 0 4px 24px rgba(126, 116, 241, 0.15);
`;

const PortraitWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 190px;
  border-radius: 18px;
  overflow: hidden;
  background: #22232a;
  box-shadow: 0 4px 24px rgba(0,0,0,0.25);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const networks = [
  {
    title: 'github',
    link: 'https://github.com/El-Prof-ai',
    icon: 'bi bi-github',
    class: 'list-inline-item mx-md-5',
  },
  {
    title: 'whatsapp',
    link: 'https://wa.me/+237690903327',
    icon: 'bi bi-whatsapp',
    class: 'list-inline-item mx-2',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/alex-foueguim-douanla-1a91892b8/',
    icon: 'bi bi-linkedin',
    class: 'list-inline-item mx-2 mx-md-5',
  },
  {
    title: 'mail',
    link: 'mailto:afoueguimdouanla@gmail.com?subject=Need more informations',
    icon: 'bi bi-envelope-at',
    class: 'list-inline-item mx-2 mx-md-0',
  },
];

const TitleStyle = styled.h6`
  display: inline-block;
  color: var(--cinder-light, #656d72);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  line-height: 8.303px;
  letter-spacing: 5.595px;
`;

const TiretDisign = styled.div`
  display: inline-block;
  width: 10.536px;
  height: 3.692px;
  background: var(--light-4, #d9d9d9);
  margin-right: 10px;
`;

const TitleCustom = styled.h1`
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-style: normal;
  display: inline-block;
  width: 6rem;
`;
const Mboumela = styled.h1`
  display: inline-block;
  width: 25%;
  color: var(--purple, #7e74f1);
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-style: normal;
`;

function Hero() {
  return (
    <section className="mb-5 pb-5" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 ">
            <TiretDisign></TiretDisign>
            <TitleStyle>MY NAME IS</TitleStyle>
            <br />
            <TitleCustom className="text-secondary my-1 my-md-2">
              Alex
            </TitleCustom>
            <Mboumela className="my-1 my-md-2">FOUEGUIM DOUANLA</Mboumela>
            <p className="">
              I am a junior Full Stack developer and I use several cutting-edge technologies 
              such as Java/Spring, React, Python, SQL, Git and many others. I am also passionate 
              about AI where I did a relevant project that takes into account the notions of natural 
              language processing and computer vision. My passion as a generalist engineer in 
              computer engineering is to take on challenges; I have no limits.
            </p>
            <div className="py-2">
              <a href={cv}>
                <button className="btn btn-secondary">dowload cv</button>
              </a>
            </div>
            <ul className="list-inline">
              {networks.map((network, index) => (
                <li key={index} className={network.class}>
                  <Link
                    data-toggle="tooltip"
                    title={network.title}
                    to={network.link}
                    className="text-decoration-none text-secondary uk-animation-toggle"
                  >
                    <span className="uk-animation-fade m-0 p-0">
                      <i className={network.icon}></i>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 offset-md-2 col-md-5">
            <div className="uk-animation-toggle">
              <div
                className="uk-card uk-card-default uk-card-body uk-animation-shake"
                style={{ background: 'transparent' }}
              >
                <PortraitContainer>
                  <PortraitBg />
                  <PortraitWrapper>
                    <img
                      src={portrait}
                      alt="photo_profil"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </PortraitWrapper>
                </PortraitContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
