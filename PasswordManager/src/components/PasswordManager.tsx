import React, { useState, useEffect } from 'react';
import PasswordForm from './PasswordForm';
import PasswordList from './PasswordList';
import PasswordEncryption from '../utils/CryptoUtils'; 

interface Password {
  id: string;
  website: string;
  username: string;
  password: string;  // Verschlüsseltes Passwort wird gespeichert
}

const PasswordManager: React.FC = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPassword, setCurrentPassword] = useState<Password | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);  // Für Passwortsichtbarkeit

  // Secret Key (müsste idealerweise sicher gespeichert werden, nicht hartkodiert)
  const secretKey = 'your-secret-key';

  // Load passwords from chrome.storage.local and decrypt them
  useEffect(() => {
    chrome.storage.local.get('passwords', (result) => {
      if (result.passwords) {
        // Entschlüsselung der Passwörter nach dem Laden
        const decryptedPasswords = result.passwords.map((password: Password) => {
          const decryptedPassword = PasswordEncryption.decryptPassword(password.password, secretKey);
          return { ...password, password: decryptedPassword };
        });
        setPasswords(decryptedPasswords);
      }
    });
  }, []);

  // Speichern von Passwörtern, dabei werden die Passwörter vor dem Speichern verschlüsselt
  const savePasswords = (newPasswords: Password[]) => {
    const encryptedPasswords = newPasswords.map((password: Password) => {
      const encryptedPassword = PasswordEncryption.encryptPassword(password.password, secretKey);
      return { ...password, password: encryptedPassword };
    });
    chrome.storage.local.set({ passwords: encryptedPasswords }, () => {
      setPasswords(newPasswords);
    });
  };

  // Hinzufügen oder Aktualisieren eines Passworts
  const addOrUpdatePassword = (newPassword: Password) => {
    const encryptedPassword = PasswordEncryption.encryptPassword(newPassword.password, secretKey);
    const passwordWithEncryptedPassword = {
      ...newPassword,
      password: encryptedPassword,
    };

    if (isEditing && currentPassword) {
      const updatedPasswords = passwords.map((password) =>
        password.id === currentPassword.id ? passwordWithEncryptedPassword : password
      );
      savePasswords(updatedPasswords);
    } else {
      savePasswords([...passwords, passwordWithEncryptedPassword]);
    }

    setIsEditing(false);
    setCurrentPassword(null);
  };

  // Löschen eines Passworts
  const deletePassword = (id: string) => {
    const updatedPasswords = passwords.filter((password) => password.id !== id);
    savePasswords(updatedPasswords);
  };

  // Passwort-Sichtbarkeit umschalten
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
        isPasswordVisible={isPasswordVisible}  // Sichtbarkeitszustand übergeben
        togglePasswordVisibility={togglePasswordVisibility}  // Funktion für Sichtbarkeitsumschaltung übergeben
      />
    </div>
  );
};

export default PasswordManager;