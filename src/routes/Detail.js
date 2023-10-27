import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams(); //이 함수를 사용하면 react router는 app.js에 patt="movie/:id" 변수의 값을 넘겨준다
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail {id}</h1>;
}
export default Detail;

//id를 알고 있으니까 api로부터 정보를 fetch 해올 수 있다.
