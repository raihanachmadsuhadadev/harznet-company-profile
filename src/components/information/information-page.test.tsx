import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { InformationPage } from "@/components/information/information-page";
import { informationPageContent } from "@/content/information-page";

function getRenderedSource(image: HTMLElement) {
  const renderedSrc = image.getAttribute("src") ?? "";
  return new URL(renderedSrc, "http://localhost").searchParams.get("url") ?? renderedSrc;
}

describe("InformationPage", () => {
  it("menampilkan satu H1 dan hanya dua poster halaman pertama", () => {
    const { container } = render(<InformationPage content={informationPageContent} />);

    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Informasi layanan dan program HARZNET.",
      }),
    ).toBeInTheDocument();

    const gallery = screen.getByRole("list", { name: "Gallery poster informasi HARZNET" });
    const images = within(gallery).getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images.map(getRenderedSource)).toEqual(
      informationPageContent.posters.slice(0, 2).map((poster) => poster.src),
    );
    expect(
      within(gallery).queryByRole("img", { name: informationPageContent.posters[2].alt }),
    ).not.toBeInTheDocument();
    expect(
      within(gallery).queryByRole("img", { name: informationPageContent.posters[3].alt }),
    ).not.toBeInTheDocument();
  });

  it("berpindah antarhalaman dan memperbarui state pagination", () => {
    render(<InformationPage content={informationPageContent} />);

    const previous = screen.getByRole("button", { name: "Buka halaman poster sebelumnya" });
    const next = screen.getByRole("button", { name: "Buka halaman poster berikutnya" });
    const pageOne = screen.getByRole("button", { name: "Buka halaman poster 1" });
    const pageTwo = screen.getByRole("button", { name: "Buka halaman poster 2" });

    expect(previous).toBeDisabled();
    expect(next).toBeEnabled();
    expect(pageOne).toHaveAttribute("aria-current", "page");

    fireEvent.click(next);

    const secondPageGallery = screen.getByRole("list", {
      name: "Gallery poster informasi HARZNET",
    });
    expect(within(secondPageGallery).getAllByRole("img").map(getRenderedSource)).toEqual(
      informationPageContent.posters.slice(2, 4).map((poster) => poster.src),
    );
    expect(
      within(secondPageGallery).queryByRole("img", {
        name: informationPageContent.posters[0].alt,
      }),
    ).not.toBeInTheDocument();
    expect(
      within(secondPageGallery).queryByRole("img", {
        name: informationPageContent.posters[1].alt,
      }),
    ).not.toBeInTheDocument();
    expect(next).toBeDisabled();
    expect(previous).toBeEnabled();
    expect(pageTwo).toHaveAttribute("aria-current", "page");

    fireEvent.click(previous);
    expect(screen.getByRole("button", { name: "Buka halaman poster 1" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(
      screen.getByRole("img", { name: informationPageContent.posters[0].alt }),
    ).toBeInTheDocument();
  });

  it("mempertahankan seluruh href, alt, dan frame card yang konsisten", () => {
    const { container } = render(<InformationPage content={informationPageContent} />);

    for (const page of [1, 2]) {
      fireEvent.click(screen.getByRole("button", { name: `Buka halaman poster ${page}` }));
      const gallery = screen.getByRole("list", { name: "Gallery poster informasi HARZNET" });
      const visiblePosters = informationPageContent.posters.slice((page - 1) * 2, page * 2);

      for (const poster of visiblePosters) {
        expect(within(gallery).getByRole("img", { name: poster.alt })).toBeInTheDocument();
        expect(within(gallery).getByRole("link", { name: poster.alt })).toHaveAttribute(
          "href",
          poster.href,
        );
      }
      for (const card of within(gallery).getAllByRole("link")) {
        expect(card).toHaveClass("aspect-[4/5]", "w-full", "overflow-hidden");
      }
    }

    expect(container.querySelector('a[href="#"]')).not.toBeInTheDocument();
  });

  it("tidak lagi menampilkan konten knowledge center atau CTA lama", () => {
    const { container } = render(<InformationPage content={informationPageContent} />);

    expect(screen.queryByRole("heading", { name: /Informasi Unggulan/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Artikel dan Panduan/i })).not.toBeInTheDocument();
    expect(container.querySelector("article")).not.toBeInTheDocument();
    expect(screen.queryByText("Baca Selengkapnya")).not.toBeInTheDocument();
    expect(screen.queryByText("Hubungi Tim HARZNET")).not.toBeInTheDocument();
    expect(container.innerHTML).not.toMatch(/wa\.me|whatsapp/i);
  });
});
