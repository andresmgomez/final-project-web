import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipePage } from './pages/AddRecipe';
import { DetailRecipePage } from './pages/DetailRecipe';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<DetailRecipePage />} />
					<Route path='/add-recipe' element={<AddRecipePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
