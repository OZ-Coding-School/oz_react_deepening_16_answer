import { memo, useRef } from 'react';

// React.memo
// 컴포넌트 메모이제이션
// 컴포넌트의 props가 변경되지 않으면 리렌더링 방지
// 컴포넌트 렌더링 시 불필요한 재계산 방지
const TodoForm = memo(({ onAdd }) => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = inputRef.current.value;
        if (text.trim() === '') {
            inputRef.current.focus();
            return;
        } else {
            onAdd(text);
            inputRef.current.value = '';
        }
    };

    // inputRef
    // onChange 이벤트를 활용하지 않고 인풋 값을 활용할 때 사용
    // 컴포넌트가 마운트될 때 초기화되지 않고 컴포넌트가 업데이트될 때만 초기화됨

    // form에서 활용하는 경우 new FormData()를 대신 사용
    // const formData = new FormData(e.target);
    // const text = formData.get('text');
    // get요소는 input의 name 속성을 활용함
    return (
        <form onSubmit={handleSubmit} className="flex mb-5">
            <input
                ref={inputRef}
                type="text"
                placeholder="새로운 할 일을 입력하세요"
                className="flex-1 p-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2.5 bg-blue-500 text-white border-none rounded-r-md cursor-pointer hover:bg-blue-600"
            >
                추가
            </button>
        </form>
    );
});

export default TodoForm;
