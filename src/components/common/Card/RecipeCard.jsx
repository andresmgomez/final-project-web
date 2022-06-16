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
							onClick={() => navigate(`/detail-recipe/${recipe.id}`)}
						/>
						<div className={`${classes.singleRecipe}`}>
							<span className={`${classes.recipeCategory}`}>Breakfast</span>
							<h3>Carrot Orange Juice</h3>
							<p className={`${classes.recipeDescription}`}>
								This carrot orange juice has just enough sweetness to give your
								taste buds that awakening, but not so sweet you feel like you’re
								betraying your weight loss regime
							</p>
						</div>
					</Figure>
				</div>
			</Col>
		</Row>
	);
};
