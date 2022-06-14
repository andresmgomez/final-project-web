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
														return (
															<Form.Control
																value={JSON.stringify(ingredient)}
															/>
														);
													})}
												</InputGroup>
											</div>
										</Col>
									</Row>
								</div>
								<div className={classes.recipeInstructions}>
									<h3>Instructions</h3>
									<p className={`${classes.recipeContent}`}>
										{recipe.instructions[0]}
									</p>
									<p className={`${classes.recipeContent}`}>
										{recipe.instructions[1]}
									</p>
									<p className={`${classes.recipeContent}`}>
										{recipe.instructions[2]}
									</p>
									<p className={`${classes.recipeContent}`}>
										{recipe.instructions[3]}
									</p>
									<p className={`${classes.recipeContent}`}>
										{recipe.instructions[4]}
									</p>
									<p className={`${classes.recipeContent}`}>
										{recipe.instructions[5]}
									</p>
									<p className={`${classes.recipeContent}`}>
										{recipe.instructions[6]}
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};
