import * as types from './types'

export function toggleDrawerOpen () {
  return {
    type: types.RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN
  }
}

export function toggleDrawerDock () {
  return {
    type: types.RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK
  }
}

export function setDrawerOpen (open) {
  return {
    type: types.RESPONSIVE_DRAWER_SET_DRAWER_OPEN,
    open
  }
}

export function setResponsive (responsive) {
  return {
    type: types.RESPONSIVE_DRAWER_SET_RESPONSIVE,
    responsive
  }
}
