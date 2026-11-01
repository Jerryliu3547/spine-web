import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "@/components/Hero";

describe("Hero Component", () => {
  it("renders main headline", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /from x-ray to simulated surgery/i,
      })
    ).toBeInTheDocument();
  });

  it("renders subheadline and clinical mission description", () => {
    render(<Hero />);
    expect(
      screen.getByText(/an infinite biomechanics program team for surgical r&d/i)
    ).toBeInTheDocument();
  });

  it("renders Request Clinical Demo CTA button with calendar link", () => {
    render(<Hero />);
    const ctaButton = screen.getByRole("link", { name: /request clinical demo/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute("href", "https://calendar.app.google/xuDw7PomLrF6Y6BW7");
  });
});
