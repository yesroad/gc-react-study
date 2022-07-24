import './Textarea.styles.scss';

function Textarea({ text, isReadOnly }) {
	return <textarea readOnly={isReadOnly}>{text}</textarea>;
}

export default Textarea;
