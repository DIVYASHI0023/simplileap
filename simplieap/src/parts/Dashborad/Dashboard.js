
import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Simplileap</h1>
        <nav>
          <ul>
            <li><NavLink to="/dashboardcomponent">Dashboard</NavLink></li>
            <li><NavLink to="/content-hub">Content Hub</NavLink></li>
            <li><NavLink to="/conversations">Conversations</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li><NavLink to="/compose">Compose</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
    
        <h2>Welcome to your Dashboard</h2>
        <p>Explore the features and manage your content.</p>
      </main>
      <footer>
        <section className="pro-section">
          <h2>Upgrade to Pro</h2>
          <p>Get access to all features and enhance your experience.</p>
          <button>Get Pro</button>
        </section>
      </footer>
    </div>
  );
};

export default Dashboard;
