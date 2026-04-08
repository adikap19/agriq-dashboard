import './AlertCard.css';

const SEVERITY_LABEL = { critical: '🔴 Critical', warning: '🟡 Warning', faulty: '⚠️ Sensor Fault' };

export default function AlertCard({ alert }) {
  const { severity, pileName, sensorIds, layer, temp, moisture, actionText } = alert;

  const sensorRange = sensorIds.length > 1
    ? `${sensorIds[0]}–${sensorIds[sensorIds.length - 1]}`
    : sensorIds[0];

  const readings = severity === 'faulty'
    ? 'Erratic readings'
    : `${temp}°C / ${moisture}%`;

  return (
    <div className={`alert-card alert-card--${severity}`}>
      <div className="alert-card__top">
        <span className={`alert-card__severity alert-card__severity--${severity}`}>
          {SEVERITY_LABEL[severity]}
        </span>
        <span className="alert-card__pile">{pileName}</span>
      </div>

      <p className="alert-card__sensors">
        Sensors <strong>{sensorRange}</strong> &mdash; <strong>{layer} layer</strong> &mdash; <strong>{readings}</strong>
      </p>

      <div className={`alert-card__action alert-card__action--${severity}`}>
        <span className="alert-card__action-label">Action required</span>
        <p className={`alert-card__action-text--${severity}`}>{actionText}</p>
      </div>
    </div>
  );
}
