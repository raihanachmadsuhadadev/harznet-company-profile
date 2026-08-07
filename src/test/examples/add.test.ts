import { describe, expect, it } from "vitest";

import { add } from "@/test/fixtures/add";

describe("add", () => {
  it("menjumlahkan dua angka", () => {
    expect(add(2, 3)).toBe(5);
  });
});
