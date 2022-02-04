import Header from ".";
import { render, screen } from "@testing-library/react";
import { SHeaderContainer } from "../../../styles/components";
import Button from "../button";
import userEvent from "@testing-library/user-event";
import { useAuth } from "../../../hooks/useAuth";

const Children = () => <h1>Children</h1>;

const Buttons = () => {
  return (
    <div data-testid='buttons'>
      <Button data-testid=''>Войти</Button>
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
    <Header HeaderStyledComponent={SHeaderContainer} buttons={<Buttons />}>
      <Children />
    </Header>
  );
  const header = screen.queryByTestId("buttons");
  expect(header).toBeInTheDocument();
});

test("header has user props", () => {
  render(
    <Header
      HeaderStyledComponent={SHeaderContainer}
      user={{ name: "Dan" }}
      buttons={<Buttons />}
    >
      <Children />
    </Header>
  );
  const header = screen.queryByTestId("buttons");
  expect(header).toBeInTheDocument();
});
