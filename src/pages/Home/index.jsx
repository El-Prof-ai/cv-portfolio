import Header from '../../components/Header';
import Hero from '../../components/Hero/index';
import Services from '../../components/Services';
import EducationSkills from '../../components/EducationSkills';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Project from '../../components/project';
import GlobalStyle from '../../utils/style/GlobalStyle';
import { ThemeProvider } from '../../utils/context';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import ReactGA from 'react-ga';

function Home() {
  // ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="container-fluid">
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Hero />
        <Services />
        <Project />
        <EducationSkills />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
export default Home;
