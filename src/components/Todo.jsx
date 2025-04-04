import { useState, useCallback, useMemo } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import TodoStats from './TodoStats';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const generateId = () => Math.floor(Math.random() * 10000);

    // useCallback
    // 함수 메모이제이션
    // 자식 컴포넌트에 함수를 전달할 때 사용
    // 함수 자체를 메모이제이션하여 불필요한 렌더링 방지
    const handleAdd = useCallback((text) => {
        const newTodo = {
            id: generateId(),
            text,
            completed: false,
            createdAt: new Date(),
        };
        setTodos((prev) => [...prev, newTodo]);
    }, []);

    const handleToggle = useCallback((id) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    }, []);

    const handleDelete = useCallback((id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, []);

    const handleEdit = useCallback((id, newText) => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    }, []);

    const handleFilterChange = useCallback((newFilter) => {
        setFilter(newFilter);
    }, []);

    // useMemo
    // 변수 메모이제이션
    // 복잡한 계산이 반복될 때 이를 메모이제이션해서 사용
    // 컴포넌트 렌더링 시 불필요한 재계산 방지
    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    return (
        <div className="max-w-xl mx-auto p-5">
            <h1 className="text-2xl font-bold text-center mb-5">할 일 관리 앱</h1>
            <TodoForm onAdd={handleAdd} />
            <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
            <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} />
            <TodoStats todos={todos} />
        </div>
    );
};

export default Todo;
