import { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './global';


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
      <h1>Vaihdetaan värejä</h1>
      <button onClick={toggleTheme}>Vaihda</button>
      </>
    </ThemeProvider>
  );
}

export default App;
