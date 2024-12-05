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
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}

const PasswordList: React.FC<PasswordListProps> = ({ passwords, onEdit, onDelete, isPasswordVisible, togglePasswordVisibility }) => {
  return (
    <div>
      <button onClick={togglePasswordVisibility}>
        {isPasswordVisible ? 'Hide Passwords' : 'Show Passwords'}
      </button>
      <ul>
        {passwords.map((password) => (
          <li key={password.id}>
            <span>{password.website}</span>
            <span>{password.username}</span>
            <span>{isPasswordVisible ? password.password : '********'}</span>
            <button onClick={() => onEdit(password)}>Edit</button>
            <button onClick={() => onDelete(password.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;