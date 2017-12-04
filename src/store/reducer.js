import * as types from './types'

const initialState = {
	docked: false,
	responsive: true,
	open: false,
	searching: false
}

const responsiveDrawer = (state = initialState, action) => {
	switch (action.type) {
		case types.RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN:
			return {
				...state,
				open: !state.open
			}

		case types.RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK:
			return {
				...state,
				docked: !state.docked
			}

		case types.RESPONSIVE_DRAWER_SET_DRAWER_OPEN:
			return {
				...state,
				open: action.open
			}

		case types.RESPONSIVE_DRAWER_SET_RESPONSIVE:
			return {
				...state,
				responsive: action.responsive
			}

		default:
			return state
	}
}

export default responsiveDrawer
