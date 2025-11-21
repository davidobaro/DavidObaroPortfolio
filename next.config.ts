import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Ensure Turbopack uses this directory as the workspace root to avoid
  // inferring the wrong root when multiple lockfiles exist on the system.
  // This silences the "inferred your workspace root" warning and helps
  // Vercel choose the correct project root during builds.
  turbopack: {
    root: "./",
  } as any,
};

export default nextConfig;
