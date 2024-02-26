
import React from 'react';
import './dashboardcomponent.css';

const DashboardComponent = () => {
  
  const tasks = [
    { id: 1, name: 'UI Designing', deadline: '3rd Jan', status: 'Pending' },
    { id: 2, name: 'UI Review', deadline: '1st Jan', status: 'Pending' },
    { id: 3, name: 'Interaction Design', deadline: '28th Dec', status: 'Completed' },
    { id: 4, name: 'Development', deadline: '12th Dec', status: 'Pending' },
  ];

  return (
    <div className="dashboard-container">
      <header>
        <h1>Hello, Admin</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </header>

      <div className="greeting">
        <p>Have a nice day</p>
      </div>

      <div className="admin-section">
        <p>Admin</p>
        <button>Screen Options</button>
      </div>
      <h3>ALL TASKS</h3>

      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.deadline}</td>
              <td>
                {task.status === 'Completed' ? (
                  <button className="completed-button">Marked Completed</button>

                ) : (
                  <button>Mark As Complete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardComponent;
