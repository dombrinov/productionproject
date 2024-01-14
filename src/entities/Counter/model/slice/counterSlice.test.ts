import { counterReducer, counterActions } from "./counterSlice";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { CounterSchema } from "../types/counterSchema";

describe("counterSlice.test", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  }); //этот тест проверяет работу экшена, а именно декремент, ожидаем на выходе 10 - 1 = 9
  test("increment", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  }); //этот тест проверяет работу экшена, а именно инкремент, ожидаем на выходе 10 + 1 = 11
  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  }); //этот тест проверяет работу экшена при пустом значении, поскольку инишиалстейт равен 0, то ожидаем результат 1
});
