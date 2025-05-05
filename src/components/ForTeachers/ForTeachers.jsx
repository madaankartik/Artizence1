import React from 'react';
import './ForTeachers.css'; 

const ForTeachers = () => {
  return (
    <div className="for-teachers-dropdown">
      <div className="ai-team">
        <h3>Your AI Teaching Assistants Team</h3>
        <p>Your Personalized AI Team of smart assistants that help you plan, assign, and evaluate — faster.</p>
        <ul>
          <li><strong>AI Planning Assistant:</strong> Plan your year — set goals, align curriculum, and schedule lessons.</li>
          <li><strong>AI Class Assistant:</strong> Create quizzes, homework, assignments personalized by AI.</li>
          <li><strong>AI Resource Generator:</strong> Flashcards, slides, visual aids in seconds.</li>
          <li><strong>AI Admin Assistant:</strong> Track progress, send reports, manage communication.</li>
          <li><strong>AI Growth Assistant:</strong> PD goals — self-assess, earn certifications.</li>
          <li><strong>AI Co-Teacher:</strong> Teach with an AI avatar, explain concepts, and guide students.</li>
        </ul>
      </div>
      <div className="ai-platform-grid">
        <div className="feature"><h4>Planning Studio</h4><p>Set goals, align curriculum, and plan your year.</p></div>
        <div className="feature"><h4>Teaching Studio</h4><p>Lesson Plans, quizzes, homework, and more.</p></div>
        <div className="feature"><h4>Content Lab</h4><p>Flashcards, slideshows, infographics — AI-powered.</p></div>
        <div className="feature"><h4>Command Desk</h4><p>Performance reports, parent comms, all-in-one dashboard.</p></div>
        <div className="feature"><h4>Growth Hub</h4><p>Set PD goals, track certifications, AI coaching.</p></div>
        <div className="feature"><h4>Avatar Hub</h4><p>Create and share AI teaching avatars.</p></div>
      </div>
    </div>
  );
};

export default ForTeachers;
