import { NavLink } from 'react-router-dom';
// Correction: Import NavLinkProps as a type
import type { NavLinkProps } from 'react-router-dom'; 
import styles from './AppNavLink.module.css';

// The interface now correctly extends the imported type
interface AppNavLinkProps extends NavLinkProps {
  children: React.ReactNode;
  isDesktop?: boolean;
}

export default function AppNavLink({ children, to, isDesktop = false, ...props }: AppNavLinkProps) {
  
  // Conditionally apply desktop or mobile-specific styling
  const baseClass = isDesktop ? styles.desktopLink : styles.mobileLink;
  
  return (
    <NavLink
      to={to}
      // Use the className function to apply the active style dynamically
      className={({ isActive }) =>
        `${baseClass} ${isActive ? styles.active : ''}`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}