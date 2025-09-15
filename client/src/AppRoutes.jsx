import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import ContributorsPage from './pages/ContributorsPage';

export default function AppRoutes() {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contributors" element={<ContributorsPage />} />
      </Routes>
    </Router>
  );
}
