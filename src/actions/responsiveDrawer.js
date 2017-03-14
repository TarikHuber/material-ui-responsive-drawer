export const TOGGLE_DRAWER_OPEN = 'TOGGLE_DRAWER_OPEN';
export const TOGGLE_DRAWER_DOCK = 'TOGGLE_DRAWER_DOCK';
export const SET_DRAWER_OPEN = 'SET_DRAWER_OPEN';
export const SET_RESPONSIVE = 'SET_RESPONSIVE';

export function toggleDrawerOpen() {

  return {
    type: TOGGLE_DRAWER_OPEN,
  };
}

export function toggleDrawerDock() {
  return {
    type: TOGGLE_DRAWER_DOCK,
  };
}

export function setDrawerOpen(open) {
  return {
    type: SET_DRAWER_OPEN,
    open: open,
  };
}


export function setResponsive(responsive) {
  return {
    type: SET_RESPONSIVE,
    responsive: responsive,
  };
}
