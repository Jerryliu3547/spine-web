import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DemoPage from "@/app/demo/page";
import ContactPage from "@/app/contact/page";
import CalBookingWidget from "@/components/CalBookingWidget";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

vi.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

describe("Demo Page, Contact Page, and CalBookingWidget", () => {
  it("renders Navbar and Hero Request Demo buttons linking to contact page", () => {
    const { container: navContainer } = render(<Navbar />);
    const requestDemoLink = navContainer.querySelector('a[href="/contact"]');
    expect(requestDemoLink).toBeInTheDocument();

    const { container: heroContainer } = render(<Hero />);
    const heroDemoLink = heroContainer.querySelector('a[href="/contact"]');
    expect(heroDemoLink).toBeInTheDocument();
  });

  it("renders CalBookingWidget with 30m, Google Meet, time format toggle, and October 2026", () => {
    render(<CalBookingWidget />);
    expect(screen.getByText(/Executive conversation/i)).toBeInTheDocument();
    expect(screen.getByText("30m")).toBeInTheDocument();
    expect(screen.getByText("Google Meet")).toBeInTheDocument();
    expect(screen.getByText(/October/i)).toBeInTheDocument();
    expect(screen.getByText("12h")).toBeInTheDocument();
    expect(screen.getByText("24h")).toBeInTheDocument();
  });

  it("allows switching time format from 12h to 24h", () => {
    render(<CalBookingWidget />);
    const btn24h = screen.getByText("24h");
    fireEvent.click(btn24h);
    expect(screen.getByText("06:00")).toBeInTheDocument();
  });

  it("allows selecting a time slot and proceeding to form", () => {
    render(<CalBookingWidget />);
    const slot6am = screen.getByText("6:00am");
    fireEvent.click(slot6am);

    const nextBtn = screen.getByRole("button", { name: /Next: Confirm Details/i });
    fireEvent.click(nextBtn);

    expect(screen.getByText(/Confirm your reservation/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e\.g\. Dr\. Jane Smith/i)).toBeInTheDocument();
  });

  it("renders the /demo page with header and multi-physics highlight cards", () => {
    render(<DemoPage />);
    expect(screen.getByText(/Schedule a Technical Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/Live Multi-Physics Sweep/i)).toBeInTheDocument();
  });

  it("renders the /contact page with Book an appointment form", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /Contact Us/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Book an appointment/i })).toBeInTheDocument();
  });
});
