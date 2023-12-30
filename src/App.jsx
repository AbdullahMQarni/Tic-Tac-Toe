import GameBoard from './components/GameBoard'
import PlayerInfo from './components/PlayerInfo'

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name='Player One' symbol='x' />
          <PlayerInfo name='Player Two' symbol='O' />
        </ol>
        <GameBoard />
      </div>
      Log
    </main>
  )
}

export default App
