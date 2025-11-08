import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { StudentDashboard } from './components/StudentDashboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <StudentDashboard
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
      onLogout={() => setIsLoggedIn(false)}
    />
  ) : (
    <LoginPage
      isDarkMode={isDarkMode}
      setIsDarkMode={setIsDarkMode}
      onLoginSuccess={() => setIsLoggedIn(true)}
    />
  );
}

export default App;
