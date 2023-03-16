2023.003.16 생활코딩 Redux없이 코딩 Redux포함 코딩

요약:
Redux 작동방식
UI - 각 Color값을 가지고 있는 버톤이 있는 상황

1. 먼저 createStore()를 통해 Store라는 하나의 큰 공간을 만들고, state라는 객체를 생성한다.
2. callback함수인 reducer를 호출해 state값을 초기화한다.
3. UI에서 Color값의 변경을 요구할 때, Dispatch({type: 'CHANGE_COLOR', color:'red'})와 같이 action을 생성하고, 인자값으로 담아 Dispatch를 호출한다
4. Dispatch는 reducer를 호출하고 reducer는 파라미터로 기존 state값과 action값을 받는다
5. reducer는 action의 type에 따라 실행해야할 명령문을 정한다. 이 떄, pure함수로 작성을 해야함
6. store에 있는 state값을 대체하는 것이 아니라, 복재해 새로운 state값을 만들고, store에 저장한다.
7. store에 state값이 변경되고 나면, dispatch가 subscribe(render)를 호출해 render안에 새로운 state값을 전달함으로써 Rendering된다.

Redux를 사용하는 이유
Redux가 없는 코드는 각각의 component간의 의존성이 너무 높다.
예를들어, 다른 component의 코드를 수정하거나 삭제하려면 다른 component와 연결된 코드가 얽혀있어 오류가 발생한다.
그러므로 component 추가, 수정, 삭제 시, 기존의 component를 모두 수정해야 한다.
하지만 Redux를 통해 중앙 집중형 관리를 하면 각각의 component는 action(상태가 바뀌었다는 것)을 store에 dispatch(통보)하면 된다.
이에 따른 자신의 변화를 작성 후, store에 subscribe(구독)을 하면 state가 바뀔때마다 통보를 받기 때문에 다른 component와의 연결없이 자신의 모양을 자유롭게 바꿀 수 O.
즉, 수정해도 다른 부품들은 영향을 받지 않는다.
=> Redux를 통해 각 Module의 독립성을 보장받을 수 O.
