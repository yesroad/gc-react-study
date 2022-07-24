import './Button.styles.scss';

function Button({ text, onClick, type, size }) {
	return (
		<button type={type} onClick={onClick} className={size}>
			{text}
		</button>
	);
}

export default Button;
