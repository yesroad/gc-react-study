import './Field.styles.scss';

function Field({ children, title, isRequired, requiredMessage }) {
	return (
		<div className='field-box'>
			<strong className='title'>{title}</strong>
			{children}
			{isRequired && <span className='required'>{requiredMessage}</span>}
		</div>
	);
}

export default Field;
