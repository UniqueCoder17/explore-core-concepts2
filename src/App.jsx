import './App.css'
import Counter from './Counter';
import Team from './Team.JSX';
import Users from './Users';
import Friends from './friends';
function App() {
  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('btn2 Clicked')
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React core concepts 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('btn3 Clicked') }}>Click 3</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Click 4</button>
    </>
  )
}

export default App
