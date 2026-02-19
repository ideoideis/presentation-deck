#!/usr/bin/env node
/**
 * Generates deck-ideo-ideis-2026.pdf from the built website.
 * Run: npm run build && npm run generate-pdf
 */

import { spawn } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outputPath = resolve(root, "public", "deck-ideo-ideis-2026.pdf");
const PREVIEW_PORT = 4173;

function run(cmd, args, opts = {}) {
  return new Promise((resolvePromise, reject) => {
    const proc = spawn(cmd, args, { cwd: root, stdio: "inherit", ...opts });
    proc.on("exit", (code) => (code === 0 ? resolvePromise() : reject(new Error(`Exit ${code}`))));
  });
}

async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return true;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  return false;
}

async function main() {
  const distPath = resolve(root, "dist");
  if (!existsSync(distPath)) {
    console.log("Building project...");
    await run("npm", ["run", "build"]);
  }

  console.log("Starting preview server...");
  const previewProc = spawn("npx", ["vite", "preview", "--port", String(PREVIEW_PORT)], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
  });

  const cleanup = () => {
    try {
      previewProc.kill("SIGTERM");
    } catch (_) {}
  };
  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  const url = `http://localhost:${PREVIEW_PORT}`;
  await new Promise((r) => setTimeout(r, 2000));
  const ready = await waitForServer(url);
  if (!ready) {
    cleanup();
    console.error("Preview server failed to start.");
    process.exit(1);
  }

  console.log("Generating PDF...");
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.default.launch({ headless: true });
  const page = await browser.newPage();

  await page.emulateMediaType("print");
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

  // Force animations to completed state for print
  await page.evaluate(() => {
    const style = document.createElement("style");
    style.textContent = `
      .snap-slide * { animation: none !important; transition: none !important; }
      .snap-slide [style*="opacity"] { opacity: 1 !important; transform: none !important; }
    `;
    document.head.appendChild(style);
  });
  await new Promise((r) => setTimeout(r, 500));

  await page.pdf({
    path: outputPath,
    format: "A4",
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  await browser.close();
  cleanup();
  console.log(`PDF saved to public/deck-ideo-ideis-2026.pdf`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
