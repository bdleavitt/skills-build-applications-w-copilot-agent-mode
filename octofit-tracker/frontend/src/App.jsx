import octofitLogo from './assets/octofitapp-small.png'
import { NavLink, Route, Routes, Link } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-frame">
      <header className="app-header">
        <Link className="brand" to="/">
          <img src={octofitLogo} alt="OctoFit Tracker" />
          <span>OctoFit Tracker</span>
        </Link>
        <nav className="app-nav" aria-label="Primary navigation">
          <NavLink to="/users">Athletes</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <section className="welcome-section">
      <div className="welcome-copy">
        <p className="eyebrow">Team fitness, made measurable</p>
        <h1>Small habits.<br />Stronger teams.</h1>
        <p className="intro">
          Build a rhythm your whole team can feel. Explore activity, celebrate progress,
          and find the next workout that fits.
        </p>
        <Link className="btn btn-primary tracker-cta" to="/activities">View activity</Link>
      </div>
      <div className="welcome-mark" aria-hidden="true">08</div>
    </section>
  )
}

export default App
