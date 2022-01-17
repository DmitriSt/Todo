import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./user";
import axios from "axios";

let container = null;

beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baezsss",
    age: "32",
    address: "123, Charming Avenue"
  };

  expect(container.textContent).toBe("");
  jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: fakeUser }));

  // Используем act асинхронно, чтобы передать успешно завершённые промисы
  await act(async () => {
    render(<User />, container);
  });


  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);
});