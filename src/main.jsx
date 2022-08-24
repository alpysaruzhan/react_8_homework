import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import Counter from "./routes/counter";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="counter" element={<Counter />} />
                <Route
                  path="*"
                  element={
                    <main>
                      <p>Извините, страница не найдена.</p>
                    </main>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
  </React.StrictMode>
);
