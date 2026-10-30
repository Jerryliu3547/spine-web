import "@testing-library/jest-dom";

// Mock HTMLMediaElement play/pause for JSDOM
if (typeof window !== "undefined") {
  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  window.HTMLMediaElement.prototype.pause = () => {};
}
