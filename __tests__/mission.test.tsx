import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MissionSection from "@/components/MissionSection";

describe("MissionSection Component", () => {
  it("renders the Mission section with script header and editorial headline", () => {
    render(<MissionSection />);
    expect(screen.getByText("Our")).toBeInTheDocument();
    expect(screen.getByText("Mission")).toBeInTheDocument();
    expect(
      screen.getByText(/Biomechanical guesswork shouldn’t stand between spine surgeons/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Spine Suite exists to help healthcare teams eliminate mechanical failure/i)
    ).toBeInTheDocument();
  });

  it("renders 'Spine Suite in numbers' and default clinical metrics", () => {
    render(<MissionSection />);
    expect(screen.getByText(/Spine Suite in/i)).toBeInTheDocument();
    expect(screen.getByText("22%+")).toBeInTheDocument();
    expect(screen.getByText("50%+")).toBeInTheDocument();
    expect(screen.getByText("60%+")).toBeInTheDocument();
    expect(screen.getByText("500k+")).toBeInTheDocument();
  });

  it("toggles to Foundry Scale metrics when Foundry Scale tab is clicked", () => {
    render(<MissionSection />);
    const foundryTab = screen.getByRole("button", { name: /foundry scale/i });
    fireEvent.click(foundryTab);

    expect(screen.getByText("552")).toBeInTheDocument();
    expect(screen.getByText("14×")).toBeInTheDocument();
    expect(screen.getByText("0.20s")).toBeInTheDocument();
    expect(screen.getByText("22 / 22")).toBeInTheDocument();
  });

  it("renders torn paper side graphic images with correct src", () => {
    const { container } = render(<MissionSection />);
    const images = container.querySelectorAll("img");
    const srcList = Array.from(images).map((img) => img.getAttribute("src"));
    expect(srcList.some((src) => src?.includes("/mission/torn-paper-right.jpg"))).toBe(true);
    expect(srcList.some((src) => src?.includes("/mission/torn-paper-bottom-left.jpg"))).toBe(true);
  });
});
