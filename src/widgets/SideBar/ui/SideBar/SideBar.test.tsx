import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { SideBar } from "./SideBar";

describe("SideBar", () => {
  test("test render button", () => {
    componentRender(<SideBar />); //создал свою функию-хелпер, которая тянет конфиг i18nForTests для привлечения библиотеки для тестов
    expect(screen.getByTestId("sideBar")).toBeInTheDocument(); //ожидаемый результат - появление сайдбара в документе
  });
  test("test toggle sideBar", () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId("sideBar-toggle");
    expect(screen.getByTestId("sideBar")).toBeInTheDocument();
    fireEvent.click(toggleBtn); //нажимаем на кнопку
    expect(screen.getByTestId("sideBar")).toHaveClass("collapsed"); //ожидаем, что сайдбар есть в документе и у него есть класс collapsed
  });
});
