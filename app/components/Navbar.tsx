import React from "react";

export type Page = "home" | "experience" | "projects";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const homeItems = [
  { label: "Experience", page: "experience" as const },
  { label: "Projects", page: "projects" as const },
];

export default function Navbar({
  currentPage,
  onNavigate,
}: NavbarProps) {
  return (
    <nav className="w-full flex justify-center py-4">
      <div className="flex gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md">

        {currentPage === "home" ? (
          homeItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className="rounded-full px-4 py-2 text-sm font-medium text-black/70 transition hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </button>
          ))
        ) : (
          <button
            onClick={() => onNavigate("home")}
            className="rounded-full px-4 py-2 text-sm font-medium text-black/70 transition hover:bg-black/5 hover:text-black"
          >
            ← Back
          </button>
        )}

      </div>
    </nav>
  );
}