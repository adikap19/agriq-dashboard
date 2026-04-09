# agriQ Operator Dashboard

A grain storage monitoring dashboard built for operators at the Emek Hefer facility. The dashboard provides a real-time view of pile health across all storage sites — displaying average temperature and moisture per pile, individual sensor readings across three depth layers (bottom, middle, and top), and a dedicated Alerts page that surfaces critical and warning conditions with clear, actionable guidance for the operator on duty.

---

## Related Documents

- [Task 1 — Backend Architecture Design](./Adi%20Kapuri%20agriQ%20.rtf.doc)

---

## Tech Stack

- **React 19**
- **Vite**
- **React Router**
- **Plain CSS** — component-scoped, no Tailwind or CSS frameworks

---

## How to Run Locally

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** v18 or higher — https://nodejs.org
- **npm** — included with Node.js, no separate install needed
- **Git** — https://git-scm.com

To verify your setup, run:
```bash
node --version   # should print v18.x.x or higher
npm --version    # should print 9.x.x or higher
```

---

### Setup & Run

**Step 1 — Clone the repository**
```bash
git clone https://github.com/adikap19/agriq-dashboard.git
```

**Step 2 — Navigate into the project folder**
```bash
cd agriq-dashboard
```

**Step 3 — Install dependencies**
```bash
npm install
```
This installs React, Vite, React Router, and all other dependencies listed in `package.json`.

**Step 4 — Start the development server**
```bash
npm run dev
```

**Step 5 — Open the app**

Visit [http://localhost:5173](http://localhost:5173) in your browser.

All data is hardcoded in `src/data/mockData.js` — the app runs entirely in the browser.

---

## Project Structure

```
src/
├── data/           # mockData.js — single source of truth for all pile and sensor data
├── pages/
│   ├── Sites/      # Main overview page — lists all piles with expandable sensor grids
│   └── Alerts/     # Alerts page — sorted by severity with recommended operator actions
└── components/
    ├── NavBar/     # Top navigation with live alert count badge
    ├── PileCard/   # Per-pile card with status, readings, and expand/collapse
    ├── SensorGrid/ # 30-sensor grid across 3 depth layers with status coloring
    └── AlertCard/  # Individual alert card with severity, affected sensors, and action text
```

---

## Screenshots

<!-- Add screenshots here -->
