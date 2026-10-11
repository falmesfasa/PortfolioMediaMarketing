"use client";
import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay }}>{children}</motion.div>
);

interface SectionProps { id?: string; title?: string; sub?: string; children: ReactNode }
export const Section = ({ id, title, sub, children }: SectionProps) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
    {title && <Reveal><h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl">{title}</h2>{sub && <p className="mt-4 text-mist/70 max-w-2xl">{sub}</p>}</Reveal>}
    <div className={title ? "mt-10" : ""}>{children}</div>
  </section>
);

export const Tag = ({ children }: { children: ReactNode }) => <span className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-mist/80">{children}</span>;

type BtnProps = AnchorHTMLAttributes<HTMLAnchorElement> & { solid?: boolean };
export const Btn = ({ href, children, solid, ...p }: BtnProps) => (
  <a href={href} {...p} className={`inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium transition ${solid ? "bg-volt text-white hover:bg-blue-500" : "border border-line hover:border-volt"}`}>{children}</a>
);

export const Img = ({ src, label, className = "" }: { src?: string; label: string; className?: string }) => src
  ? <img src={src} alt={label} className={`object-cover w-full h-full ${className}`} />
  : <div className={`grid place-items-center bg-ink border border-dashed border-line text-xs text-mist/50 text-center p-3 ${className}`}>Image placeholder: {label}</div>;
