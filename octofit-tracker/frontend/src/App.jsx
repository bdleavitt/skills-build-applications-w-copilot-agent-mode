import octofitLogo from './assets/octofitapp-small.png'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <img className="octofit-logo" src={octofitLogo} alt="OctoFit Tracker" />
      <p className="eyebrow">Team fitness, made measurable</p>
      <h1>OctoFit Tracker</h1>
      <p className="intro">
        Build stronger habits with your team, one workout at a time.
      </p>
    </main>
  )
}

export default App
