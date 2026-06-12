import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, HelpCircle, Award, Terminal, Code2 } from 'lucide-react';

const hrQuestions = [
  {
    question: "Tell me about yourself",
    answer: "Begin with a brief overview of your academic background (e.g., your degree and college). Highlight any programming languages, databases, or analytics technologies you've learned. Mention 1-2 core projects you built during your studies and describe how they solved practical problems. Conclude by expressing why you are excited to begin your career in this specific industry role.",
    template: "Structure: Present (Current state/Recent grad) → Past (Projects/Education) → Future (Career alignment with this role)."
  },
  {
    question: "Why should we hire you?",
    answer: "Align your answer with the job description. Emphasize that as a fresher, you bring strong foundational knowledge, a fast learning curve, and a proactive attitude. Mention your technical alignment (e.g., certifications or projects) and your soft skills like collaboration, adaptability, and eager work ethic.",
    template: "Structure: Match Job Skills → Highlight Learnability → Express Enthusiasm for Team Success."
  },
  {
    question: "What are your strengths & weaknesses?",
    answer: "For strengths, select a professional quality (e.g., structured debugging, strong attention to data accuracy, or collaborative problem solving) and back it with a brief example. For weaknesses, state a genuine skill limitation that you have already started improving (e.g., public speaking or writing documentation) and explain the steps you are taking to resolve it.",
    template: "Structure: Real strength + Actionable weakness with proof of ongoing self-improvement."
  },
  {
    question: "Where do you see yourself in 5 years?",
    answer: "Show that you seek long-term growth and stable skill progression. Explain that you want to master your technical role, take on complex design architectures or lead data-driven operations, and eventually mentor junior builders within the organization. Avoid stating specific managerial titles; focus on value and skill authority instead.",
    template: "Structure: Technical Mastery → Expanding Responsibility → Contribution to Mentorship/Team Leadership."
  },
  {
    question: "Why do you want to join this company?",
    answer: "Research the company's recent news, corporate culture, core products, or engineering blog. Explain how their mission matches your career objectives. Emphasize that working on their challenges (e.g., scaling platforms, processing business datasets) will provide the ideal environment for you to learn and deliver high-impact results.",
    template: "Structure: Mention Specific Company Achievement/Product → Align to Personal Career Goals → Commit to Contributing."
  }
];

