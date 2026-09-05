import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./app.css";
import Layout from './Layout';
import Home from './Home';
import DataUpload from "./UploadPage";
import ContributePage from './ContributePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<DataUpload />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;