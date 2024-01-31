import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewContentPage from '../NewContentPage/NewContentPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <div>
          <NavBar user={user} setUser={setUser} />
          <div>
            <Routes>
              <Route path="/content/new" element={<NewContentPage />} />
              <Route path="/content" element={<HistoryPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
