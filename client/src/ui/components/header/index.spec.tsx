import Header from ".";
import { render, screen } from "@testing-library/react";
import { SHeaderContainer } from "../../../styles/components";
import Button from "../button";

const Children = () => <h1>Children</h1>;

const Buttons = () => {
  return (
    <div>
      <Button>Войти</Button>
      <Button>Регистрация</Button>
    </div>
  );
};

test("header", () => {
  render(
    <Header HeaderStyledComponent={SHeaderContainer}>
      <Children />
    </Header>
  );
  const header = screen.queryByTestId("header");
  expect(header).toBeInTheDocument();
});

test("header has buttons", () => {
  render(
    <Header HeaderStyledComponent={SHeaderContainer}>
      <Children />
    </Header>
  );
  const header = screen.queryByTestId("header");
  expect(header).toBeInTheDocument();
});
