import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Agree, Register } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Agree />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
