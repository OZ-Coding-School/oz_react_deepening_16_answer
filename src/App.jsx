import './App.css';
import Todo from './components/Todo';

function App() {
    return (
        <div className="app">
            <div className="text-center my-5">
                <h2 className="text-xl font-bold mb-2">React 최적화 학습 - 성능 비교</h2>
            </div>
            <Todo />
        </div>
    );
}

export default App;
