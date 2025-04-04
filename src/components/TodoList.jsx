import { memo } from 'react';
import TodoItem from './TodoItem';

// React.memo
// 컴포넌트 메모이제이션
// 컴포넌트의 props가 변경되지 않으면 리렌더링 방지
// 컴포넌트 렌더링 시 불필요한 재계산 방지
const TodoList = memo(({ todos, onToggle, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return <div className="py-4 text-center text-gray-500">할 일이 없습니다. 새로운 할 일을 추가해보세요!</div>;
    }

    return (
        <div className="mt-4">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
});

export default TodoList;
