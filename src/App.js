import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipePage } from './pages/AddRecipe';
import { DetailRecipePage } from './pages/DetailRecipe';
import { DisplayRecipesPage } from './pages/DisplayRecipes';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<DisplayRecipesPage />} />
					<Route path='/recipes/:recipeId' element={<DetailRecipePage />} />
					<Route path='/add-recipe' element={<AddRecipePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
