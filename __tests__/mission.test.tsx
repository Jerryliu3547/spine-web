import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MissionSection from "@/components/MissionSection";

describe("MissionSection Component", () => {
  it("renders the Mission section with script header and editorial headline", () => {
    render(<MissionSection />);
    expect(screen.getByText("Our")).toBeInTheDocument();
    expect(screen.getByText("Mission")).toBeInTheDocument();
    expect(
      screen.getByText(/Biomechanical Analysis\s*shouldn’t stand between spine surgeons/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/SpineTwin exists to help healthcare teams eliminate mechanical failure/i)
    ).toBeInTheDocument();
  });

  it("does not render the 'SpineTwin in numbers' section", () => {
    render(<MissionSection />);
    expect(screen.queryByText(/SpineTwin in/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/numbers\./i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Empirical clinical validation and biomechanical scale/i)).not.toBeInTheDocument();
  });

  it("renders torn paper side graphic images with correct src", () => {
    const { container } = render(<MissionSection />);
    const images = container.querySelectorAll("img");
    const srcList = Array.from(images).map((img) => img.getAttribute("src"));
    expect(srcList.some((src) => src?.includes("/mission/torn-paper-right.jpg"))).toBe(true);
    expect(srcList.some((src) => src?.includes("/mission/torn-paper-bottom-left.jpg"))).toBe(true);
  });
});

