import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <div className="App">
        <h1>IMAGINE A PLACE...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <button id='mac-btn'>Download for Mac</button>
        <button id='open-btn'>Open Discord in your browser</button>
      </div>
    </>
  )
}

export default App
