const piles = [
  {
    id: "north",
    name: "Emek North",
    status: "ok",
    avgTemp: 21,
    avgMoisture: 12.5,
    problemSensors: [],
  },
  {
    id: "south",
    name: "Emek South",
    status: "warning",
    avgTemp: 28,
    avgMoisture: 13.2,
    problemSensors: [
      {
        ids: ["S01", "S02", "S03", "S04"],
        layer: "bottom",
        temp: 44,
        moisture: 16.1,
        status: "warning",
      },
    ],
  },
  {
    id: "east",
    name: "Emek East",
    status: "critical",
    avgTemp: 26,
    avgMoisture: 13.0,
    problemSensors: [
      {
        ids: ["S11", "S12", "S13", "S14", "S15"],
        layer: "middle",
        temp: 51,
        moisture: 18.4,
        status: "critical",
      },
      {
        ids: ["S28"],
        layer: "top",
        temp: null,
        moisture: null,
        status: "faulty",
      },
    ],
  },
  {
    id: "west",
    name: "Emek West",
    status: "warning",
    avgTemp: 35,
    avgMoisture: 14.8,
    problemSensors: [
      {
        ids: ["S06", "S07", "S08"],
        layer: "bottom",
        temp: 39,
        moisture: 16.2,
        status: "warning",
      },
    ],
  },
];

const ACTION_TEXT = {
  critical:
    "Immediate action required. Contact facility manager and inspect pile now.",
  warning:
    "Increase monitoring frequency. Schedule an inspection within 24 hours.",
  faulty:
    "Sensor may be malfunctioning. Verify physically and flag for replacement.",
};

function getAlerts() {
  return piles.flatMap((pile) =>
    pile.problemSensors.map((sensor) => ({
      pileId: pile.id,
      pileName: pile.name,
      severity: sensor.status,
      sensorIds: sensor.ids,
      layer: sensor.layer,
      temp: sensor.temp,
      moisture: sensor.moisture,
      actionText: ACTION_TEXT[sensor.status],
    })),
  );
}

export { piles, getAlerts };
