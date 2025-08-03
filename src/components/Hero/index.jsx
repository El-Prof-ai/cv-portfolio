import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import { Link } from 'react-router-dom';
import portrait from '../../assets/portrait.svg';
import styled from 'styled-components';
import cv from '../../file/CV_MBOUMELA_Elton.pdf';

const networks = [
  {
    title: 'github',
    link: 'https://github.com/mboumela-elton',
    icon: 'bi bi-github',
    class: 'list-inline-item mx-md-5',
  },
  {
    title: 'whatsapp',
    link: 'https://wa.me/+237691873720',
    icon: 'bi bi-whatsapp',
    class: 'list-inline-item mx-2',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/elton-mboumela-679a1226b/',
    icon: 'bi bi-linkedin',
    class: 'list-inline-item mx-2 mx-md-5',
  },
  {
    title: 'mail',
    link: 'mailto:mboumelae@gmail.com?subject=Need more informations',
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
              Elton
            </TitleCustom>
            <Mboumela className="my-1 my-md-2">Mboumela.</Mboumela>
            <p className="">
              As a Junior Full Stack developer, I use several cutting-edge
              technologies such as Java/Spring, React, Python, C++, SQL, Git and many
              more. My passion is to find the most suitable solution for your needs.
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
                <img
                  src={portrait}
                  alt="photo_profil"
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
