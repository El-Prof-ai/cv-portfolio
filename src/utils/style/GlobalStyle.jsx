import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: Inter;
    }

    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#1E1E1E' : 'white'};
        color: ${(props) => (props.isDarkMode ? '#F1F1F1' : '#212529')};
        margin: 0;
    }
`;

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
