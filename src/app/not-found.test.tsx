import { describe, expect, it } from "vitest";

import NotFound from "./not-found";

describe("not-found", () => {
  it("exports a function component", () => {
    expect(typeof NotFound).toBe("function");
  });
});
