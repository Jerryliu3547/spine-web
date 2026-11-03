import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import Page from "@/app/page";
import { metadata } from "@/app/layout";

describe("Root Landing Page & Layout Metadata", () => {
  it("renders page content properly", () => {
    render(<Page />);
    expect(document.body).toBeDefined();
  });

  it("configures favicon and apple icon metadata correctly", () => {
    expect(metadata.icons).toBeDefined();
    const icons = metadata.icons as {
      icon: Array<{ url: string; sizes?: string; type?: string }>;
      shortcut: string;
      apple: Array<{ url: string; sizes?: string; type?: string }>;
    };

    const iconUrls = icons.icon.map((i) => i.url);
    expect(iconUrls).toContain("/apple-icon.png");
    expect(iconUrls).toContain("/icon.png");
    expect(iconUrls).toContain("/favicon.ico");
    expect(icons.shortcut).toBe("/apple-icon.png");

    const appleUrls = icons.apple.map((a) => a.url);
    expect(appleUrls).toContain("/apple-icon.png");
    expect(appleUrls).toContain("/apple-touch-icon.png");
  });

  it("ensures all icon assets exist in app and public directories", () => {
    const cwd = process.cwd();
    expect(fs.existsSync(path.join(cwd, "app/apple-icon.png"))).toBe(true);
    expect(fs.existsSync(path.join(cwd, "app/favicon.ico"))).toBe(true);
    expect(fs.existsSync(path.join(cwd, "app/icon.png"))).toBe(true);
    expect(fs.existsSync(path.join(cwd, "public/apple-icon.png"))).toBe(true);
    expect(fs.existsSync(path.join(cwd, "public/apple-touch-icon.png"))).toBe(true);
    expect(fs.existsSync(path.join(cwd, "public/favicon.ico"))).toBe(true);
    expect(fs.existsSync(path.join(cwd, "public/icon.png"))).toBe(true);
  });
});

