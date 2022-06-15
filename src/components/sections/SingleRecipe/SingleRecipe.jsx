import { Container, InputGroup, Form, Row, Col } from 'react-bootstrap';
import classes from './SingleRecipe.module.css';

export const SingleRecipeComponent = ({ recipe }) => {
	return (
		<>
			<section className={`${classes.recipeArea}`}>
				<Container>
					<Row>
						<Col lg={8}>
							<div className={`${classes.singleRecipe}`} key={recipe._id}>
								<div className={`${classes.recipeCategory}`}>Breakfast</div>
								<h2 className={`${classes.recipeName}`}>{recipe.name}</h2>
								<div className={`${classes.recipePicture}`}>
									<img
										src={recipe.picture}
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
														const foodName = JSON.stringify(
															ingredient['foodName']
														);
														const foodMeasure = JSON.stringify(
															ingredient['foodMeasurement']
														);
														recipeIngredients.push(foodName, ' ', foodMeasure);
														// const { foodName, foodMeasurement } =
														// 	recipe.ingredients[index];
														// const recipeIngredient = {
														// 	foodName,
														// 	foodMeasurement,
														// };

														return <Form.Control value={recipeIngredients} />;
													})}
												</InputGroup>
											</div>
										</Col>
									</Row>
								</div>
								<div className={classes.recipeInstructions}>
									<h3>Instructions</h3>
									{recipe.instructions.map(instruction => {
										const inst = JSON.stringify(instruction['foodInstruction']);
										return (
											<div
												className={`${classes.recipeContent}`}
												key={instruction}
											>
												<p>{inst}</p>
											</div>
										);
									})}
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
