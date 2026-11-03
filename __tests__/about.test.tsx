import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TeamSection from "@/components/TeamSection";
import AboutPage from "@/app/about/page";

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ""} />;
  },
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/about",
}));

describe("About Us Page & TeamSection Consent Handling", () => {
  it("hides Dr. Michael P. Kelly and Dr. Jeffrey M. Hills by default (pending consent)", () => {
    render(<TeamSection />);

    // Active founders must be visible
    expect(screen.getAllByText("Farshid Ghezelbash, PhD").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Amir Hossein Eskandari, PhD").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Dianze Liu").length).toBeGreaterThanOrEqual(1);

    // Clinical advisors pending consent must NOT be visible
    expect(screen.queryByText(/Michael P\. Kelly/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jeffrey M\. Hills/i)).not.toBeInTheDocument();

    // Pending institutional logos must NOT be visible in the marquee
    expect(screen.queryByAltText("Stanford Medicine")).not.toBeInTheDocument();
    expect(screen.queryByAltText("UT Health San Antonio")).not.toBeInTheDocument();
  });

  it("renders Dr. Kelly, Dr. Hills, and their affiliated institutions when showPendingConsent is true", () => {
    render(<TeamSection showPendingConsent={true} />);

    // Clinical advisors should be present
    expect(screen.getByText("Michael P. Kelly, MD")).toBeInTheDocument();
    expect(screen.getByText("Jeffrey M. Hills, MD, MSCI-TS")).toBeInTheDocument();

    // Associated logos should be present
    expect(screen.getAllByAltText("Stanford Medicine").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByAltText("UT Health San Antonio").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the AboutPage without exposing the 2 doctors pending consent", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: /meet the team/i })).toBeInTheDocument();
    expect(screen.queryByText(/Michael P\. Kelly/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Jeffrey M\. Hills/i)).not.toBeInTheDocument();
  });
});
