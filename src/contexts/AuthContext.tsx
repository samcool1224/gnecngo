import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  WordPressUser,
  clearStoredAuthToken,
  fetchCurrentWordPressUser,
  getStoredAuthToken,
  loginWithWordPress,
} from "@/lib/wordpress";

interface AuthContextType {
  user: WordPressUser | null;
  token: string | null;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<WordPressUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = getStoredAuthToken();

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const currentUser = await fetchCurrentWordPressUser(storedToken);
        setToken(storedToken);
        setUser(currentUser);
      } catch {
        clearStoredAuthToken();
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      const loginResult = await loginWithWordPress(username, password);
      const currentUser = await fetchCurrentWordPressUser(loginResult.token);

      setToken(loginResult.token);
      setUser(currentUser);

      return { error: null };
    } catch (error) {
      clearStoredAuthToken();
      setToken(null);
      setUser(null);

      return {
        error: error instanceof Error ? error : new Error("WordPress login failed."),
      };
    }
  };

  const signOut = async () => {
    clearStoredAuthToken();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
