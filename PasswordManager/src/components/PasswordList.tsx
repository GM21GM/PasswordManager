import React from 'react';
import { decryptPassword } from '../utils/passwordutils';

interface Password {
  id: string;
  website: string;
  username: string;
  password: string;
}

interface PasswordListProps {
  passwords: Password[];
  onEdit: (password: Password) => void;
  onDelete: (id: string) => void;
}

const PasswordList: React.FC<PasswordListProps> = ({ passwords, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Gespeicherte Passwörter</h2>
      <ul>
        {passwords.map((password) => (
          <li key={password.id} className="mb-4 p-4 border border-gray-300 rounded-md shadow-md bg-white">
            <p><strong>Website:</strong> {password.website}</p>
            <p><strong>Benutzername:</strong> {password.username}</p>
            <p><strong>Passwort:</strong> {decryptPassword(password.password, 'secret')}</p>
            <button onClick={() => onEdit(password)} className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Bearbeiten</button>
            <button onClick={() => onDelete(password.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;