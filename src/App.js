import { BreadcrumbComponent } from './components/common/Breadcrumb/Breadcrumb';
import { AddRecipeForm } from './components/recipes/recipe/AddRecipe';
// import { SingleRecipe } from './components/recipes/recipe/SingleRecipe';

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
