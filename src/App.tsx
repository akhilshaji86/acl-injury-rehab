import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav>
          <div className="logo">
            <img src="logo.png" alt="Rehab Logo" />
            <span>ACL Rehab</span>
          </div>
          <ul className="nav-links">
            <li><a href="#exercises">Exercises</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Recover Stronger, Move Freely</h1>
          <p>Your guide to ACL injury recovery and prevention</p>
          <a href="#exercises" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        {/* Feature 1 */}
        <div className="feature">
          <img src="exercise-icon.png" alt="Exercise Icon" />
          <h2>Comprehensive Exercises</h2>
          <p>Access a library of rehab exercises with video demonstrations and instructions.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <img src="programs-icon.png" alt="Programs Icon" />
          <h2>Customized Programs</h2>
          <p>Find rehab programs tailored to your recovery stage and needs.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature">
          <img src="resources-icon.png" alt="Resources Icon" />
          <h2>Educational Resources</h2>
          <p>Read articles and watch videos on ACL injury prevention and recovery.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Create an account to personalize your experience and join our supportive community.</p>
        <a href="#login" className="cta-button">Create Account</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 ACL Rehab. All rights reserved.</p>
      </footer>
    </div>
  );
};
