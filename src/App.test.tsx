import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import { store } from "@/store";

import App from "./App";

describe("<App />", () => {
  test("App mounts properly", () => {
    const view = render(
      <StaticRouter location={""}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );
    expect(view).toBeTruthy();

    const header = screen.getByText("React + Redux Toolkit ToDo App");
    expect(header.textContent).toBeTruthy();

    view.unmount();
  });
});
