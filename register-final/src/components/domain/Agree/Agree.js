import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Textarea, Checkbox, Button } from '../../common';
import { AuthContext } from '../../../contexts/AuthProvider';
import { LOREM_IPSUM, TERMS } from '../../../constants';
import './Agree.styles.scss';

function Agree() {
	const { state, dispatch } = AuthContext();
	const [isRequired, setIsRequired] = useState(false);
	const navigater = useNavigate();

	useEffect(() => {
		console.log(state.terms);
	}, [state]);

	/** 체크박스 단일선택 */
	const onChecked = (e) => {
		const { value, checked } = e.target;

		dispatch({
			type: 'CHANGE_CHECKBOX',
			value,
			checked,
		});
	};

	/** 체크박스 전체선택 */
	const onCheckedAll = (e) => {
		const { checked } = e.target;
		dispatch({
			type: 'CHANGE_CHECKBOX_ALL',
			checked,
		});
	};

	const onAgreeResult = useCallback(() => {
		if (!state.terms.termsService || !state.terms.termsPrivacy) {
			return setIsRequired(true);
		}
		setIsRequired(false);
		navigater('/register');
	}, [navigater, state]);

	const onResult = () => {
		dispatch({ type: 'RESET_FORM' });
	};

	return (
		<article>
			<h3 className='agree-title'>약관 동의</h3>
			<div className='block'>
				<Checkbox
					name='all'
					value='all'
					label='전체 동의 동의합니다.'
					onChange={onCheckedAll}
					isChecked={!Object.values(state.terms).includes(false)}
				/>
			</div>
			{TERMS.map((item) => (
				<div className='block' key={item.key}>
					<Checkbox
						name={item.value}
						value={item.value}
						label={item.label}
						onChange={onChecked}
						isChecked={state.terms[item.value]}
					/>
					{item.value === 'termsEmail' ? (
						<p>{LOREM_IPSUM.substring(0, 150)}</p>
					) : (
						<Textarea value={LOREM_IPSUM} isReadOnly />
					)}
				</div>
			))}
			{isRequired && (
				<span className='isRequired'>
					이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.
				</span>
			)}

			<div className='btn-box'>
				<Button text='취소' size='half' onClick={onResult} />
				<Button type='button' text='확인' size='half' onClick={onAgreeResult} />
			</div>
		</article>
	);
}

export default Agree;
