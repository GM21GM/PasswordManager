import React, { useState, useEffect } from 'react';

interface Password {
  id: string;
  website: string;
  username: string;
  password: string;
}

interface PasswordFormProps {
  isEditing: boolean;
  currentPassword: Password | null;
  onSubmit: (password: Password) => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ isEditing, currentPassword, onSubmit }) => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Wenn ein Passwort bearbeitet wird, setze die bestehenden Werte in die Eingabefelder
  useEffect(() => {
    if (isEditing && currentPassword) {
      setWebsite(currentPassword.website);
      setUsername(currentPassword.username);
      setPassword(currentPassword.password);
    }
  }, [isEditing, currentPassword]);

  // Formular-Submit-Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validierung: Alle Felder müssen ausgefüllt sein
    if (!website || !username || !password) {
      alert('Bitte alle Felder ausfüllen!');
      return;
    }

    const newPassword = {
      id: currentPassword ? currentPassword.id : Date.now().toString(),
      website,
      username,
      password,
    };

    onSubmit(newPassword);
    setWebsite('');
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">{isEditing ? 'Passwort bearbeiten' : 'Passwort hinzufügen'}</h2>

      <div className="mb-4">
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
        <input
          type="text"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Benutzername</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Benutzername"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Passwort</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isEditing ? 'Ändern' : 'Hinzufügen'}
      </button>
    </form>
  );
};

export default PasswordForm;
