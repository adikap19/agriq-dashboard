import './SensorGrid.css';

const LAYERS = [
  { label: 'Top',    depth: '8–10m', ids: ['S21','S22','S23','S24','S25','S26','S27','S28','S29','S30'] },
  { label: 'Middle', depth: '4–7m',  ids: ['S11','S12','S13','S14','S15','S16','S17','S18','S19','S20'] },
  { label: 'Bottom', depth: '0–3m',  ids: ['S01','S02','S03','S04','S05','S06','S07','S08','S09','S10'] },
];

function getSensorInfo(id, problemSensors) {
  for (const group of problemSensors) {
    if (group.ids.includes(id)) {
      return { status: group.status, temp: group.temp, moisture: group.moisture };
    }
  }
  return { status: 'ok', temp: null, moisture: null };
}

function SensorBall({ id, pile }) {
  const { status, temp, moisture } = getSensorInfo(id, pile.problemSensors);

  return (
    <div className={`sensor-ball sensor-ball--${status}`} title={id}>
      <span className="sensor-ball__id">{id}</span>
      {status === 'faulty' ? (
        <>
          <span className="sensor-ball__faulty-icon">⚠️</span>
          <span className="sensor-ball__faulty-label">Erratic</span>
        </>
      ) : (
        <>
          <span className="sensor-ball__temp">
            {temp != null ? temp : pile.avgTemp}°C
          </span>
          <span className="sensor-ball__moisture">
            {moisture != null ? moisture : pile.avgMoisture}%
          </span>
        </>
      )}
    </div>
  );
}

export default function SensorGrid({ pile }) {
  return (
    <div className="sensor-grid">
      <div className="sensor-grid__header">
        <span className="sensor-grid__title">Sensor Layout</span>
        <span className="sensor-grid__dims">50m × 25m × 10m — 30 sensors across 3 depth layers</span>
      </div>

      <div className="sensor-grid__body">
        <div className="sensor-grid__depth-axis">
          {LAYERS.map((layer) => (
            <div key={layer.label} className="sensor-grid__depth-label">
              <span className="sensor-grid__layer-name">{layer.label}</span>
              <span className="sensor-grid__layer-depth">{layer.depth}</span>
            </div>
          ))}
        </div>

        <div className="sensor-grid__layers">
          {LAYERS.map((layer) => (
            <div key={layer.label} className="sensor-grid__row">
              {layer.ids.map((id) => (
                <SensorBall key={id} id={id} pile={pile} />
              ))}
            </div>
          ))}
          <div className="sensor-grid__length-axis">
            <span>0m</span>
            <span>◄── 50m length ──►</span>
            <span>50m</span>
          </div>
        </div>
      </div>

      <div className="sensor-grid__legend">
        <span className="sensor-grid__legend-item sensor-grid__legend-item--ok">Normal</span>
        <span className="sensor-grid__legend-item sensor-grid__legend-item--warning">Warning</span>
        <span className="sensor-grid__legend-item sensor-grid__legend-item--critical">Critical</span>
        <span className="sensor-grid__legend-item sensor-grid__legend-item--faulty">Faulty</span>
      </div>
    </div>
  );
}
