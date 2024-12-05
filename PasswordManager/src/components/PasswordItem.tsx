// PasswordItem.tsx
import React, { useState } from 'react';

interface Password {
  id: string;
  website: string;
  username: string;
  password: string;
}

interface PasswordItemProps {
  password: Password;
  onEdit: (password: Password) => void;
  onDelete: (id: string) => void;
}

const PasswordItem: React.FC<PasswordItemProps> = ({ password, onEdit, onDelete }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <li className="flex justify-between items-center border-b p-4">
      <div className="flex-1">
        <strong>{password.website}</strong>
        <p className="text-sm text-gray-600">Benutzername: {password.username}</p>
        <p className="text-sm">
          Passwort: {isPasswordVisible ? password.password : '••••••••'}
          <button
            className="text-blue-500 ml-2"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? 'Verbergen' : 'Anzeigen'}
          </button>
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => onEdit(password)}
        >
          Bearbeiten
        </button>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={() => onDelete(password.id)}
        >
          Löschen
        </button>
      </div>
    </li>
  );
};

export { PasswordItem }; // Benannter Export
