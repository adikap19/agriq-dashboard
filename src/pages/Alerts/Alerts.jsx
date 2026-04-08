import './Alerts.css';
import { getAlerts } from '../../data/mockData';
import AlertCard from '../../components/AlertCard/AlertCard';

const SORT_ORDER = { critical: 0, warning: 1, faulty: 2 };

const alerts = getAlerts().sort(
  (a, b) => SORT_ORDER[a.severity] - SORT_ORDER[b.severity]
);

export default function Alerts() {
  return (
    <main className="alerts">
      <header className="alerts__header">
        <h1 className="alerts__title">Active Alerts</h1>
        {alerts.length > 0 && (
          <p className="alerts__subtitle">
            {alerts.filter(a => a.severity === 'critical').length} critical &nbsp;·&nbsp;
            {alerts.filter(a => a.severity === 'warning').length} warning &nbsp;·&nbsp;
            {alerts.filter(a => a.severity === 'faulty').length} faulty
          </p>
        )}
      </header>

      {alerts.length === 0 ? (
        <p className="alerts__clear">✓ All clear — no active alerts</p>
      ) : (
        <div className="alerts__list">
          {alerts.map((alert, i) => (
            <AlertCard key={i} alert={alert} />
          ))}
        </div>
      )}
    </main>
  );
}
