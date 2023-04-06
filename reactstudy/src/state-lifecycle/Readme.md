React에서 state는 리액트 Component의 상태를 나타냄
=> state: 리액트 컴포넌트의 변경가능한 데이터

렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야한다.

state는 직접 수정할 수 x

class컴포넌트에서 state를 변경하려면 꼭 setState를 사용해야함

Component가 계속 존재하는 것이 아니라, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라진다.
