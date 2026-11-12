import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactPage from "@/app/contact/page";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

vi.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

describe("Request Demo CTAs and Contact Page", () => {
  it("renders Navbar and Hero Request Demo buttons linking to contact page", () => {
    const { container: navContainer } = render(<Navbar />);
    const requestDemoLink = navContainer.querySelector('a[href="/contact"]');
    expect(requestDemoLink).toBeInTheDocument();

    const { container: heroContainer } = render(<Hero />);
    const heroDemoLink = heroContainer.querySelector('a[href="/contact"]');
    expect(heroDemoLink).toBeInTheDocument();
  });

  it("renders the /contact page with Book an appointment form", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /Contact Us/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Book an appointment/i })).toBeInTheDocument();
  });
});
