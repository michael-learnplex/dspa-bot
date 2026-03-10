"use client";

import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-berkeley-blue text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-6xl mb-2">🚫</div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Access Denied
        </h1>
        <p className="text-sm text-blue-100 leading-relaxed">
          Michael-DSPA is currently restricted to @berkeley.edu accounts. Please
          ensure you are signed into your student Google account.
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center justify-center w-full max-w-xs mx-auto rounded-full bg-california-gold text-berkeley-blue font-semibold text-base px-6 py-3 shadow-lg hover:bg-yellow-400 transition-colors min-h-[48px]"
        >
          Back to Home
        </Link>
        <p className="text-[11px] text-blue-200 mt-2">
          This is an independent project by Michael Florip for Learnplex. It is
          NOT an official UC Berkeley tool.
        </p>
      </div>
    </div>
  );
}
