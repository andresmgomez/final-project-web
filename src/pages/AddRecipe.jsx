import { BreadcrumbComponent } from '../components/common/Breadcrumb/Breadcrumb';
import { FormRecipeComponent } from '../components/forms/FormRecipe/FormRecipe';

export const AddRecipePage = () => {
	return (
		<>
			<BreadcrumbComponent title='Make a new Recipe' task='Add Recipe' />
			<FormRecipeComponent />
		</>
	);
};
