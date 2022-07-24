import './Textarea.styles.scss';

function Textarea({ value, isReadOnly }) {
	return <textarea value={value} readOnly={isReadOnly}></textarea>;
}

export default Textarea;
