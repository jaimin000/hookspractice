import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HookCounter from "./HookCounter";
import Form from "./form";
import Array from "./Array";
import Effect from "./effect";
import IntervalHookCounter from "./intervalhookcounter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IntervalHookCounter />);
