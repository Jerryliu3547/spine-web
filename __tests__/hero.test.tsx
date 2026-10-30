import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "@/components/Hero";

describe("Hero Component", () => {
  it("renders main headline", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", {
        name: /from one lateral x-ray to a simulated spine surgery/i,
      })
    ).toBeInTheDocument();
  });

  it("renders all highlight prompt switcher tabs", () => {
    render(<Hero />);
    expect(screen.getByText(/1\. automatically reading x-ray to 3d reconstruction/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. musculoskeletal & finite element analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. agentic system/i)).toBeInTheDocument();
  });

  it("switches prompt content and telemetry when clicking a tab", () => {
    render(<Hero />);
    // Initial active tab should be X-Ray to 3D Reconstruction
    expect(
      screen.getByText(/ingest lateral radiograph, detect t1–l5 anatomical landmarks/i)
    ).toBeInTheDocument();

    // Click Musculoskeletal & Finite Element Analysis tab
    const mskTab = screen.getByRole("button", {
      name: /2\. musculoskeletal & finite element analysis/i,
    });
    fireEvent.click(mskTab);

    // Verify musculoskeletal prompt is now displayed
    expect(
      screen.getByText(/couple opensim full-trunk musculoskeletal dynamics/i)
    ).toBeInTheDocument();

    // Click Agentic System tab
    const agentTab = screen.getByRole("button", {
      name: /4\. agentic system/i,
    });
    fireEvent.click(agentTab);

    // Verify agentic prompt is displayed
    expect(
      screen.getByText(/autonomous agentic routing across surgical planning/i)
    ).toBeInTheDocument();
  });
});
