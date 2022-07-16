import { Link } from 'react-router-dom';

function Home() {
	const isLogin = localStorage.getItem('isLogin') || null;
	const auth = JSON.parse(localStorage.getItem('auth'));
	return (
		<>
			<h1>메인 페이지</h1>
			{isLogin ? (
				<div>
					<h3>로그인 완료</h3>
					<strong>아이디 : {auth.id}</strong>
					<strong>비밀번호 : {auth.password} </strong>
				</div>
			) : (
				<ul>
					<li>
						<Link to='/register'>회원가입</Link>
					</li>
					<li>
						<Link to='/login'>로그인</Link>
					</li>
				</ul>
			)}
		</>
	);
}

export default Home;
