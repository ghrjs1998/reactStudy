Components: 모든 페이지가 컴포넌트로 구성되어있고 하나의 컴포넌트는 다른 여러개의 컴포넌트 조합으로 구성
레고 블록 조립하듯 컴포넌트들을 모아서 개발

props => Component의 속성
컴포넌트에 전달할 다양한 정보를 담고있는 자바스크립트 객체

props특징
Read-Only
값을 변경할 수 X

모든 React 컴포넌트는 Props를 직접 바꿀수 x 같은 props에 대해서는 항상 같은 결과를 보여줄 것

props 사용법

Function Component vs Class Component
함수 컴포넌트는 간단한 코드가 장점
클래스 컴포넌트와 함수컴포넌트랑 다른점은 클래스컴포넌트는 항상 React의 모든 클래스 컴포넌트는 React.Component를 상속받아 만든다.

Component 이름은 항상 대문자로 시작

Component 합성
React는 Component안에 또 다른 Component를 쓸 수 O.
복잡한 화면을 여러 개의 Component로 나눠서 구현가능

Component 추출
큰 컴포넌트를 여러개로 쪼개기
재사용성이 좋아진다
개발 속도도 향상됨
