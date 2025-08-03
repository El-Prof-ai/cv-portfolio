import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import styled from 'styled-components';
import elearning from '../../assets/elearning-sm.png';
import portfolio from '../../assets/portfolio.png';
import api from '../../assets/api.png';
import { Link } from 'react-router-dom';

const project = [
  {
    title: 'e-learning',
    framework: 'Spring & Thymeleaf',
    image: elearning,
    link: 'https://github.com/mboumela-elton/e-learning',
  },
  {
    title: 'portofolio',
    framework: 'React JS',
    image: portfolio,
    link: 'https://github.com/mboumela-elton/cv-portfolio',
  },
  {
    title: 'API Rest',
    framework: 'Spring boot / spring security',
    image: api,
    link: 'https://github.com/mboumela-elton/authentication-api',
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
  color: var(--cinder, #232e35);
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-weight: 50px;
  margin-top: auto;
`;

const CardStyle = styled.div`
  width: 18rem;
`;

function Project() {
  return (
    <section className="my-5 py-5" id="project">
      <div className="container">
        <div className="mb-5">
          <div>
            <TiretDisign></TiretDisign>
            <TitleStyle>MY WORK</TitleStyle>
          </div>
          <div className="mb-5 mb-md-5 pb-md-5">
            <TitleCustom className="text-secondary">
              Featured Portfolios
            </TitleCustom>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center gx-md-5 gy-4">
        {project.map((project, index) => (
          <div key={index} className="col-12 col-md-3 my-3">
            <CardStyle
              className="card mx-auto w-100 uk-animation-toggle"
              style={{ height: '470px' }}
            >
              <div
                className="card-img-top uk-card uk-card-default uk-card-body uk-animation-fade m-0 p-0"
                style={{ height: '400px' }}
              >
                <Link to={project.link}>
                  <img
                    src={project.image}
                    alt={project.image}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <div
                className="card-body mx-0 my-0 px-0 py-0 d-block border-top"
                style={{ height: '70px' }}
              >
                <h5 className="mx-4 py-2 my-0">
                  <b>{project.title}</b>
                </h5>
                <span className="mx-4 py-0 my-0">{project.framework}</span>
                <Link to={project.link}>
                  <i className="bi bi-link color-light"></i>
                </Link>
              </div>
            </CardStyle>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Project;
