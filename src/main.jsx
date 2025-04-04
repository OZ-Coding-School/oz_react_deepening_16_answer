import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// React.StrictMode
// 개발 환경에서 컴포넌트 렌더링 과정을 검사
// 컴포넌트를 중복 렌더링하는 경우 경고 메시지를 출력
// 단, 그 과정중에 useEffect가 중복 호출되는 경우가 있을 수 있음

createRoot(document.getElementById('root')).render(<App />);
