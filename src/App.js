import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from "react-bootstrap/ThemeProvider";

import MainPage from './pages/MainPage';
import ThankUPage from "./pages/ThankUPage";

function App() {
  const htmlRef = useRef()

  // Get theme status
  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'))

    if (isDarkMode) {
      htmlRef.current.classList.add('dark-mode')
    } 
  }, [])

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <div className="app" ref={htmlRef}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/thankU' element={<ThankUPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
