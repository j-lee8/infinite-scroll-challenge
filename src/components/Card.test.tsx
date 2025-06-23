import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card component", () => {
  const mockProps = {
    title: "Dior Sauvage Elixir",
    price: 160,
    reviews: 3,
    images: ["https://test.com/test.jpg"],
    num: 123,
  };

  it("renders title, price, reviews and image correctly", () => {
    render(<Card {...mockProps} />);

    expect(
      screen.getByText(`${mockProps.title} - ${mockProps.num}`),
    ).toBeInTheDocument();

    expect(screen.getByText(`From $${mockProps.price}`)).toBeInTheDocument();

    expect(
      screen.getByText(`${mockProps.reviews} reviews`),
    ).toBeInTheDocument();
    const img = screen.getByAltText("Dior Sauvage Elixir") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(mockProps.images[0]);
  });
});
