import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 함수방식 없애기
  let [funcShow, setFuncShow] = useState(true);
  // 클래스방식 없애기
  let [compShow, setCompShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World!</h1>
      {/* UI만들기 */}
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false);
        }}
      ></input>
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setCompShow(false);
        }}
      ></input>
      {/* 함수방식 */}
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {/* 클래스방식 */}
      {compShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

// 함수방식은 return값만 만들어주면 컴포넌트의 실제 모양이됨
// 함수방식은 자기자신이 렌더함수다
// hook을 통해 함수방식에서도 state를 사용 가능
// useState를 쓰면 무조건 배열 return, 배열은 2개 값으로 이뤄져있다
// 함수방식에서는 state를 만들때마다 useState를 만들면 된다.
let funcStyle = "color: red";
let funcId = 0;
function FuncComp(props) {
  // Hook 사용
  let numberState = useState(props.initNumber);
  // numberState의 첫번째 값은 상태
  let number = numberState[0];
  // numberState의 2번째 값은 상태를 바꿀수 있는 함수
  let setNumber = numberState[1];

  // // Hook 사용
  // let dateState = useState(new Date().toString());
  // // numberState의 첫번째 값은 상태
  // let _date = dateState[0];
  // // numberState의 2번째 값은 상태를 바꿀수 있는 함수
  // let setDate = dateState[1];
  let [_date, setDate] = useState(new Date().toString());
  // side Effect
  // useEffect => componentDidMount & componentDidUpdate와 똑같은 효과
  // 여러개사용 가능
  // 변한 값에 대해 처리만하도록 하는것에 대해서 굉장히 향상시킬수 O
  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect number (componentDidMount & componentDidUpdate) " +
          ++funcId,
        funcStyle
      );
      document.title = number;
      // clean up
      // 이전에 실행했던걸 정리할 때 return값에 있는 함수가 호출
      return function cleanup() {
        console.log(
          "%cfunc => useEffect number return (componentDidMount & componentDidUpdate) " +
            ++funcId,
          funcStyle
        );
      };
    },
    [number]
  );

  useEffect(
    function () {
      console.log(
        "%cfunc => useEffect _date (componentDidMount & componentDidUpdate) " +
          ++funcId,
        funcStyle
      );
      document.title = _date;
      // clean up
      // 이전에 실행했던걸 정리할 때 return값에 있는 함수가 호출
      return function cleanup() {
        console.log(
          "%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) " +
            ++funcId,
          funcStyle
        );
      };
    },
    [_date]
  );
  // componentDidMount만 실행하려고 할떄 2번째 인자로 빈배열 넣기
  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount) " + ++funcId,
      funcStyle
    );
    document.title = number;
    // clean up
    // 이전에 실행했던걸 정리할 때 return값에 있는 함수가 호출
    return function cleanup() {
      console.log(
        "%cfunc => useEffect return (componentWillUnMount) " + ++funcId,
        funcStyle
      );
    };
  }, []);

  console.log("%cfunc => render " + funcId, funcStyle);
  return (
    // main Effect
    <div className="container">
      <h1>function style component</h1>
      <p>Number: {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        // setState값을 변경
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        // setState값을 변경
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

// 클래스방식은 render라는 이름의 함수 => 메소드를 정의헤서 그 return값이 결국 UI가 됨
// state의 값이 바뀔때마다 렌더메서드가 호출되면서 새로 달라진 state에 Number값이 시각적인 요소에 반영
// state는 클래스방식에선 객체에 넣어야함
let classStyle = "color: red";
class ClassComp extends React.Component {
  // 초깃값 설정
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };
  componentWillUnmount() {
    console.log("%cclass => componentWillMount", classStyle);
  }
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("%cclass => componentWillUpdate", classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }

  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h1>class style component</h1>
        {/* setState사용 */}
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="random"
          // setState값을 변경
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          // setState값을 변경
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
