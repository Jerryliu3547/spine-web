import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PipelineSection from "@/components/PipelineSection";
import LogoTicker from "@/components/LogoTicker";

describe("LogoTicker Component", () => {
  it("renders academic and clinical institution badges", () => {
    render(<LogoTicker />);
    expect(screen.getAllByText(/stanford medicine/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/georgia tech/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/ut health san antonio/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/polytechnique montréal/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/mcgill/i)[0]).toBeInTheDocument();
  });
});

describe("PipelineSection Component", () => {
  it("renders all four core pipeline stages", () => {
    render(<PipelineSection />);
    expect(screen.getAllByText(/stages 1–5/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/stages 6–8/i)).toBeInTheDocument();
    expect(screen.getByText(/stage 9/i)).toBeInTheDocument();
    expect(screen.getByText(/stages 10–11/i)).toBeInTheDocument();
  });

  it("renders clinical descriptions and allows switching stages", () => {
    render(<PipelineSection />);
    expect(screen.getAllByText(/17 vertebrae/i).length).toBeGreaterThan(0);

    // Switch to Stages 6-8
    const planButton = screen.getByRole("button", { name: /plan the correction/i });
    fireEvent.click(planButton);
    expect(screen.getByText(/3,800 candidate plans/i)).toBeInTheDocument();

    // Switch to Stage 9
    const buildButton = screen.getByRole("button", { name: /build 3d implants/i });
    fireEvent.click(buildButton);
    expect(screen.getByText(/42-spine statistical shape model/i)).toBeInTheDocument();

    // Switch to Stages 10-11
    const simButton = screen.getByRole("button", { name: /multi-physics simulation/i });
    fireEvent.click(simButton);
    expect(screen.getAllByText(/febio/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/opensim/i).length).toBeGreaterThan(0);
  });
});
