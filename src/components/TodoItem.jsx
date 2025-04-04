import { useState, memo, useRef, useCallback } from 'react';

// React.memo
// 컴포넌트 메모이제이션
// 컴포넌트의 props가 변경되지 않으면 리렌더링 방지
// 컴포넌트 렌더링 시 불필요한 재계산 방지
const TodoItem = memo(
    ({ todo, onToggle, onDelete, onEdit }) => {
        const [isEditing, setIsEditing] = useState(false);
        const inputRef = useRef(null);

        // useCallback
        // 함수 메모이제이션
        // 자식 컴포넌트에 함수를 전달할 때 사용
        // 함수 자체를 메모이제이션하여 불필요한 렌더링 방지
        const handleEdit = useCallback(() => {
            onEdit(todo.id, inputRef.current.value);
            setIsEditing(false);
        }, [todo.id, onEdit]);
        // inputRef
        // onChange 이벤트를 활용하지 않고 인풋 값을 활용할 때 사용
        // 컴포넌트가 마운트될 때 초기화되지 않고 컴포넌트가 업데이트될 때만 초기화됨

        return (
            <div className={`flex items-center p-2.5 border-b border-gray-200 ${todo.completed ? 'bg-gray-50' : ''}`}>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} className="mr-2" />

                {isEditing ? (
                    <div className="flex flex-1">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder={todo.text}
                            className="flex-1 mr-2 p-1.5 border border-gray-300 rounded"
                        />
                        <button onClick={handleEdit} className="px-2 py-1 bg-blue-500 text-white rounded mr-1">
                            저장
                        </button>
                        <button onClick={() => setIsEditing(false)} className="px-2 py-1 bg-gray-300 rounded">
                            취소
                        </button>
                    </div>
                ) : (
                    <>
                        <span className={`flex-1 ml-2.5 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                            {todo.text}
                        </span>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-2 py-1 bg-yellow-500 text-white rounded mr-1"
                        >
                            수정
                        </button>
                        <button onClick={() => onDelete(todo.id)} className="px-2 py-1 bg-red-500 text-white rounded">
                            삭제
                        </button>
                    </>
                )}
            </div>
        );
    },
    (prevProps, nextProps) => {
        return (
            prevProps.todo.id === nextProps.todo.id &&
            prevProps.todo.text === nextProps.todo.text &&
            prevProps.todo.completed === nextProps.todo.completed
        );
    },
);

export default TodoItem;
