import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import styled from 'styled-components';
import VerticalLinearStepper from './stepper';

const technologies = [
  {
    title: 'Java/Spring',
    progress: '70%',
    icon: 'fab fa-java fa-2x me-3',
  },
  {
    title: 'Node JS',
    progress: '65%',
    icon: 'fab fa-node fa-2x me-3',
  },
  {
    title: 'React JS / Next JS',
    progress: '80%',
    icon: 'fab fa-react fa-2x me-3',
  },
  {
    title: 'Python / Django',
    progress: '60%',
    icon: 'fab fa-python fa-2x me-3',
  },
  {
    title: 'C / C++',
    progress: '40%',
    icon: 'fa-solid fa-c fa-2x me-3',
  },
  {
    title: 'SQL / noSQL',
    progress: '70%',
    icon: 'fa-solid fa-database fa-2x me-3',
  },
];

const TitleStyle = styled.h6`
  display: inline-block;
  color: var(--cinder-light, #656d72);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
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
  font-weight: 7px;
  width: auto;
`;
const PurpleProgress = styled.div`
  background-color: #7e74f1;
`;

function EducationSkills() {
  return (
    <section className="my-5 py-5" id="educationSkills">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div>
            <TiretDisign></TiretDisign>
            <TitleStyle>SKILLS</TitleStyle>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5 mb-md-5 pb-md-5">
          <TitleCustom className="text-secondary">
            Academy & Aptitude
          </TitleCustom>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <VerticalLinearStepper />
          </div>
          <div className="col-12 col-md-6 border-start border-top border-light">
            <p className="">
              For 3+ years, I have been continuously learning in the field of
              full stack and experimenting with new technologies and frameworks,
              and here you can see a summary of my skills.
            </p>
            {technologies.map((technology, index) => (
              <div key={index} className="mb-3">
                <div className="row justify-content-center align-items-center">
                  <div className="col-2 col-md-1">
                    <div>
                      <i
                        className={technology.icon}
                        style={{ color: '#7e74f1' }}
                      ></i>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="progress text-center"
                      style={{ height: '15px' }}
                    >
                      <PurpleProgress
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: technology.progress }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {technology.title}
                      </PurpleProgress>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default EducationSkills;
