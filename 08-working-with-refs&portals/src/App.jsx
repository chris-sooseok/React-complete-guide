import Player from './components/Player2.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
 
function App() {
  return (
    <>
      {/* ? response for displaying player name */}
      <Player />

      {/* each challenge is displayed */}
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={10} />
        <TimerChallenge title="Extreme" targetTime={20} />
      </div>
    </>
  );
}

export default App;
