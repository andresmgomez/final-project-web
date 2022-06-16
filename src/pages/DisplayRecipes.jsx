import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { BreadcrumbComponent } from '../components/common/Breadcrumb/Breadcrumb';
import { RecipeCardComponent } from '../components/common/Card/RecipeCard';

export const DisplayRecipesPage = () => {
	const [recipes, setRecipes] = useState();

	useEffect(() => {
		fetch('https://final-project-api-hostin-13b05.web.app/recipes')
			.then(res => res.json())
			.then(data => setRecipes(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<>
			<BreadcrumbComponent
				title='List of Recipes'
				current='Display Recipes'
				link='/add-recipe'
				page='Add Recipe'
			/>
			<section>
				<Container>
					<Row>
						<Col>
							{!recipes ? (
								<h3 className='text-center mt-3'>Please Wait...</h3>
							) : (
								recipes?.map(recipe => {
									return <RecipeCardComponent recipe={recipe} />;
								})
							)}
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
