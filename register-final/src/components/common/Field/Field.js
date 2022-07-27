import './Field.styles.scss';

function Field({ children, title, isError, message }) {
	return (
		<div className='field-box'>
			<strong className='title'>{title}</strong>
			{children}
			{isError && <span className='required'>{message}</span>}
		</div>
	);
}

export default Field;
