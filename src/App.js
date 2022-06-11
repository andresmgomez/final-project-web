import { BreadcrumbComponent } from './components/common/Breadcrumb/Breadcrumb';
import { AddRecipeForm } from './components/recipes/recipe/AddRecipe';

function App() {
	return (
		<>
			<header>
				<BreadcrumbComponent />
			</header>
			<main>
				<AddRecipeForm />
			</main>
		</>
	);
}

export default App;
