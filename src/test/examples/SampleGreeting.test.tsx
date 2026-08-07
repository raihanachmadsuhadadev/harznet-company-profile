import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SampleGreeting } from "@/test/fixtures/SampleGreeting";

describe("SampleGreeting", () => {
  it("menampilkan salam HARZNET sebagai heading", () => {
    render(<SampleGreeting name="HARZNET" />);

    expect(screen.getByRole("heading", { level: 1, name: "Halo, HARZNET" })).toBeInTheDocument();
  });
});
