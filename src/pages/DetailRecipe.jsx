import { useEffect, useState } from 'react';
import { BreadcrumbComponent } from '../components/common/Breadcrumb/Breadcrumb';
import { SingleRecipeComponent } from '../components/sections/SingleRecipe/SingleRecipe';

export const DetailRecipePage = () => {
	const [recipes, setRecipes] = useState();

	useEffect(() => {
		fetch('https://final-project-api-hostin-13b05.web.app/recipes')
			.then(res => res.json())
			.then(data => setRecipes(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<>
			<BreadcrumbComponent title='Display a Recipe' task='Detail Recipe' />
			{!recipes ? (
				<h3 className='text-center mt-3'>Please Wait...</h3>
			) : (
				recipes?.map(recipe => {
					return <SingleRecipeComponent recipe={recipe} />;
				})
			)}
		</>
	);
};
