import React, { useState, useEffect } from 'react';
import { HelpCircle, RefreshCw, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "Do you enjoy writing code or programming?",
    category: "code"
  },
  {
    id: 2,
    text: "Do you enjoy working with data and numbers?",
    category: "data"
  },
  {
    id: 3,
    text: "Are you interested in solving business problems?",
    category: "business"
  },
  {
    id: 4,
    text: "Do you enjoy designing visuals or user interfaces?",
    category: "design"
  },
  {
    id: 5,
    text: "Are you interested in cybersecurity and protecting systems?",
    category: "security"
  }
];

function CareerQuiz({ setActivePage }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultCareer, setResultCareer] = useState('');
  const [resultPoints, setResultPoints] = useState([]);

  const handleOptionClick = (val) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Last question completed, trigger calculation loading
      setIsCalculating(true);
    }
  };

  useEffect(() => {
    if (isCalculating) {
      const timer = setTimeout(() => {
        setIsCalculating(false);
        calculateRecommendation();
        setShowResult(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isCalculating]);

  const calculateRecommendation = () => {
    const q1 = answers[0]; // code
    const q2 = answers[1]; // data
    const q3 = answers[2]; // business
    const q4 = answers[3]; // design
    const q5 = answers[4]; // security

    let career = 'Data Analyst';
    let details = [];

    if (q1 === 'yes' && q2 === 'yes') {
      career = 'AI Engineer';
      details = [
        'You enjoy writing algorithms and querying complex datasets, which aligns with AI systems.',
        'AI engineering combines heavy python scripting with statistics and model validations.',
        'Your profile maps to neural networks, model training, and LLM integrations.'
      ];
    } else if (q1 === 'yes' && q2 !== 'yes') {
      career = 'Software Engineer';
      details = [
        'You enjoy structured scripting and application logic over database analysis.',
        'Software engineering focuses on application architecture, OOP patterns, and frontend/backend integrations.',
        'Your inputs suggest a natural fit for web applications, algorithms, and microservice builds.'
      ];
    } else if (q1 !== 'yes' && q2 === 'yes') {
      career = 'Data Analyst';
      details = [
        'You prefer analyzing datasets, patterns, and charts rather than writing complex application software.',
        'Data analysts clean raw columns, write SQL, and construct dashboards for business insight.',
        'This matches spreadsheets, SQL aggregation queries, and Power BI tools.'
      ];
    } else if (q3 === 'yes') {
      career = 'Business Analyst';
      details = [
        'You prioritize business flow solutions, client communication, and system operations.',
        'Business analysts build mockups, outline user stories, write PRDs, and guide developer workflows.',
        'A strong non-coding path with high demand in tech consulting and product companies.'
      ];
    } else if (q4 === 'yes') {
      career = 'Web Developer';
      details = [
        'You have a strong creative eye and want to visual design digital systems.',
        'Web developers write styling code (HTML/CSS/Tailwind) and scripts to make sites interactive.',
        'You will enjoy making UI layouts, prototyping designs, and coding reactive interfaces.'
      ];
    } else if (q5 === 'yes') {
      career = 'Cybersecurity Analyst';
      details = [
        'You are motivated to secure computers, study compliance protocols, and monitor traffic logs.',
        'Cybersecurity features threat detection, network administration, cryptography, and risk assessment.',
        'Ideal if you enjoy working with Linux command lines, firewalls, and network configurations.'
      ];
    } else {
      // Default fallback
      career = 'Data Analyst';
      details = [
        'Data Analytics provides a versatile initial entry to build core data skills like SQL and Excel.',
        'It has lower coding barriers and massive entry-level job volumes.',
        'You can easily transition into other software engineering tracks as your skills expand.'
      ];
    }

    setResultCareer(career);
    setResultPoints(details);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setResultCareer('');
    setResultPoints([]);
  };

  // Progress Percentage calculation
  const progressPercent = showResult 
    ? 100 
    : isCalculating 
      ? 100 
      : Math.round(((currentStep + 1) / questions.length) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-3">
          Find Your Ideal Career
        </h1>
        <p className="text-muted text-base max-w-md mx-auto">
          Answer 5 quick questions about your interests, and our algorithm will suggest your starting tech trajectory.
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="mb-8 space-y-2 text-left">
        <div className="flex justify-between text-xs text-muted font-bold uppercase tracking-wider">
          <span>{showResult ? 'Quiz Completed' : `Question ${currentStep + 1} of ${questions.length}`}</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-300 ease-out" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Card Wrapper */}
      <div className="bg-white border border-border rounded-xl p-8 shadow-premium text-center min-h-[320px] flex flex-col justify-center">
        
        {/* State 1: Answering Questions */}
        {!isCalculating && !showResult && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 text-primary rounded-full inline-block">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary max-w-lg mx-auto leading-snug">
                {questions[currentStep].text}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <button
                onClick={() => handleOptionClick('yes')}
                className="w-full py-3.5 bg-slate-50 hover:bg-primary hover:text-white text-secondary font-bold rounded-lg border border-slate-200 hover:border-primary transition-all duration-150 shadow-sm"
              >
                Yes
              </button>
              <button
                onClick={() => handleOptionClick('somewhat')}
                className="w-full py-3.5 bg-slate-50 hover:bg-primary hover:text-white text-secondary font-bold rounded-lg border border-slate-200 hover:border-primary transition-all duration-150 shadow-sm"
              >
                Somewhat
              </button>
              <button
                onClick={() => handleOptionClick('no')}
                className="w-full py-3.5 bg-slate-50 hover:bg-primary hover:text-white text-secondary font-bold rounded-lg border border-slate-200 hover:border-primary transition-all duration-150 shadow-sm"
              >
                Not really
              </button>
            </div>
          </div>
        )}

        {/* State 2: Calculating spinner */}
        {isCalculating && (
          <div className="space-y-4 py-8">
            <div className="flex justify-center">
              <RefreshCw className="w-12 h-12 text-primary animate-spin" />
            </div>
            <h3 className="text-lg font-bold text-secondary">Analyzing Answers...</h3>
            <p className="text-xs text-muted max-w-xs mx-auto">Matching your parameters against technical roles and market demand indexes.</p>
          </div>
        )}

        {/* State 3: Display Results */}
        {showResult && !isCalculating && (
          <div className="space-y-6 text-left animate-fadeIn">
            <div className="text-center pb-4 border-b border-border space-y-2">
              <div className="p-3.5 bg-emerald-50 text-accent rounded-full inline-block mb-1">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted font-extrabold">Your Career Result</p>
              <h2 className="text-3xl font-extrabold text-secondary font-display">
                🎯 {resultCareer}
              </h2>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-muted font-bold">Why this fits your profile:</h4>
              <ul className="space-y-3">
                {resultPoints.map((pt, index) => (
                  <li key={index} className="flex gap-2.5 text-sm text-slate-700 leading-relaxed font-sans">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-accent font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                      ✓
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-between">
              <button
                onClick={() => setActivePage('explorer')}
                className="px-6 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm hover:shadow transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
              >
                <span>Explore this Career</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-secondary font-semibold rounded-lg border border-border transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default CareerQuiz;
