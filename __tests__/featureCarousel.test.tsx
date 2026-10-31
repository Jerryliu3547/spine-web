import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FeatureCarouselSection from "@/components/FeatureCarouselSection";

describe("FeatureCarouselSection Component", () => {
  it("renders the stationary card headline and initial card text", () => {
    render(<FeatureCarouselSection />);
    
    // Headline
    expect(screen.getByText(/X-Ray in,/i)).toBeInTheDocument();
    expect(screen.getByText(/Finite Element &/i)).toBeInTheDocument();
    expect(screen.getByText(/MSK out/i)).toBeInTheDocument();

    // Initial Card 1 stationary text: X-Ray (up) & Sagittal (small words)
    expect(screen.getAllByText("X-Ray").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Sagittal").length).toBeGreaterThan(0);
  });

  it("renders 5 feature cards with titles and descriptions", () => {
    render(<FeatureCarouselSection />);

    expect(screen.getAllByText("X-Ray Sagittal Analysis").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3D Spine Shape Model").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Plan + Screws Construct").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Finite Element Stress").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Musculoskeletal Dynamics").length).toBeGreaterThan(0);
  });

  it("dynamically updates stationary card text when switching cards", async () => {
    render(<FeatureCarouselSection />);

    const dots = screen.getAllByRole("button", { name: /Go to feature card/i });
    expect(dots).toHaveLength(5);

    // Click second dot -> Card 2: Shape Registration / spine shape model
    fireEvent.click(dots[1]);
    expect(dots[1]).toHaveClass("w-7");
    expect(await screen.findByText("Shape Registration")).toBeInTheDocument();
    expect(await screen.findByText("spine shape model")).toBeInTheDocument();

    // Click third dot -> Card 3: Plan +Screws / Alignment, PJK risk
    fireEvent.click(dots[2]);
    expect(dots[2]).toHaveClass("w-7");
    expect(await screen.findByText("Plan +Screws")).toBeInTheDocument();
    expect(await screen.findByText("Alignment, PJK risk")).toBeInTheDocument();
  });
});
