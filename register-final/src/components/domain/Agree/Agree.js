import { Textarea, Checkbox, Button } from '../../common';
import { LOREM_IPSUM } from '../../../const/lorem';
import './Agree.styles.scss';

function Agree() {
	return (
		<article>
			<h3 className='agree-title'>약관 동의</h3>
			<div className='block'>
				<Checkbox name='all' value='all' label='전체 동의 동의합니다.' />
			</div>
			<div className='block'>
				<Checkbox
					name='termsService'
					value='termsService'
					label='이용약관 동의(필수)'
				/>
				<Textarea text={LOREM_IPSUM} isReadOnly />
			</div>
			<div className='block'>
				<Checkbox
					name='termsPrivacy'
					value='termsPrivacy'
					label='개인정보 수집 및 이용 동의(필수)'
				/>
				<Textarea text={LOREM_IPSUM} isReadOnly />
			</div>
			<div className='block'>
				<Checkbox
					name='termsLocation'
					value='termsLocation'
					label='위치기반서비스 이용약관 동의(선택)'
				/>
				<Textarea text={LOREM_IPSUM} isReadOnly />
			</div>
			<div className='block'>
				<Checkbox
					name='termsEmail'
					value='termsEmail'
					label='프로모션 정보 수신 동의(선택)'
				/>
				<p>{LOREM_IPSUM.substring(0, 150)}</p>
			</div>
			<div className='btn-box'>
				<Button text='취소' size='half' />
				<Button text='확인' size='half' />
			</div>
		</article>
	);
}

export default Agree;
