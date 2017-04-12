import{
	RESPONSIVE_DRAWER_SET_DRAWER_OPEN,
	RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN,
	RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK,
	RESPONSIVE_DRAWER_SET_RESPONSIVE
} from '../actions/responsiveDrawer';

const initialState = {
	docked: false,
	responsive: true,
	open: false,
	searching: false,
}

const responsiveDrawer = (state = initialState, action) => {
	switch (action.type) {

		case RESPONSIVE_DRAWER_TOGGLE_DRAWER_OPEN:
		return {
			...state,
			open: !state.open
		};

		case RESPONSIVE_DRAWER_TOGGLE_DRAWER_DOCK:
		return {
			...state,
			docked: !state.docked
		};

		case RESPONSIVE_DRAWER_SET_DRAWER_OPEN:
		return {
			...state,
			open: action.open
		};

		case RESPONSIVE_DRAWER_SET_RESPONSIVE:
		return {
			...state,
			responsive: action.responsive
		};

		default:
		return state;
	}
}

export default responsiveDrawer;
