import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetail } from "./components/ProjectDetail";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 Page - Optional but good to have */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center px-4">
                  <div className="text-center max-w-sm w-full">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-black text-white">
                        404
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-gray-700 mb-4">
                      Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-6">
                      The page you're looking for doesn't exist or has been
                      moved.
                    </p>
                    <a
                      href="/"
                      className="inline-block px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300"
                    >
                      Return Home
                    </a>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
