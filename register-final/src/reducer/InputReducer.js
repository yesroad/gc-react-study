export const initialState = {
	terms: {
		termsService: false,
		termsPrivacy: false,
		termsLocation: false,
		termsEmail: false,
	},
	id: '',
	password: '',
	passwordConfirm: '',
	name: '',
	birthDay: '',
	phone: '',
	gender: '',
	email: '',
	authNo: '',
};

function InputReducer(state, action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				[action.name]: action.value,
			};
		case 'CHANGE_CHECKBOX':
			return {
				...state,
				terms: {
					...state.terms,
					[action.value]: action.checked,
				},
			};
		case 'CHANGE_CHECKBOX_ALL':
			return {
				...state,
				terms: {
					termsService: action.checked,
					termsPrivacy: action.checked,
					termsLocation: action.checked,
					termsEmail: action.checked,
				},
			};
		default:
			return state;
	}
}

export default InputReducer;
