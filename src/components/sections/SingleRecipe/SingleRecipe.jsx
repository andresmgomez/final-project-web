import { Container, InputGroup, Form, Row, Col } from 'react-bootstrap';
import classes from './SingleRecipe.module.css';

export const SingleRecipeComponent = ({ recipe, recipeId }) => {
	return (
		<>
			<section className={`${classes.recipeArea}`}>
				<Container>
					<Row key={recipeId}>
						<Col lg={8}>
							<div className={`${classes.singleRecipe}`} key={recipe._id}>
								<div className={`${classes.recipeCategory}`}>Breakfast</div>
								<h2 className={`${classes.recipeName}`}>{recipe.name}</h2>
								<div className={`${classes.recipePicture}`}>
									<img
										src='https://via.placeholder.com/530x390'
										alt='How the recipe looks like after it has been prepared'
									/>
								</div>
								<p className={`${classes.recipeDescription}`}>
									{recipe.description}
								</p>
								<div className={`${classes.recipeIngredients}`}>
									<Row>
										<Col sm={12} lg={12}>
											<div className={`${classes.cardIngredients} text-center`}>
												<h3 className={`${classes.cardTitle}`}>Ingredients</h3>
												<InputGroup
													bsPrefix={`${classes.cardCheckbox}`}
													className='mb-3'
												>
													{recipe.ingredients.map(ingredient => {
														let recipeIngredients = [];
														recipeIngredients.push(
															ingredient['foodName'],
															' ',
															ingredient['foodMeasurement']
														);

														return <Form.Control value={recipeIngredients} />;
													})}
												</InputGroup>
											</div>
										</Col>
									</Row>
								</div>
								<div className={classes.recipeInstructions}>
									<h3>Instructions</h3>
									<ol className={`${classes.recipeContent}`}>
										{recipe.instructions.map((instruction, index) => {
											return <li key={index}>{instruction}</li>;
										})}
									</ol>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
