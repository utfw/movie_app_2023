import Food from "./Food";
import Macaron from "./Macaron";
import cakes from "./cakes.json";
// 사용할 이름 from 파일주소;
/* 
데이터 관리 방식
1.props : 부모(App)에서 자식으로 데이터를 보냄 = 단방향.읽기전용
props이름 = {"props값 문자열"}
2.
3.
4.
*/
function App() {
  return (
    <>
    <div className="app">안녕하세요</div>
    {cakes.map(cake => (
         <Macaron 
         propsid={cake.id}
         propsname={cake.name}
         propsimage={cake.images}
        />
    ))}
    {/* cakes의 정보를 사용하여 새로운 배열 cake를 만듦. cake의 밸류값을 참조하여  
    propsid는 각 인덱스 내부의 id값
    name은 name값
    image는 image값을 가져옴.

    *json에 데이터를 저장 -> App에서 불러옴 -> 컴포넌트(= macaron)로 정보를 보냄
    */}
    {/* <Food 
      props123={"컴포넌트에 전달 -> 인자값으로 들어감"}
      propsName={"두번째 데이터/배열형태로 들어가는 것이 아님"}
      freeName1={"이름이 props라는 전달형태를 결정하는 것이 아님."}
    /> */}
    
    </>
    // 리턴 안에 두개 이상일 경우 하나로 묶어줘야함. 
  );
}

export default App;
