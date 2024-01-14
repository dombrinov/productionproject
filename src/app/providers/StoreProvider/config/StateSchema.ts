import { CounterSchema } from "entities/Counter";

export interface StateSchema {
  counter: CounterSchema;
}//тип данных для storprovider, counterSchema лежит в entities/counter/model/types
