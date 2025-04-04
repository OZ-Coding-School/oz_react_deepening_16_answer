import { memo } from 'react';

// React.memo
// 컴포넌트 메모이제이션
// 컴포넌트의 props가 변경되지 않으면 리렌더링 방지
// 컴포넌트 렌더링 시 불필요한 재계산 방지
const TodoFilter = memo(({ filter, onFilterChange }) => {
    return (
        <div className="my-5 p-2.5 bg-gray-100 rounded">
            <span className="mr-2">필터: </span>
            <button
                onClick={() => onFilterChange('all')}
                className={`mr-1.5 px-2.5 py-1.5 rounded border-none ${
                    filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                }`}
            >
                전체
            </button>
            <button
                onClick={() => onFilterChange('active')}
                className={`mr-1.5 px-2.5 py-1.5 rounded border-none ${
                    filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                }`}
            >
                활성
            </button>
            <button
                onClick={() => onFilterChange('completed')}
                className={`px-2.5 py-1.5 rounded border-none ${
                    filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                }`}
            >
                완료
            </button>
        </div>
    );
});

export default TodoFilter;
