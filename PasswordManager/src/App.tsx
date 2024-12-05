import React from 'react';
import PasswordManager from './components/PasswordManager';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto p-4">
        <PasswordManager />
      </div>
    </div>
  );
};

export default App;
