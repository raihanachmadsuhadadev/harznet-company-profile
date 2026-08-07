import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { QuestionnairePage } from "@/components/questionnaire/questionnaire-page";
import { questionnairePageContent } from "@/content/questionnaire-page";

describe("QuestionnairePage", () => {
  it("menampilkan heading dan informasi pengisian", () => {
    const { container } = render(<QuestionnairePage content={questionnairePageContent} />);

    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Kuesioner Kepuasan Pelanggan HARZNET",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(questionnairePageContent.description)).toBeInTheDocument();
    for (const note of questionnairePageContent.notes) {
      expect(screen.getByText(note)).toBeInTheDocument();
    }
  });

  it("menyematkan Google Form resmi dengan atribut responsif", () => {
    render(<QuestionnairePage content={questionnairePageContent} />);

    const iframe = screen.getByTitle("Kuesioner Kepuasan Pelanggan HARZNET");
    expect(iframe).toHaveAttribute("src", questionnairePageContent.embedUrl);
    expect(iframe).toHaveAttribute("width", "100%");
    expect(iframe).toHaveAttribute("loading", "lazy");
    expect(iframe).toHaveAttribute("frameborder", "0");
    expect(iframe).toHaveClass("w-full");
  });

  it("menyediakan fallback aman ke Google Form", () => {
    const { container } = render(<QuestionnairePage content={questionnairePageContent} />);

    const fallback = screen.getByRole("link", { name: /Buka formulir di tab baru/ });
    expect(fallback).toHaveAttribute("href", questionnairePageContent.fallbackUrl);
    expect(fallback).toHaveAttribute("target", "_blank");
    expect(fallback).toHaveAttribute("rel", "noopener noreferrer");
    expect(container.innerHTML).not.toMatch(/wa\.me|whatsapp/i);
  });
});
