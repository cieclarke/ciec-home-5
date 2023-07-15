import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './components/Home';
import Container from './components/Container';
import './styles/app.css';
import Photos from './components/Photos';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container />}>
            <Route path='/photos' element={<Photos />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
