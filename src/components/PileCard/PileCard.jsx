import './PileCard.css';
import SensorGrid from '../SensorGrid/SensorGrid';

const STATUS_LABEL = { ok: 'OK', warning: 'Warning', critical: 'Critical' };

function sensorSummary(sensor) {
  const ids = sensor.ids;
  const range =
    ids.length > 1 ? `${ids[0]}–${ids[ids.length - 1]}` : ids[0];
  if (sensor.status === 'faulty') {
    return `${range} ${sensor.layer}: Erratic readings`;
  }
  return `${range} ${sensor.layer}: ${sensor.temp}°C / ${sensor.moisture}%`;
}

export default function PileCard({ pile, isExpanded, onClick }) {
  return (
    <div className={`pile-card pile-card--${pile.status}`} onClick={onClick}>
      <div className="pile-card__header">
        <div className="pile-card__title-row">
          <h2 className="pile-card__name">{pile.name}</h2>
          <span className={`pile-card__badge pile-card__badge--${pile.status}`}>
            {STATUS_LABEL[pile.status]}
          </span>
        </div>

        <div className="pile-card__stats">
          <span>Avg Temp: <strong>{pile.avgTemp}°C</strong></span>
          <span>Avg Moisture: <strong>{pile.avgMoisture}%</strong></span>
        </div>

        {pile.problemSensors.length > 0 && (
          <ul className="pile-card__sensor-summary">
            {pile.problemSensors.map((s, i) => (
              <li key={i} className={`pile-card__sensor-summary-item pile-card__sensor-summary-item--${s.status}`}>
                {sensorSummary(s)}
              </li>
            ))}
          </ul>
        )}
      </div>

      {isExpanded && (
        <div className="pile-card__expanded" onClick={(e) => e.stopPropagation()}>
          <SensorGrid pile={pile} />
        </div>
      )}
    </div>
  );
}
