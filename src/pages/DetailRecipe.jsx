// import { useEffect, useState } from 'react';
import { BreadcrumbComponent } from '../components/common/Breadcrumb/Breadcrumb';
import { SingleRecipeComponent } from '../components/sections/SingleRecipe/SingleRecipe';

export const DetailRecipePage = () => {
	return (
		<>
			<BreadcrumbComponent title='Display a Recipe' task='Detail Recipe' />
			<SingleRecipeComponent />
		</>
	);
};
