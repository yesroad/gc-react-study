import './Button.styles.scss';

function Button({ text, onClick, type = 'text' }) {
	return (
		<button type={type} onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
