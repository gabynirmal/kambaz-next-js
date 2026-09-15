"use client";

import { Provider } from "react-redux";
import HelloRedux from "./hello";
import store from "../store";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
      </div>
    </Provider>
  );
}
