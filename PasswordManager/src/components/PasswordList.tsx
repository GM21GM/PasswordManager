import React from 'react';
import {PasswordItem} from './PasswordItem';

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
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Gespeicherte Passwörter</h2>
      {passwords.length === 0 ? (
        <p className="text-center text-gray-500">Keine Passwörter gespeichert.</p>
      ) : (
        <ul>
          {passwords.map((password) => (
            <PasswordItem
              key={password.id}
              password={password}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PasswordList;
