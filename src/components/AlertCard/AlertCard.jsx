import './AlertCard.css';

const SEVERITY_LABEL = { critical: 'Critical', warning: 'Warning', faulty: 'Sensor Fault' };

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
      <span className={`alert-card__severity alert-card__severity--${severity}`}>
        {SEVERITY_LABEL[severity]}
      </span>
      <p className="alert-card__pile">{pileName}</p>
      <p className="alert-card__sensors">
        Sensors {sensorRange} &mdash; {layer} layer &mdash; {readings}
      </p>
      <p className="alert-card__action">{actionText}</p>
    </div>
  );
}
