import "app/styles/index.scss";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

const RouterDecorator: FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterDecorator;
