import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FeatureCarouselSection from "@/components/FeatureCarouselSection";

describe("FeatureCarouselSection Component", () => {
  it("renders the stationary card headline and initial metric", () => {
    render(<FeatureCarouselSection />);
    
    // Headline
    expect(screen.getByText(/The rules of/i)).toBeInTheDocument();
    expect(screen.getByText(/revenue cycle,/i)).toBeInTheDocument();
    expect(screen.getByText(/rewritten/i)).toBeInTheDocument();

    // Metric and description
    expect(screen.getByText("7%+")).toBeInTheDocument();
    expect(screen.getByText(/Reduction in AR backlog/i)).toBeInTheDocument();
  });

  it("renders feature cards with titles and descriptions", () => {
    render(<FeatureCarouselSection />);

    expect(screen.getByText("Lower cost to collect")).toBeInTheDocument();
    expect(screen.getByText(/Reduce the operational burden/i)).toBeInTheDocument();

    expect(screen.getByText("Gain full collections visibility")).toBeInTheDocument();
    expect(screen.getByText(/Track activity, progress, and outcomes/i)).toBeInTheDocument();
  });

  it("allows switching cards using pagination dots", async () => {
    render(<FeatureCarouselSection />);

    const dots = screen.getAllByRole("button", { name: /Go to feature card/i });
    expect(dots).toHaveLength(4);

    // Click second dot
    fireEvent.click(dots[1]);
    expect(dots[1]).toHaveClass("w-7");
    expect(await screen.findByText(/First-pass resolution rate/i)).toBeInTheDocument();
  });
});
