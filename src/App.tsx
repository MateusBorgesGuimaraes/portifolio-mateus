import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:name" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
