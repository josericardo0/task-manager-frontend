import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListDetails from './pages/ListDetails';
import { ListProvider } from './contexts/ListContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <ListProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lists/:id" element={<ListDetails />} />
        </Routes>
      </ListProvider>
    </Router>
  );
}

export default App;
