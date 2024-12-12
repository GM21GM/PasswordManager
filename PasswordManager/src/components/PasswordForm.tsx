import React, { useState, useEffect } from 'react';
import { encryptPassword, decryptPassword } from '../utils/passwordutils';

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
  const [rndPassword, setRndPassword] = useState('');

  const generatePassword = () => {
    const rndPassword = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setRndPassword(rndPassword);
    setPassword(rndPassword); // Setze das generierte Passwort in das Eingabefeld
  }

  // Wenn ein Passwort bearbeitet wird, setze die bestehenden Werte in die Eingabefelder
  useEffect(() => {
    if (isEditing && currentPassword) {
      const decryptedPassword = decryptPassword(currentPassword.password, 'secret');
      setPassword(decryptedPassword);
      setWebsite(currentPassword.website);
      setUsername(currentPassword.username);
    }
  }, [isEditing, currentPassword]);

  // Formular-Submit-Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === '') {
      setPassword(rndPassword);
    }
    if (website === '') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          setWebsite(tabs[0].url || '');
        }
      });
    }
    // Validierung: Alle Felder müssen ausgefüllt sein
    if (!website || !username) {
      alert('Bitte alle Felder ausfüllen!');
      return;
    }

    // Verschlüsselung des Passworts
    const encryptedPassword = encryptPassword(password);

    const newPassword = {
      id: currentPassword ? currentPassword.id : Date.now().toString(),
      website,
      username,
      password: encryptedPassword,
    };

    onSubmit(newPassword);
    setWebsite('');
    setUsername('');
    setRndPassword('');
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
        <button type="button" onClick={generatePassword}>Passwort generieren</button>
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