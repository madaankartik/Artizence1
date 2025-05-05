import { useState } from 'react';
import './FactSection.css';
import Standing from "../../assets/TeacherStanding.jpg";

function App() {
  const [activeId, setActiveId] = useState(null);
  const toggleFaq = id => setActiveId(activeId === id ? null : id);

  const faqSections = {
    'Workspaces & Tools': [
      {
        id: 1,
        question: "What's the difference between Plan and Design workspaces?",
        answer: "The Plan Workspace helps you map your academic year, curriculum, and weekly teaching flow. The Design Workspace lets you create specific assignments like quizzes, homework, and worksheets using your AI Teaching Assistant."
      },
      {
        id: 2,
        question: "How do I use the Lesson Planner?",
        answer: "The Lesson Planner helps you organize and structure your lessons effectively."
      },
      {
        id: 3,
        question: "Can I reuse content across multiple classes?",
        answer: "Yes, you can easily share and reuse content between different classes."
      }
    ],
    'Pricing & Payments': [
      {
        id: 4,
        question: "Is YoLearn.ai free for teachers?",
        answer: "Currently, YoLearn.ai offers both free and paid plans depending on feature access."
      },
      {
        id: 5,
        question: "What’s included in each subscription tier?",
        answer: "Each tier includes different levels of AI support, lesson planning tools, and collaboration features."
      },
      {
        id: 6,
        question: "Can my school pay for my access?",
        answer: "Yes, schools can sponsor teacher access through institutional plans."
      }
    ],
    'Curriculum & Pedagogy': [
      {
        id: 7,
        question: "Is content aligned with my curriculum, board and standards?",
        answer: "Yes, content is designed to be customizable and standards‑aligned."
      },
      {
        id: 8,
        question: "Can I customize output based on grade level and learning styles?",
        answer: "Yes, the AI adapts content based on grade levels and preferred instructional approaches."
      },
      {
        id: 9,
        question: "How does the AI support differentiated instruction?",
        answer: "AI offers personalized recommendations, scaffolding options, and pacing controls for diverse learners."
      }
    ]
  };

  return (
    <div className="ALLPAGES">
      <div className="Frequently-Asked-Questions">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about YoLearn.ai</p>

        <div className="faq-wrapper">
          <div className="personStanding">
            <img src={Standing} alt="teacher standing" />
          </div>

          <div className="Switches">
            {Object.entries(faqSections).map(([section, items]) => (
              <div className="faq-section" key={section}>
                <h2 className="section-header">{section}</h2>
                <div className="faq-list">
                  {items.map(item => (
                    <div className="faq-item" key={item.id}>
                      <div
                        className="question"
                        onClick={() => toggleFaq(item.id)}
                      >
                        <h3>{item.question}</h3>
                        <button className={`toggle ${activeId === item.id ? 'active' : ''}`}>
                          <span></span>
                        </button>
                      </div>
                      {activeId === item.id && (
                        <div className="answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
