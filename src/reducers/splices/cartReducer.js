import { ADD_TO_CART } from '../actions/types';

let initialState = [];

if (typeof window !== 'undefined') {
	let userInfo = localStorage.getItem('userInfo');
	if (userInfo) {
		if (
			localStorage.getItem('cart') &&
			localStorage.getItem('currentUserCart') === JSON.parse(userInfo)['id']
		)
			initialState = JSON.parse(localStorage.getItem('cart'));
	} else {
		localStorage.removeItem('cart');
		localStorage.removeItem('currentUserCart');
		initialState = [];
	}
}

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return action.payload;
		default:
			return state;
	}
};
