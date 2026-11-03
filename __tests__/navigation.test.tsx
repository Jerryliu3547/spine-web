import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "@/components/Navbar";
import ProductPage from "@/app/product/page";
import AboutPage from "@/app/about/page";
import TeamPage from "@/app/team/page";
import ContactPage from "@/app/contact/page";

// Mock next/navigation usePathname
vi.mock("next/navigation", () => ({
  usePathname: () => "/product",
}));

describe("New Navigation & Pages", () => {
  it("renders Product, About Us, and Contact navigation links, and omits Mission", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /^product$/i })).toHaveAttribute("href", "/product");
    expect(screen.getByRole("link", { name: /^about us$/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /^contact$/i })).toHaveAttribute("href", "/contact");
    expect(screen.queryByRole("link", { name: /^mission$/i })).not.toBeInTheDocument();
  });

  it("renders the Product page properly", () => {
    render(<ProductPage />);
    expect(screen.getByText(/autonomous biomechanics/i)).toBeInTheDocument();
  });

  it("renders the About Us page properly", () => {
    render(<AboutPage />);
    expect(screen.getAllByText(/biomechanical/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Team alias page properly", () => {
    render(<TeamPage />);
    expect(screen.getAllByText(/biomechanical/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Contact page properly", () => {
    render(<ContactPage />);
    expect(screen.getByText(/Contact Us\./i)).toBeInTheDocument();
  });
});