const technicalQuestions = {
  sql: [
    {
      q: "What is the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN?",
      diff: "Easy",
      code: "SELECT users.id, orders.amount\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;",
      ans: "INNER JOIN returns only rows that have matching values in both tables. LEFT JOIN returns all rows from the left table and matched rows from the right table (unmatched right rows yield NULL). RIGHT JOIN does the reverse, returning all right-table rows and matching left-table rows."
    },
    {
      q: "Explain what GROUP BY does and write a query to find user order counts.",
      diff: "Easy",
      code: "SELECT user_id, COUNT(order_id) AS total_orders\nFROM orders\nGROUP BY user_id\nHAVING COUNT(order_id) > 5;",
      ans: "GROUP BY partitions data rows into groups based on matching values in one or more columns. It is paired with aggregate functions (like COUNT, SUM, AVG) to output summarize statistics for each group."
    },
    {
      q: "How do you find the second highest salary of an employee using SQL?",
      diff: "Medium",
      code: "SELECT MAX(salary) AS second_highest\nFROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);",
      ans: "You can find it by querying the maximum salary that is strictly less than the overall maximum salary (using a subquery). Alternatively, in PostgreSQL or MySQL, you can use: SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1."
    },
    {
      q: "What is the difference between WHERE and HAVING clauses?",
      diff: "Medium",
      ans: "WHERE filters rows BEFORE grouping is applied and cannot contain aggregate functions. HAVING filters grouped rows AFTER GROUP BY executes, and is specifically used to filter based on aggregate calculations."
    },
    {
      q: "What is a window function and when do you use DENSE_RANK()?",
      diff: "Hard",
      code: "SELECT name, salary,\nDENSE_RANK() OVER(PARTITION BY dept_id ORDER BY salary DESC) as rnk\nFROM employees;",
      ans: "A window function performs a calculation across a set of table rows related to the current row, without collapsing them into a single row. DENSE_RANK() assigns ranks to rows without gaps; if two rows tie for rank 1, the next rank is 2 (unlike RANK() which skips to 3)."
    }
  ],
  python: [
    {
      q: "What is the difference between a List and a Tuple in Python?",
      diff: "Easy",
      code: "my_list = [1, 2, 3]    # Mutable\nmy_tuple = (1, 2, 3)   # Immutable",
      ans: "Lists are mutable (can be changed after creation, e.g., append/pop) and are enclosed in square brackets. Tuples are immutable (cannot be altered after creation) and use parentheses. Tuples are generally faster and safer for read-only data."
    },
    {
      q: "What is List Comprehension? Provide a basic syntax example.",
      diff: "Easy",
      code: "squares = [x**2 for x in range(10) if x % 2 == 0]",
      ans: "List comprehension is a concise syntax to construct new lists from existing iterables. It provides a shorter, more readable alternative to standard multi-line for-loops."
    },
    {
      q: "Explain the difference between deepcopy and shallow copy.",
      diff: "Medium",
      code: "import copy\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)",
      ans: "A shallow copy constructs a new compound object and inserts references to the original nested objects. A deep copy constructs a new compound object and recursively copies the actual values of all nested elements, preventing changes to the copy from affecting the original."
    },
    {
      q: "What are *args and **kwargs in Python function arguments?",
      diff: "Medium",
      code: "def process_data(*args, **kwargs):\n    for item in args:\n        print(item)\n    for key, val in kwargs.items():\n        print(f'{key}: {val}')",
      ans: "*args allows a function to accept any number of positional arguments (passed as a tuple). **kwargs allows a function to accept any number of keyword arguments (passed as a dictionary)."
    },
    {
      q: "How do Python generators work and what is the yield keyword?",
      diff: "Hard",
      code: "def fibonacci(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a + b",
      ans: "Generators are functions that return an iterator lazily, generating values on-the-fly rather than allocating the entire sequence in memory. The 'yield' statement suspends the function's execution state, returning a value to the caller, and resumes where it left off on the next iteration."
    }
  ],
  powerbi: [
    {
      q: "What is DAX (Data Analysis Expressions) and why is it used?",
      diff: "Easy",
      ans: "DAX is a formula language used in Power BI, Excel PowerPivot, and Analysis Services. It enables developers to perform custom calculations, build calculated columns, structure custom measures, and execute advanced data aggregates."
    },
    {
      q: "What is the difference between Calculated Columns and Measures in Power BI?",
      diff: "Medium",
      ans: "Calculated Columns are calculated row-by-row during data refresh and consume RAM storage. Measures are evaluated dynamically on-the-fly at query time based on user filters (filter context) and do not occupy disk storage."
    },
    {
      q: "Explain the CALCULATE() function and why it is so important.",
      diff: "Medium",
      code: "Total Sales US = CALCULATE([Total Sales], Geography[Country] = 'USA')",
      ans: "CALCULATE() is the most powerful function in DAX. It evaluates an expression in a modified filter context. It can add, remove, or override filters in the report query to compute conditional results."
    },
    {
      q: "What is the difference between Star Schema and Snowflake Schema?",
      diff: "Easy",
      ans: "In a Star Schema, fact tables connect directly to denormalized dimension tables. In a Snowflake Schema, dimension tables are normalized, splitting into sub-dimension tables, creating relationships resembling a snowflake pattern. Star schema is preferred in Power BI for faster query performance."
    },
    {
      q: "How do you handle Many-to-Many relationships in Power BI data models?",
      diff: "Hard",
      ans: "Many-to-many relationships occur when multiple records in one table relate to multiple records in another. They are resolved using cross-filter directions (Both), or by inserting a Bridge/Junction Table with unique keys to create two one-to-many relationships, which avoids data ambiguity."
    }
  ],
  javascript: [
    {
      q: "What is the difference between let, const, and var?",
      diff: "Easy",
      code: "var x = 1;     // Function-scoped & Hoisted\nlet y = 2;     // Block-scoped\nconst z = 3;   // Block-scoped & Immutable reference",
      ans: "var is function-scoped and hoisted, allowing access before declaration. let and const are block-scoped (scoped to the closest curly braces) and not accessible before declaration. const variables cannot be reassigned, while let variables can."
    },
    {
      q: "What is a Closure in JavaScript?",
      diff: "Medium",
      code: "function outer() {\n  let count = 0;\n  return function inner() {\n    return ++count;\n  }\n}",
      ans: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JavaScript, closures are created every time a function is created, allowing nested functions to access parent variables even after the parent function has completed execution."
    },
    {
      q: "Explain the event loop in JavaScript.",
      diff: "Hard",
      ans: "JavaScript is single-threaded and executes non-blocking tasks using an event loop. Synchronous code runs on the call stack. Asynchronous operations (like fetch, setTimeout) are delegated to browser APIs and, upon completion, their callbacks are queued in the Task/Callback Queue (or Microtask Queue for Promises). When the stack is empty, the Event Loop pushes the queued tasks onto the stack."
    },
    {
      q: "What is the difference between double equals (==) and triple equals (===)?",
      diff: "Easy",
      ans: "Double equals (==) performs type coercion, converting the operands to a matching type before comparison. Triple equals (===) is strict equality, checking both the value and the datatype without coercion."
    },
    {
      q: "Explain Promises and how async/await simplifies them.",
      diff: "Medium",
      code: "async function loadData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}",
      ans: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. async/await is syntactic sugar built on top of Promises, allowing asynchronous code to look and behave like synchronous code, improving readability and error handling via try/catch blocks."
    }
  ],
  dsa: [
    {
      q: "What is the difference between an Array and a Linked List?",
      diff: "Easy",
      ans: "Arrays store elements in contiguous memory slots, enabling fast index-based lookups (O(1)) but expensive insertions/deletions (O(N)). Linked Lists store elements as nodes with references to the next node, scattered in memory; lookups are slow (O(N)), but insertions and deletions are quick (O(1)) once the node is located."
    },
    {
      q: "Explain Binary Search and its time complexity.",
      diff: "Medium",
      code: "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1",
      ans: "Binary Search is an optimized search algorithm used on SORTED lists. It repeatedly divides the search interval in half. If the target is lower than the middle element, it searches the left half; if higher, it searches the right. Time complexity is O(log N)."
    },
    {
      q: "What is a Stack and a Queue? Explain the core operations.",
      diff: "Easy",
      ans: "A Stack is a LIFO (Last In First Out) structure; push adds to the top, and pop removes from the top. A Queue is a FIFO (First In First Out) structure; enqueue adds to the rear, and dequeue removes from the front."
    },
    {
      q: "What is the difference between BFS and DFS traversal in graphs?",
      diff: "Medium",
      ans: "BFS (Breadth-First Search) explores nodes layer-by-layer, visiting all immediate neighbors before moving deeper; it uses a Queue. DFS (Depth-First Search) explores as far as possible along each branch before backtracking; it uses a Stack or Recursion."
    },
    {
      q: "What is Dynamic Programming (DP) and when do you use it?",
      diff: "Hard",
      ans: "Dynamic Programming is an algorithmic technique used to solve complex problems by breaking them down into simpler overlapping subproblems. It solves each subproblem once and stores the result (memoization or tabulation) to avoid redundant computations. It is used when a problem exhibits overlapping subproblems and optimal substructure (e.g., knapsack problem, shortest path)."
    }
  ]
};

