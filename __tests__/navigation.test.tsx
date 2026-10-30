import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "@/components/Navbar";
import ProductPage from "@/app/product/page";
import MissionPage from "@/app/mission/page";
import TeamPage from "@/app/team/page";
import ContactPage from "@/app/contact/page";

// Mock next/navigation usePathname
vi.mock("next/navigation", () => ({
  usePathname: () => "/product",
}));

describe("New Navigation & Pages", () => {
  it("renders Product, Mission, Team, and Contact navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /^product$/i })).toHaveAttribute("href", "/product");
    expect(screen.getByRole("link", { name: /^mission$/i })).toHaveAttribute("href", "/mission");
    expect(screen.getByRole("link", { name: /^team$/i })).toHaveAttribute("href", "/team");
    expect(screen.getByRole("link", { name: /^contact$/i })).toHaveAttribute("href", "/contact");
  });

  it("renders the Product page properly", () => {
    render(<ProductPage />);
    expect(screen.getByText(/autonomous biomechanics for/i)).toBeInTheDocument();
  });

  it("renders the Mission page properly", () => {
    render(<MissionPage />);
    expect(screen.getByText(/engineering zero-failure/i)).toBeInTheDocument();
  });

  it("renders the Team page properly", () => {
    render(<TeamPage />);
    expect(screen.getByText(/pioneering computational/i)).toBeInTheDocument();
  });

  it("renders the Contact page properly", () => {
    render(<ContactPage />);
    expect(screen.getByText(/Contact Us & Schedule an Executive Review/i)).toBeInTheDocument();
  });
});
