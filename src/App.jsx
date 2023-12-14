import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PalleteSchemes from './screen/PalleteSchemes';
import Home from './screen/Home';

function App() {
	return (
		<BrowserRouter>
			<div className='app flex flex-col items-center pb-20'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/generate-pallete' element={<PalleteSchemes />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
