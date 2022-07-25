import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AgreePage, RegisterPage } from './pages';
import './app.css';

function App() {
	return (
		<BrowserRouter>
			<div className='wrap'>
				<Routes>
					<Route path='/' element={<AgreePage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
