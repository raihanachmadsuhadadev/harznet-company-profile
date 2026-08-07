import { defineConfig, devices } from "@playwright/test";

const isCI = Boolean(process.env.CI);
const e2eHost = "127.0.0.1";
const e2ePort = 3100;
const e2eBaseUrl = `http://${e2eHost}:${e2ePort}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI ? [["line"], ["html", { open: "never" }]] : "list",
  outputDir: "test-results",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    baseURL: e2eBaseUrl,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "pnpm run build && pnpm exec next start -H 127.0.0.1 -p 3100",
    url: e2eBaseUrl,
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
