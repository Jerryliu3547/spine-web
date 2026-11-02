import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ContactForm from "@/components/ContactForm";
import ContactPage from "@/app/contact/page";

vi.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

describe("Apple-style Book an appointment ContactForm & Page", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders ContactForm with Apple design fields matching screenshot", () => {
    const { container } = render(<ContactForm />);

    expect(screen.getByRole("heading", { name: /Book an appointment/i })).toBeInTheDocument();
    expect(screen.getByText(/Tell us a little about you and we’ll get back to you/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/^Name$/i)).toHaveAttribute("placeholder", "Full name");
    expect(screen.getByLabelText(/^Email$/i)).toHaveAttribute("placeholder", "you@hospital.org");
    expect(screen.getByLabelText(/^Organization$/i)).toHaveAttribute("placeholder", "Hospital, clinic or company");
    expect(screen.getByLabelText(/^Preferred date$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Message$/i)).toHaveAttribute("placeholder", "What would you like to discuss?");

    expect(screen.getByRole("button", { name: /Request appointment/i })).toBeInTheDocument();

    const accessKeyInput = container.querySelector('input[name="access_key"]');
    expect(accessKeyInput).toHaveValue("4299d329-1866-436e-b5e7-05639aface57");
  });

  it("submits to Web3Forms and displays success result", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => ({
        success: true,
        message: "Success! We’ll get back to you shortly.",
      }),
    });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/^Name$/i), {
      target: { value: "Dr. Sarah Jenkins" },
    });
    fireEvent.change(screen.getByLabelText(/^Email$/i), {
      target: { value: "sarah@hospital.org" },
    });
    fireEvent.change(screen.getByLabelText(/^Organization$/i), {
      target: { value: "Stanford Medicine" },
    });
    fireEvent.change(screen.getByLabelText(/^Preferred date$/i), {
      target: { value: "2026-11-15" },
    });
    fireEvent.change(screen.getByLabelText(/^Message$/i), {
      target: { value: "Interested in evaluating 2D-to-3D reconstructed spine telemetry." },
    });

    const submitBtn = screen.getByRole("button", { name: /Request appointment/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "https://api.web3forms.com/submit",
        expect.objectContaining({
          method: "POST",
          body: expect.any(FormData),
        })
      );
    });

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/Success!/i);
    });
  });

  it("handles Web3Forms failure gracefully", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => ({
        success: false,
        message: "Invalid domain or submission error.",
      }),
    });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/^Name$/i), {
      target: { value: "Test Name" },
    });
    fireEvent.change(screen.getByLabelText(/^Email$/i), {
      target: { value: "test@domain.com" },
    });
    fireEvent.change(screen.getByLabelText(/^Message$/i), {
      target: { value: "Test Message" },
    });

    const submitBtn = screen.getByRole("button", { name: /Request appointment/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(/Invalid domain or submission error/i);
    });
  });

  it("renders ContactPage with Book an appointment form", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: /Book an appointment/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Contact Us/i })).toBeInTheDocument();
  });
});
