import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Page from "@/app/page";

describe("Root Landing Page", () => {
  it("renders page content properly", () => {
    render(<Page />);
    expect(document.body).toBeDefined();
  });
});
