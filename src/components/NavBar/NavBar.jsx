import { NavLink } from 'react-router-dom';
import { getAlerts } from '../../data/mockData';
import './NavBar.css';

// Badge includes faulty sensors — a malfunctioning sensor requires
// operator attention even if it is not a direct safety threat.
const activeAlertCount = getAlerts().length;

export default function NavBar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">agriQ</span>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Sites
          </NavLink>
        </li>
        <li>
          <NavLink to="/alerts" className={({ isActive }) => isActive ? 'active' : ''}>
            Alerts
            {activeAlertCount > 0 && (
              <span className="navbar-badge">{activeAlertCount}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
