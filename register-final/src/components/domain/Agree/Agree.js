import { useReducer, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Textarea, Checkbox, Button } from '../../common';
import InputReducer, { initialState } from '../../../reducer/InputReducer';
import { LOREM_IPSUM, TERMS } from '../../../const/lorem';
import './Agree.styles.scss';

function Agree() {
	const [state, dispatch] = useReducer(InputReducer, initialState);
	const [isCheckedArray, setIsCheckedArray] = useState([]);
	const [isRequired, setIsRequired] = useState(false);
	const navigater = useNavigate();

	/** 체크박스 단일선택 */
	const onChecked = useCallback(
		(e, idx) => {
			const { value, checked } = e.target;
			if (checked) {
				setIsCheckedArray([...isCheckedArray, idx]);
			} else {
				setIsCheckedArray((prev) => prev.filter((item) => item !== idx));
			}

			dispatch({
				type: 'CHANGE_CHECKBOX',
				value,
				checked,
			});
		},
		[isCheckedArray],
	);

	/** 체크박스 전체선택 */
	const onCheckedAll = (e) => {
		const { checked } = e.target;
		if (checked) {
			setIsCheckedArray(TERMS.map((item) => item.key));
		} else {
			setIsCheckedArray([]);
		}

		dispatch({
			type: 'CHANGE_CHECKBOX_ALL',
			checked,
		});
	};

	const onAgreeResult = useCallback(() => {
		if (!state.termsService || !state.termsPrivacy) {
			return setIsRequired(true);
		}
		setIsRequired(false);
		navigater('/register');
	}, [navigater, state]);

	return (
		<article>
			<h3 className='agree-title'>약관 동의</h3>
			<div className='block'>
				<Checkbox
					name='all'
					value='all'
					label='전체 동의 동의합니다.'
					onChange={onCheckedAll}
					isChecked={isCheckedArray.length >= TERMS.length}
				/>
			</div>
			{TERMS.map((item) => (
				<div className='block' key={item.key}>
					<Checkbox
						name={item.value}
						value={item.value}
						label={item.label}
						onChange={(e) => onChecked(e, item.key)}
						isChecked={isCheckedArray.includes(item.key)}
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
				<Button text='취소' size='half' />
				<Button type='button' text='확인' size='half' onClick={onAgreeResult} />
			</div>
		</article>
	);
}

export default Agree;
