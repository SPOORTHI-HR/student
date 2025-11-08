import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface LoginPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  onLoginSuccess: () => void;
}

export function LoginPage({ isDarkMode, setIsDarkMode, onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onLoginSuccess();
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'
          : 'bg-gradient-to-br from-[#7BD5F5] via-[#787FF6] to-[#1F2F98]'
      }`}
    >
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
          isDarkMode
            ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
            : 'bg-white/20 text-white hover:bg-white/30'
        } backdrop-blur-sm shadow-lg`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>

      <div
        className={`w-full max-w-md mx-4 p-8 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
          isDarkMode
            ? 'bg-gray-800/50 backdrop-blur-xl border border-gray-700'
            : 'bg-white/10 backdrop-blur-xl border border-white/20'
        }`}
      >
        <div className="text-center mb-8 animate-fade-in">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-500 ${
              isDarkMode
                ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                : 'bg-gradient-to-br from-[#4ADEDE] to-[#1CA7EC]'
            } shadow-lg`}
          >
            <div className="w-8 h-8 border-4 border-white rounded-full animate-pulse" />
          </div>
          <h1
            className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
              isDarkMode ? 'text-white' : 'text-white'
            }`}
          >
            Welcome Back
          </h1>
          <p
            className={`transition-colors duration-500 ${
              isDarkMode ? 'text-gray-400' : 'text-white/80'
            }`}
          >
            Please login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <label
              htmlFor="email"
              className={`block text-sm font-medium transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-white'
              }`}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                  : 'bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-[#1CA7EC] focus:border-transparent'
              } backdrop-blur-sm`}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <label
              htmlFor="password"
              className={`block text-sm font-medium transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-white'
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-transparent'
                  : 'bg-white/20 border border-white/30 text-white placeholder-white/60 focus:ring-[#1CA7EC] focus:border-transparent'
              } backdrop-blur-sm`}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className={`w-4 h-4 rounded transition-colors duration-300 ${
                  isDarkMode
                    ? 'text-blue-500 bg-gray-700 border-gray-600'
                    : 'text-[#1CA7EC] bg-white/20 border-white/30'
                }`}
              />
              <span
                className={`ml-2 text-sm transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-white'
                }`}
              >
                Remember me
              </span>
            </label>
            <a
              href="#"
              className={`text-sm font-medium transition-colors duration-300 hover:underline ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-white hover:text-white/80'
              }`}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] animate-slide-up ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                : 'bg-gradient-to-r from-[#1CA7EC] to-[#1F2F98] hover:from-[#4ADEDE] hover:to-[#1CA7EC] text-white'
            } shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
            style={{ animationDelay: '0.4s' }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
