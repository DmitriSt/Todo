import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from './App';
import { Provider } from "react-redux";
import { store } from './store/store'

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.useFakeTimers();
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});

it("renders with or without a name", () => {
  act(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>, container);
  });
  expect(container.textContent).toBe("Loading...");

  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(container.querySelector("[data-testid='count']").textContent).toEqual("0");

  act(() => {
    container
      .querySelector("[data-testid='increment']")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    container
      .querySelector("[data-testid='increment']")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })
  expect(container.querySelector("[data-testid='count']").textContent).toEqual("2");

  act(() => {
    container
      .querySelector("[data-testid='decrement']")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })
  expect(container.querySelector("[data-testid='count']").textContent).toEqual("1");

  act(() => {
    container
      .querySelector("[data-testid='incrementByAmount']")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })
  expect(container.querySelector("[data-testid='count']").textContent).toEqual("3");
});