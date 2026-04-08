import './SensorGrid.css';

const LAYERS = [
  { label: 'Bottom', ids: ['S01','S02','S03','S04','S05','S06','S07','S08','S09','S10'] },
  { label: 'Middle', ids: ['S11','S12','S13','S14','S15','S16','S17','S18','S19','S20'] },
  { label: 'Top',    ids: ['S21','S22','S23','S24','S25','S26','S27','S28','S29','S30'] },
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
  const avgTemp     = pile.avgTemp;
  const avgMoisture = pile.avgMoisture;

  return (
    <div className={`sensor-ball sensor-ball--${status}`}>
      <span className="sensor-ball__id">{id}</span>
      {status === 'faulty' ? (
        <>
          <span className="sensor-ball__faulty-icon">⚠️</span>
          <span className="sensor-ball__faulty-label">Erratic</span>
        </>
      ) : (
        <>
          <span className="sensor-ball__temp">
            {temp != null ? temp : avgTemp}°C
          </span>
          <span className="sensor-ball__moisture">
            {moisture != null ? moisture : avgMoisture}%
          </span>
        </>
      )}
    </div>
  );
}

export default function SensorGrid({ pile }) {
  return (
    <div className="sensor-grid">
      {LAYERS.map((layer) => (
        <div key={layer.label} className="sensor-grid__layer">
          <span className="sensor-grid__layer-label">{layer.label}</span>
          <div className="sensor-grid__row">
            {layer.ids.map((id) => (
              <SensorBall key={id} id={id} pile={pile} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
