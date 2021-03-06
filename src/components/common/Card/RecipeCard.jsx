import { Col, Figure } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './RecipeCard.module.css';

import recipeImage from '../../../images/background-recipe.jpeg';

export const RecipeCardComponent = ({ recipe }) => {
	let navigate = useNavigate();
	return (
		<Col sm={12} md={6} lg={4}>
			<div className={`${classes.recipeCard}`} key={recipe.name}>
				<Figure className={`${classes.recipeImage}`}>
					<Figure.Image
						width={530}
						height={390}
						src={recipeImage}
						onClick={() => navigate(`/recipes/${recipe._id}`)}
					/>
					<div className={`${classes.singleRecipe}`}>
						<span className={`${classes.recipeCategory}`}>
							{recipe.category || 'Breakfast'}
						</span>
						<h3>{recipe.name}</h3>
						<p className={`${classes.recipeDescription}`}>
							{recipe.description}
						</p>
					</div>
				</Figure>
			</div>
		</Col>
	);
};
