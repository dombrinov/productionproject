import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("test render button", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("test2 button check clear", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
