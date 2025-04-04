import { memo, useMemo } from 'react';

// React.memo
// 컴포넌트 메모이제이션
// 컴포넌트의 props가 변경되지 않으면 리렌더링 방지
// 컴포넌트 렌더링 시 불필요한 재계산 방지
const TodoStats = memo(({ todos }) => {
    // useMemo
    // 변수 메모이제이션
    // 복잡한 계산이 반복될 때 이를 메모이제이션해서 사용
    // 컴포넌트 렌더링 시 불필요한 재계산 방지
    const stats = useMemo(() => {
        const total = todos.length;
        const completed = todos.filter((todo) => todo.completed).length;
        const active = total - completed;
        const percentCompleted = total === 0 ? 0 : Math.round((completed / total) * 100);
        return { total, completed, active, percentCompleted };
    }, [todos]);

    return (
        <div className="my-5 p-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-semibold">통계</h3>
            <div>전체 할 일: {stats.total}개</div>
            <div>완료: {stats.completed}개</div>
            <div>미완료: {stats.active}개</div>
            <div>진행률: {stats.percentCompleted}%</div>
            <div className="mt-2.5 h-2.5 bg-gray-300 rounded">
                <div className="h-full bg-blue-500 rounded" style={{ width: `${stats.percentCompleted}%` }} />
            </div>
        </div>
    );
});

export default TodoStats;