function InterviewPrep() {
  const [activeMainTab, setActiveMainTab] = useState('hr');
  const [activeTechTab, setActiveTechTab] = useState('sql');
  const [expandedHR, setExpandedHR] = useState({});
  const [expandedTech, setExpandedTech] = useState({});

  const toggleHR = (idx) => {
    setExpandedHR(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleTech = (idx) => {
    setExpandedTech(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getDifficultyColor = (diff) => {
    switch (diff.toLowerCase()) {
      case 'easy':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'hard':
        return 'bg-rose-50 text-rose-700 border-rose-100';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight mb-4">
          Interview Preparation Hub
        </h1>
        <p className="text-muted text-lg max-w-xl mx-auto font-sans">
          Review core HR behaviors and technical whiteboard questions commonly asked in entry-level fresher interviews.
        </p>
      </div>

      {/* Main Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1 rounded-xl flex gap-1 border border-border">
          <button
            onClick={() => {
              setActiveMainTab('hr');
              setExpandedTech({});
            }}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
              activeMainTab === 'hr'
                ? 'bg-white text-secondary shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            HR Interview Prep
          </button>
          <button
            onClick={() => {
              setActiveMainTab('tech');
              setExpandedHR({});
            }}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
              activeMainTab === 'tech'
                ? 'bg-white text-secondary shadow-sm'
                : 'text-muted hover:text-secondary'
            }`}
          >
            Technical Interview Prep
          </button>
        </div>
      </div>

      {/* HR Interview Accordions */}
      {activeMainTab === 'hr' && (
        <div className="space-y-4 text-left">
          {hrQuestions.map((item, idx) => {
            const isOpen = expandedHR[idx];
            return (
              <div key={idx} className="bg-white border border-border rounded-xl shadow-premium overflow-hidden transition-all duration-200">
                <button
                  onClick={() => toggleHR(idx)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-secondary text-base md:text-lg">{item.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-muted" /> : <ChevronDown className="w-5 h-5 text-muted" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 space-y-4 border-t border-slate-50 bg-slate-50/20">
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted">Model Answer Strategy</p>
                      <p className="text-sm text-slate-700 leading-relaxed font-sans">{item.answer}</p>
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100/50 p-3 rounded-lg text-xs text-primary font-medium">
                      💡 {item.template}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Technical Interview Sub-Tabs & Cards */}
      {activeMainTab === 'tech' && (
        <div className="space-y-6 text-left">
          {/* Sub-tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 border-b border-border">
            {Object.keys(technicalQuestions).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTechTab(key);
                  setExpandedTech({});
                }}
                className={`px-4.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors duration-150 ${
                  activeTechTab === key
                    ? 'bg-secondary text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-muted hover:text-secondary border border-border/80'
                }`}
              >
                {key === 'dsa' ? 'Data Structures' : key}
              </button>
            ))}
          </div>

          {/* Cards list */}
          <div className="space-y-4">
            {technicalQuestions[activeTechTab].map((item, idx) => {
              const isOpen = expandedTech[idx];
              return (
                <div key={idx} className="bg-white border border-border rounded-xl shadow-premium overflow-hidden">
                  <div className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border ${getDifficultyColor(item.diff)}`}>
                          {item.diff}
                        </span>
                        <span className="text-[10px] font-mono text-muted uppercase">Question #{idx + 1}</span>
                      </div>
                      <h3 className="font-bold text-secondary text-base md:text-lg leading-tight">{item.q}</h3>
                    </div>
                    <button
                      onClick={() => toggleTech(idx)}
                      className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-secondary text-xs font-bold rounded-lg border border-border transition-colors whitespace-nowrap self-start md:self-center"
                    >
                      {isOpen ? 'Hide Answer' : 'Reveal Answer'}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-50 bg-slate-50/20 space-y-4">
                      {/* Code Block if any */}
                      {item.code && (
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Example Code / Implementation</p>
                          <pre className="p-4 bg-slate-900 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed">
                            <code>{item.code}</code>
                          </pre>
                        </div>
                      )}
                      
                      {/* Detailed Answer */}
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Core Answer Explanation</p>
                        <p className="text-sm text-slate-700 leading-relaxed font-sans bg-white p-4 rounded-lg border border-border">
                          {item.ans}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Mock CTA */}
      <div className="mt-14 bg-secondary text-white rounded-xl p-8 text-center relative overflow-hidden bg-dot-grid">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 space-y-4">
          <div className="inline-flex p-3 bg-white/5 rounded-full text-blue-400">
            <Code2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-display">Want AI-generated mock interview questions?</h3>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto">
            Get personalized technical mock sessions matching your target role, with immediate grading and score calculations.
          </p>
          <div className="relative group inline-block">
            <button
              type="button"
              className="px-6 py-3 bg-accent hover:bg-emerald-600 text-secondary font-bold rounded-lg shadow-md transition-colors"
            >
              Ask Career Mentor AI
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[11px] px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap pointer-events-none">
              AI coming soon
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default InterviewPrep;
