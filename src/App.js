import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './routes/About';
import Home from './routes/Home';
import Movie_detail from './routes/Movie_detail';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* path의 주소가 되면 element의 컴포넌트를 불러옴. */}
        <Route path='/about' element={<About />} />
        <Route path='/Movie_detail' element={<Movie_detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App