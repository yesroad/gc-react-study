import './Input.styles.scss';

function Field({ title }) {
	return (
		<div className='field-box'>
			<strong>{title}</strong>
			{children}
		</div>
	);
}

export default Field;
