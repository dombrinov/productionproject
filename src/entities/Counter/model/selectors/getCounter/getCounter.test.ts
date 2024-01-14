import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});//deepPartial - обьявляем только кусок стейта, а именно ОБЬЕКТ с полем value. Сам тест ожидает возвращение участка, который отвечает за счетчик

