import './Field.styles.scss';

function Field({ children, title, isError, message, choice }) {
	return (
		<div className='field-box'>
			<strong className='title'>{title} {choice && <span className="choice">(선택)</span>}</strong>
			{children}
			{isError && <span className='required'>{message}</span>}
		</div>
	);
}

export default Field;
