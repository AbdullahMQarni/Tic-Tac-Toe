import PlayerInfo from './components/PlayerInfo'

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name='Player One' symbol='x' />
          <PlayerInfo name='Player Two' symbol='O' />
        </ol>
        Game Board
      </div>
      Log
    </main>
  )
}

export default App
