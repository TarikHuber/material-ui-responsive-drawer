export const DEFAULT_BREACK_POINT = 'medium';

export default function isResponsiveAndOverBreackPoint(browser, responsiveDrawer, breackPoint){
  return browser.greaterThan[breackPoint!==undefined?breackPoint:DEFAULT_BREACK_POINT] && responsiveDrawer.responsive;
}
