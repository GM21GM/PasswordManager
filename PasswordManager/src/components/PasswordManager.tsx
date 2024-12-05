import React, { useState, useEffect } from 'react';
import PasswordList from './PasswordList';  // Korrekt: Relativer Pfad
import PasswordForm from './PasswordForm';  // Korrekt: Relativer Pfad

interface Password {
  id: string;
  website: string;
  username: string;
  password: string;
}

const PasswordManager: React.FC = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState<Password | null>(null);

  // Laden der Passwörter aus dem Speicher
  useEffect(() => {
    chrome.storage.local.get('passwords', (result) => {
      if (result.passwords) {
        setPasswords(result.passwords as Password[]); // Explizite Typisierung
      }
    });
  }, []);

  // Speichern von Passwörtern im Chrome Storage
  const savePasswords = (newPasswords: Password[]) => {
    chrome.storage.local.set({ passwords: newPasswords }, () => {
      setPasswords(newPasswords);
    });
  };

  // Passwort hinzufügen oder aktualisieren
  const addOrUpdatePassword = (newPassword: Password) => {
    if (isEditing && currentPassword) {
      const updatedPasswords = passwords.map((password) =>
        password.id === currentPassword.id ? newPassword : password
      );
      savePasswords(updatedPasswords);
    } else {
      savePasswords([...passwords, newPassword]);
    }
    setIsEditing(false);
    setCurrentPassword(null);
  };

  // Passwort löschen
  const deletePassword = (id: string) => {
    const updatedPasswords = passwords.filter((password) => password.id !== id);
    savePasswords(updatedPasswords);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Passwortmanager</h1>
      <PasswordForm
        isEditing={isEditing}
        currentPassword={currentPassword}
        onSubmit={addOrUpdatePassword}
      />
      <PasswordList
        passwords={passwords}
        onEdit={(password) => {
          setIsEditing(true);
          setCurrentPassword(password);
        }}
        onDelete={deletePassword}
      />
    </div>
  );
};

export default PasswordManager;
