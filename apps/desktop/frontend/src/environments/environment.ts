// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

export const environment = {
  production: false,
  // Set a local .osr path here to have it loaded automatically when opening the analyzer
  debugAnalyzer: undefined as { replayPath: string } | undefined,
};
