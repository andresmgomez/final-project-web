import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipePage } from './pages/AddRecipe';
import { DisplaRecipesPage } from './pages/DisplayRecipes';
// import { DetailRecipePage } from './pages/DetailRecipe';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<DisplaRecipesPage />} />
					<Route path='/add-recipe' element={<AddRecipePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
