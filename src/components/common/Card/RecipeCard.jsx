import { Row, Col, Figure } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './RecipeCard.module.css';

export const RecipeCardComponent = ({ recipe }) => {
	let navigate = useNavigate();
	return (
		<Row key={recipe.name}>
			<Col sm={12} md={6} lg={4}>
				<div className={`${classes.recipeCard}`}>
					<Figure className={`${classes.recipeImage}`}>
						<Figure.Image
							width={530}
							height={390}
							src='https://via.placeholder.com/530x390'
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
		</Row>
	);
};
