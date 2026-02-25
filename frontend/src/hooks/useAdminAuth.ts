import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'debrajhero';
const SESSION_KEY = 'adminAuthenticated';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  });

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY) === 'true';
    setIsAuthenticated(stored);
  }, []);

  const authenticate = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, authenticate, logout };
}
