import { useState, useEffect } from 'react';
function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]); //여러개 .. 그리고 state는 직접 수정 할 수 없음 !
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    //# toDo ="" 이렇게 state를 직접 수정 할 수 없음 /toDos.push x / 수정 하고 싶다면 수정하는 함수를 사용해야돼~~~

    setToDos((currentArray) => [toDo, ...currentArray]);
    //#직전의 값을 받아올거야 직접수정과 함수를 넣는게 있는데 이건 함수 넣는거, 현재 state 가져온느거
    //#원래 배열에서 새로운 배열을 생성해서 합친다
    setToDo('');
  };
  console.log(toDos);

  return (
    <div>
      <h1>My todos({toDos.length})</h1>
      <form action="" onSubmit={onSubmit} style={{ display: 'inline-block' }}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
      </form>
      <button onClick={onSubmit}>Add To Do</button>
      <hr />
      <ul>
        {toDos.map(
          (
            item,
            index //# 배열을 새롭게 해서 반환해준다...
          ) => (
            <li key={index}>{item}</li>
            //#동일한걸 반복해서 출력 할 때는 유니크한 key를 넣어줘야 한다.
          )
        )}
      </ul>
    </div>
  );
}

export default App;

//# 함수를 보낼 때 react는 함수의 첫번째 argument로 현재 state로 보낸다
