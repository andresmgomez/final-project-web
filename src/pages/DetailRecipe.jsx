import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadcrumbComponent } from '../components/common/Breadcrumb/Breadcrumb';
import { SingleRecipeComponent } from '../components/sections/SingleRecipe/SingleRecipe';

export const DetailRecipePage = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState();

	useEffect(() => {
		fetch(`https://final-project-api-hostin-13b05.web.app/recipes/${recipeId}`)
			.then(res => res.json())
			.then(data => setRecipe(data))
			.then(data => console.log(data))
			.catch(err => console.error(err));
	}, [recipeId]);

	return (
		<>
			<BreadcrumbComponent
				title='Details of Recipe'
				current='Recipe Info'
				link='/'
				page='Recipes Page'
			/>
			{!recipe ? (
				<h3 className='text-center mt-3'>Please Wait...</h3>
			) : (
				<SingleRecipeComponent recipe={recipe} recipeId={recipeId} />
			)}
		</>
	);
};
