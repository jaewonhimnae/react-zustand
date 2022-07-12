import { useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { useUserStore } from './store/useUserStore';

function App() {
  const { fetch, user } = useUserStore((state) => state);
  console.log('user', user);
  useEffect(() => {
    fetch(1);
  }, [fetch])
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
