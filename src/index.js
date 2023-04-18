import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./components/context/AuthContext/AuthContext";
import { AccountContextProvider } from "./components/context/AccountContext/AccountContext";
import { TransactionContextProvider } from "./components/context/TransactionContext/TransactionsContext";
alert(
  "I am using free plan for hosting which may cause latency in requests.You can download & run the file from gitHub for better experience."
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <AccountContextProvider>
      <TransactionContextProvider>
        <App />
      </TransactionContextProvider>
    </AccountContextProvider>
  </AuthContextProvider>
);
