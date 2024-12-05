import React, { useState } from 'react';
import PasswordEncryption from '../utils/CryptoUtils';  // Import the PasswordEncryption utility

interface PasswordDisplayProps {
  website: string;
  secretKey: string;  // The secret key will be passed as a prop
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ website, secretKey }) => {
  const [decryptedPassword, setDecryptedPassword] = useState<string | null>(null);

  const handleRetrievePassword = () => {
    // Retrieve the encrypted password from chrome storage using the website as the key
    chrome.storage.local.get([website], (result) => {
      // Ensure that the result has the expected structure
      if (result && result[website]) {
        const encryptedPassword = result[website];  // The encrypted password is retrieved
        
        // Use the secretKey from props to decrypt the password
        const password = PasswordEncryption.decryptPassword(encryptedPassword, secretKey); 
        setDecryptedPassword(password);
      } else {
        // If no password was found for the given website
        setDecryptedPassword(null);
      }
    });
  };

  return (
    <div>
      <button onClick={handleRetrievePassword}>Get Password</button>
      {decryptedPassword && <p>Stored Password: {decryptedPassword}</p>}
      {!decryptedPassword && <p>No password found for {website}</p>}
    </div>
  );
};

export default PasswordDisplay;
