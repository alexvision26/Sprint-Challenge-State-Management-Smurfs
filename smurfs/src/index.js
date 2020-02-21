import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { smurfsReducer as reducer } from './reducers/smurfsReducer';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
