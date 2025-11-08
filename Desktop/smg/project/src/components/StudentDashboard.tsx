import { useState } from 'react';
import { Moon, Sun, LogOut, Book, Calendar, FileText, BarChart3, User } from 'lucide-react';

interface StudentDashboardProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  onLogout: () => void;
}

export function StudentDashboard({ isDarkMode, setIsDarkMode, onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    { id: 1, name: 'Web Development', instructor: 'John Smith', progress: 75, color: 'from-[#4ADEDE] to-[#1CA7EC]' },
    { id: 2, name: 'Data Science', instructor: 'Sarah Johnson', progress: 60, color: 'from-blue-500 to-purple-600' },
    { id: 3, name: 'UI/UX Design', instructor: 'Mike Chen', progress: 85, color: 'from-[#7BD5F5] to-[#787FF6]' },
  ];

  const assignments = [
    { id: 1, title: 'React Project', course: 'Web Development', dueDate: '2025-11-20', status: 'pending' },
    { id: 2, title: 'Python Quiz', course: 'Data Science', dueDate: '2025-11-15', status: 'submitted' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2025-11-25', status: 'pending' },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}
    >
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isDarkMode
            ? 'bg-gray-800/80 border-b border-gray-700'
            : 'bg-white/80 border-b border-gray-200'
        } backdrop-blur-xl`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg bg-gradient-to-br from-[#4ADEDE] to-[#1CA7EC] flex items-center justify-center`}
            >
              <Book className="w-6 h-6 text-white" />
            </div>
            <h1
              className={`text-xl font-bold transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Student Portal
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-700/50 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={onLogout}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                isDarkMode
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div
            className={`p-6 rounded-xl transition-all duration-500 ${
              isDarkMode
                ? 'bg-gray-800/50 border border-gray-700 hover:border-blue-500'
                : 'bg-white border border-gray-200 hover:border-[#1CA7EC]'
            } hover:shadow-lg`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Enrolled Courses
              </span>
              <Book className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-[#1CA7EC]'}`} />
            </div>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3</p>
          </div>

          <div
            className={`p-6 rounded-xl transition-all duration-500 ${
              isDarkMode
                ? 'bg-gray-800/50 border border-gray-700 hover:border-blue-500'
                : 'bg-white border border-gray-200 hover:border-[#1CA7EC]'
            } hover:shadow-lg`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                GPA
              </span>
              <BarChart3 className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3.85</p>
          </div>

          <div
            className={`p-6 rounded-xl transition-all duration-500 ${
              isDarkMode
                ? 'bg-gray-800/50 border border-gray-700 hover:border-blue-500'
                : 'bg-white border border-gray-200 hover:border-[#1CA7EC]'
            } hover:shadow-lg`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Pending Tasks
              </span>
              <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            </div>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2</p>
          </div>

          <div
            className={`p-6 rounded-xl transition-all duration-500 ${
              isDarkMode
                ? 'bg-gray-800/50 border border-gray-700 hover:border-blue-500'
                : 'bg-white border border-gray-200 hover:border-[#1CA7EC]'
            } hover:shadow-lg`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Attendance
              </span>
              <User className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            </div>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>92%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div
              className={`rounded-xl p-6 transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <h2
                className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                My Courses
              </h2>

              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className={`p-4 rounded-lg transition-all duration-300 hover:shadow-lg ${
                      isDarkMode
                        ? 'bg-gray-700/30 hover:bg-gray-700/50'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3
                          className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                        >
                          {course.name}
                        </h3>
                        <p
                          className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          {course.instructor}
                        </p>
                      </div>
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${course.color} text-white`}
                      >
                        {course.progress}%
                      </span>
                    </div>

                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${course.color}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`rounded-xl p-6 transition-all duration-500 ${
              isDarkMode
                ? 'bg-gray-800/50 border border-gray-700'
                : 'bg-white border border-gray-200'
            }`}
          >
            <h2
              className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Upcoming
            </h2>

            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-gray-700/30 hover:bg-gray-700/50'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p
                      className={`text-sm font-semibold line-clamp-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {assignment.title}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded whitespace-nowrap font-medium ${
                        assignment.status === 'submitted'
                          ? isDarkMode
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-green-100 text-green-700'
                          : isDarkMode
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </div>
                  <p
                    className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
