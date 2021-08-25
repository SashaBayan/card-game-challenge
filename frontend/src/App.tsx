import React from 'react';
import styles from './App.module.css';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 p-10 min-h-full">
      <div className={styles.body}>
        <img className="h-16 w-16 mx-auto" src={logo} alt="React" />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
};

export default App;
