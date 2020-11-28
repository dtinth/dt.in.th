declare module '*.vue'

declare var appInsights: {
  trackEvent(options: { name: string; properties: any }): void
}
