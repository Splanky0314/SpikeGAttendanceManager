import CheckAttendance from './CheckAttendance'
import './App.css';

function Header() {
  return (
    <header className="header">
      <img src="/static/SpikeG.png" alt="logo" style={{ width: '60%', height: 'auto' }} />
      <p>
        출결시스템
      </p>

    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>서강대학교 SpikeG</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>

      <CheckAttendance/>

      <Footer/>
    </div>
  );
}

export default App;