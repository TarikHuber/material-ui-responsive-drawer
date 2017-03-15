export const RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN = 'RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN';
export const RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK = 'RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK';
export const RESPONSIVE_DRAWER_SET_DRAWER_OPEN = 'RESPONSIVE_DRAWER_SET_DRAWER_OPEN';
export const RESPONSIVE_DRAWER_SET_RESPONSIVE = 'RESPONSIVE_DRAWER_SET_RESPONSIVE';

export function toggleDrawerOpen() {
  return {
    type: RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN,
  };
}

export function toggleDrawerDock() {
  return {
    type: RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK,
  };
}

export function setDrawerOpen(open) {
  return {
    type: RESPONSIVE_DRAWER_SET_DRAWER_OPEN,
    open,
  };
}


export function setResponsive(responsive) {
  return {
    type: RESPONSIVE_DRAWER_SET_RESPONSIVE,
    responsive,
  };
}
