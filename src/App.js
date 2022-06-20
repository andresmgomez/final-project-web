import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

import { SignupFormComponent } from './components/forms/SignupForm/SignupForm';
import { LoginFormComponent } from './components/forms/LoginForm/LoginForm';

import { AddRecipePage } from './pages/AddRecipe';
import { DetailRecipePage } from './pages/DetailRecipe';
import { DisplayRecipesPage } from './pages/DisplayRecipes';

import { UserContext } from './context/userContext';

import { app } from './firebase.config.js';
export const auth = getAuth(app);

function App() {
	const [user, setUser] = useState();
	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				<BrowserRouter>
					<Routes>
						<Route path='/signup' element={<SignupFormComponent />} />
						<Route path='/login' element={<LoginFormComponent />} />
						<Route path='/' element={<DisplayRecipesPage />} />
						<Route path='/recipes/:recipeId' element={<DetailRecipePage />} />
						<Route path='/add-recipe' element={<AddRecipePage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
