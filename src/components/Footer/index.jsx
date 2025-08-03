import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const networks = [
  {
    title: 'github',
    link: 'https://github.com/El-Prof-ai',
    icon: 'bi bi-github mx-3',
    class: 'text-decoration-none text-secondary',
  },
  {
    title: 'whatsapp',
    link: 'https://wa.me/+237690903327',
    icon: 'bi bi-whatsapp mx-3',
    class: 'text-decoration-none text-secondary mx-2',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/alex-foueguim-douanla-1a91892b8/',
    icon: 'bi bi-linkedin mx-3',
    class: 'text-decoration-none text-secondary',
  },
  {
    title: 'mail',
    link: 'mailto:afoueguimdouanla@gmail.com?subject=Need more informations',
    icon: 'bi bi-envelope-at mx-3',
    class: 'text-decoration-none text-secondary mx-2',
  },
];

function Footer() {
  return (
    <footer className="mt-5 py-5 border-top" id="footer">
      <Container className="text-center">
        <Row className="justify-content-center my-3">
          <Col sm={12}>
            {networks.map((network, index) => (
              <Link
                key={index}
                data-toggle="tooltip"
                title={network.title}
                to={network.link}
                className={network.class + ' uk-animation-toggle m-0 p-0'}
              >
                <span className="uk-animation-fade m-0 p-0">
                  <i className={network.icon}></i>
                </span>
              </Link>
            ))}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="">╭⊱  El - Prof  ⊱╮</Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
