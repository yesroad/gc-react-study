import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AgreePage, RegisterPage } from './pages';
import { AuthProvider } from './contexts/AuthProvider';
import './app.css';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<div className='wrap'>
					<Routes>
						<Route path='/' element={<AgreePage />} />
						<Route path='/register' element={<RegisterPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
