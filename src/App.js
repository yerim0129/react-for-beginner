import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>{' '}
        {/*react router에게 여기서 오는 id값이 뭔지 알고 싶다 말하는 것*/}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
//# 함수를 보낼 때 react는 함수의 첫번째 argument로 현재 state로 보낸다
