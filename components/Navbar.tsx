"use client";
import { useState } from "react";
import { nav, RESUME_URL } from "../data/site";
import { Btn } from "./ui";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-navy/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="font-display font-semibold">Martin Gachucha</a>
        <ul className="hidden lg:flex gap-6 text-sm text-mist/75">{nav.map(n => <li key={n}><a className="hover:text-white" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul>
        <div className="flex items-center gap-2">
          <span className="hidden sm:block"><Btn href={RESUME_URL} download solid>Download Resume</Btn></span>
          <button className="lg:hidden rounded-lg border border-line px-3 py-2 text-sm" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        </div>
      </nav>
      {open && <ul id="mnav" className="lg:hidden border-t border-line px-5 py-3 space-y-3 bg-navy">
        {nav.map(n => <li key={n}><a className="block py-1" href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a></li>)}
        <li><Btn href={RESUME_URL} download solid>Download Resume</Btn></li></ul>}
    </header>
  );
}
