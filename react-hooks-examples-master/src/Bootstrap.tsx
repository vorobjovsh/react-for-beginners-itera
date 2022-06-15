import React, { Suspense } from "react";
import "./App.css";

let Content: React.LazyExoticComponent<() => JSX.Element>;
if (process.env.LESSON === "STATE") {
  Content = React.lazy(() => import("./state/state.example"));
} else if (process.env.LESSON === "EFFECT") {
  Content = React.lazy(() => import("./effect/effect.example"));
} else if (process.env.LESSON === "CONTEXT") {
  Content = React.lazy(() => import("./context/context.example"));
} else if (process.env.LESSON === "CALLBACK") {
  Content = React.lazy(() => import("./callback/callback.example"));
} else if (process.env.LESSON === "CUSTOM") {
  Content = React.lazy(() => import("./custom/custom.example"));
} else {
  Content = React.lazy(() => import("./state/state.example"));
}

function Bootstrap() {
  return (
    <div className="app">
      <Content />
    </div>
  );
}

export default Bootstrap;
