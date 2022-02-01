import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Markets_data_context_provider} from "./components/context/Markets_data_context_provider";

ReactDOM.render(
    <Markets_data_context_provider>
        <App />
    </Markets_data_context_provider>,
    document.getElementById("app")
);
