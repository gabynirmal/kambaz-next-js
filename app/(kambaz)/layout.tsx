"use client";

import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Session from "./account/Session";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kambaz">
          <div className="d-flex">
            <div>
              <KambazNavigation />
            </div>
            <div
              className="wd-main-content-offset px-5 flex-fill"
              style={{ paddingTop: 36, paddingBottom: 36 }}
            >
              {children}
            </div>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
