export const initialState = {
	termsService: '',
	termsPrivacy: '',
	termsLocation: '',
	termsEmail: '',
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
		default:
			return state;
	}
}

export default InputReducer;
