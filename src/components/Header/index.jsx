import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';

import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className="py-4 py-md-4 my-1 my-md-4" id="header">
      <nav
        className="navbar navbar-expand-md fixed-top"
        style={
          theme === 'light'
            ? { backgroundColor: '#F0F0F0', color: '#212529' }
            : { backgroundColor: '#1E1E1E', color: '#F1F1F1' }
        }
      >
        <div className="container">
          <a
            href="#hero"
            className="navbar-brand text-uppercase fw-bold"
            style={
              theme === 'light'
                ? { color: '#212529', textDecoration: 'none' }
                : { color: '#6C757D', textDecoration: 'none' }
            }
          >
            <span
              className="bg-gradient p-1 rounded-3 text-light "
              style={{ backgroundColor: '#7E74F1' }}
            >
              El
            </span>
            Prof
          </a>
          <button
            className="navbar-toggler my-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={
              theme === 'light'
                ? { color: '#212529', backgroundColor: 'transparent' }
                : { backgroundColor: 'transparent', color: '#F1F1F1' }
            }
          >
            <span
              className="bi bi-list"
              style={
                theme === 'light'
                  ? { color: '#212529', backgroundColor: 'transparent' }
                  : { backgroundColor: 'transparent', color: '#F1F1F1' }
              }
            ></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-light">
              <li className="nav-item uk-animation-toggle">
                <a
                  href="#services"
                  className="nav-link uk-animation-fade"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  Services
                </a>
              </li>

              <li className="nav-item uk-animation-toggle mx-md-5">
                <a
                  href="#project"
                  className="nav-link uk-animation-fade"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  My Work
                </a>
              </li>
              <li className="nav-item uk-animation-toggle">
                <a
                  href="#educationSkills"
                  className="nav-link uk-animation-fade"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  Background & Skills
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  href="#blog"
                  className="nav-link"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  blog
                </a>
              </li> */}
              <li className="nav-item uk-animation-toggle mx-md-5">
                <a
                  href="#contact"
                  className="nav-link uk-animation-fade"
                  style={
                    theme === 'light'
                      ? { color: '#212529' }
                      : { color: '#F1F1F1' }
                  }
                >
                  contact
                </a>
              </li>
              <li className="nav-item d-md-none" onClick={() => toggleTheme()}>
                {theme === 'light' ? (
                  <button className="bi bi-brightness-high border-0"></button>
                ) : (
                  <button
                    className="bi-moon-stars border-0"
                    style={
                      theme === 'light'
                        ? { color: '#212529', backgroundColor: 'transparent' }
                        : { backgroundColor: 'transparent', color: '#F1F1F1' }
                    }
                  ></button>
                )}
              </li>
            </ul>
          </div>
          <div className="d-none d-md-block" onClick={() => toggleTheme()}>
            {theme === 'light' ? (
              <button
                className="bi bi-brightness-high border-0"
                style={{ backgroundColor: 'transparent' }}
              ></button>
            ) : (
              <button
                style={
                  theme === 'light'
                    ? { color: '#212529', backgroundColor: 'transparent' }
                    : { backgroundColor: 'transparent', color: '#F1F1F1' }
                }
                className="bi-moon-stars border-0"
              ></button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
