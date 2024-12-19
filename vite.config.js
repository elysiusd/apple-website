import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-n2y",
    project: "javascript-react",
    release: {
      name: 'your-project-name@1.0.0',        // Replace with your project name and version
    },
    options: {
      telemetry: false, // Disable telemetry
    },
    logLevel: 'warn', 
  }), sentryVitePlugin({
    org: "jsm-n2y",
    project: "javascript-react",
    release: {
      name: 'your-project-name@1.0.0',        // Replace with your project name and version
    },
    options: {
      telemetry: false, // Disable telemetry
    },
    logLevel: 'warn', 

  })],

  build: {
    sourcemap: true
  }
})