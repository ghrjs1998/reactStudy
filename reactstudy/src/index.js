import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ConfirmButton from "./handling-event/confirm-button-example/ConfirmButton";
import Accommodate from "./hooks/use-counter-example/Accommodate";
import CommentList from "./component-props/comment-example/CommentList";
import Clock from "./rendering-elements/clock-example/clock";
import NotificationList from "./state-lifecycle/notification-example/NotificationList";
import LandingPage from "./conditional-rendering/toolbar-example/LandingPage";
import AttendanceBook from "./list-keys/attendance-book-example/AttendanceBook";
import SignUp from "./forms/sign-up-example/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
