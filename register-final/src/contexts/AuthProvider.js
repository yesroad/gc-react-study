import { createContext, useContext, useReducer } from 'react';

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
};

function authReducer(state, action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				...action.formState,
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
		case 'RESET_FORM':
			return { ...initialState };
		default:
			return state;
	}
}

const AuthReducerContext = createContext({
	state: initialState,
	dispatch: () => {},
});

export function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(authReducer, initialState);
	return (
		<AuthReducerContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthReducerContext.Provider>
	);
}

export const AuthContext = () => {
	return useContext(AuthReducerContext);
};
