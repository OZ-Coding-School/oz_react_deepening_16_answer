import './App.css';
import Todo from './components/Todo';

function App() {
    return (
        <div className="app">
            <div className="text-center my-5">
                <h2 className="text-xl font-bold mb-2">React 최적화 학습 - 성능 비교</h2>
                <p className="text-gray-600 font-bold">콘솔창을 열어 렌더링 횟수를 확인해보세요!</p>
            </div>
            <Todo />
        </div>
    );
}

export default App;
