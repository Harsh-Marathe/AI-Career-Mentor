import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';
import Home from './pages/Home';
import CareerExplorer from './pages/CareerExplorer';
import SkillRoadmaps from './pages/SkillRoadmaps';
import InterviewPrep from './pages/InterviewPrep';
import ResumeTips from './pages/ResumeTips';
import Certifications from './pages/Certifications';
import CareerQuiz from './pages/CareerQuiz';
import About from './pages/About';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'explorer':
        return <CareerExplorer />;
      case 'roadmaps':
        return <SkillRoadmaps />;
      case 'prep':
        return <InterviewPrep />;
      case 'resume':
        return <ResumeTips />;
      case 'certs':
        return <Certifications />;
      case 'quiz':
        return <CareerQuiz setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      {/* Sticky top navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Floating Chat Button */}
      <FloatingChat setActivePage={setActivePage} />
    </div>
  );
}

export default App;
