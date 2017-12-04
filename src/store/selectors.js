export const DEFAULT_BREAK_POINT = 'medium'

export default function isResponsiveAndOverBreakPoint (browser, responsiveDrawer, breakPoint) {
  return browser.greaterThan[breakPoint !== undefined ? breakPoint : DEFAULT_BREAK_POINT] && responsiveDrawer.responsive
}
