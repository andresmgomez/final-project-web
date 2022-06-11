import { useEffect, useState } from 'react';
import { BreadcrumbComponent } from '../components/common/Breadcrumb/Breadcrumb';
import { SingleRecipeComponent } from '../components/sections/SingleRecipe/SingleRecipe';

export const DetailRecipePage = () => {
	const [showRecipe, setShowRecipe] = useState();
	useEffect(() => {
		fetch('https://final-project-api-hostin-13b05.web.app/recipes/')
			.then(res => res.json())
			.then(data => setShowRecipe(data))
			.catch(console.error);
	}, []);
	return (
		<>
			<BreadcrumbComponent title='Display a Recipe' task='Detail Recipe' />
			<SingleRecipeComponent />
		</>
	);
};
