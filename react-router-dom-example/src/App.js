import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

// App이라는 컴포넌트 안에서 사용할 컴포넌트
function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Js() {
  return (
    <div>
      <h2>JS</h2>
      JS is ...
    </div>
  );
}
function Leact() {
  return (
    <div>
      <h2>React</h2>
      React is ...
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to="/topics/1">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/topics/2">JS</NavLink>
        </li>
        <li>
          <NavLink to="/topics/3">React</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/topics/1"> HTML is ...</Route>
        <Route path="/topics/2" element={<Js />}></Route>
        <Route path="/topics/3" element={<Leact />}></Route>
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      Not Found...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li>
          {/* NavLink의 장점: 사용자가 현재 자신이 어떤 페이지에 있는지 직관적으로 확인 가능 */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
