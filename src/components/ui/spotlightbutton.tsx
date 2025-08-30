"use client";
import Link from "next/link";

type SpotlightButtonProps = {
  text?: string;
  href?: string;
};

export function SpotlightButton({ text = "Hover me", href }: SpotlightButtonProps) {
  const Inner = (
    <div className="group relative inline-block  rounded-xl bg-neutral-900 p-px leading-6 text-white no-underline shadow-2xl shadow-red-950">
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(239,68,68,0.6)_0%,rgba(239,68,68,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative z-10 font-helvetica-bold flex items-center space-x-2 rounded-xl bg-neutral-950/50 px-6 py-3 ring-1 ring-white/10">
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-fuchsia-400/0 via-red-400/90 to-red-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </div>
  );

  return (
    <div style={{ transform: "none" }} className="z-20">
      {href ? <Link href={href}>{Inner}</Link> : <button>{Inner}</button>}
    </div>
  );
}
