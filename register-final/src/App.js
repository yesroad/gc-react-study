import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AgreePage, Register } from './pages';
import './app.css';

function App() {
	return (
		<BrowserRouter>
			<div className='wrap'>
				<Routes>
					<Route path='/' element={<AgreePage />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
