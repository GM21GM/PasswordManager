import React, { useState } from 'react';
import { decryptPassword } from '../utils/passwordutils';
interface PasswordRetrieveProps {
  website: string;
  secretKey: string;
}

const PasswordRetrieve: React.FC<PasswordRetrieveProps> = ({ website, secretKey }) => {
  const [decryptedPassword, setDecryptedPassword] = useState<string | null>(null);

  const handleRetrievePassword = () => {
    chrome.storage.local.get([website], (result) => {
      if (result[website]) {
        const encryptedPassword = result[website];
        const password = decryptPassword(encryptedPassword, secretKey);
        setDecryptedPassword(password);
      } else {
        setDecryptedPassword(null);
      }
    });
  };

  return (
    <div>
      <button onClick={handleRetrievePassword}>Passwort abrufen</button>
      {decryptedPassword && <p>Gespeichertes Passwort: {decryptedPassword}</p>}
      {!decryptedPassword && <p>Kein Passwort gefunden</p>}
    </div>
  );
};
export default PasswordRetrieve;
