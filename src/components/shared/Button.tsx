import { Link } from 'react-router-dom';
import styles from './Button.module.css';

// Import the CSS type
import type { CSSProperties } from 'react'; 

type ButtonProps = {
  to?: string;
  onClick?: () => void;
  // NOTE: 'accent' was added in the previous turn
  variant: 'primary' | 'secondary' | 'accent'; 
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  // FIX: Added style prop
  style?: CSSProperties; 
};

export default function Button({ 
  to, 
  onClick, 
  variant, 
  children, 
  className = '', 
  type = 'button',
  // FIX: Include style in destructuring
  style 
}: ButtonProps) {
  
  // Get the CSS module class for the variant
  const variantClass = styles[variant] || styles.primary;
  
  const combinedClassName = `${styles.buttonBase} ${variantClass} ${className}`;

  // Render as a Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={combinedClassName} style={style}>
        {children}
      </Link>
    );
  }

  // Render as a standard button
  return (
    <button type={type} onClick={onClick} className={combinedClassName} style={style}>
      {children}
    </button>
  );
}