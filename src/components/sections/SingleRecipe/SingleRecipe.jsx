import { useEffect, useState } from 'react';
import { Container, InputGroup, Form, Row, Col } from 'react-bootstrap';
import classes from './SingleRecipe.module.css';

export const SingleRecipeComponent = () => {
	const [recipes, setRecipes] = useState();

	useEffect(() => {
		fetch('https://final-project-api-hostin-13b05.web.app/recipes')
			.then(res => res.json())
			.then(data => setRecipes(data))
			.catch(err => console.error(err));
	}, []);
	return (
		<>
			{!recipes ? (
				<h3 className='text-center mt-3'>Please Wait...</h3>
			) : (
				recipes?.map(recipe => {
					return (
						<section className={`${classes.recipeArea}`}>
							<Container>
								<Row>
									<Col lg={8}>
										<div className={`${classes.singleRecipe}`} key={recipe._id}>
											<div className={`${classes.recipeCategory}`}>
												Breakfast
											</div>
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
														<div
															className={`${classes.cardIngredients} text-center`}
														>
															<h3 className={`${classes.cardTitle}`}>
																Ingredients
															</h3>
															<InputGroup
																bsPrefix={`${classes.cardCheckbox}`}
																className='mb-3'
															>
																<Form.Control value={recipe.ingredients[0]} />
																<Form.Control value={recipe.ingredients[1]} />
																<Form.Control value={recipe.ingredients[2]} />
																<Form.Control value={recipe.ingredients[3]} />
																<Form.Control value={recipe.ingredients[4]} />
																<Form.Control value={recipe.ingredients[5]} />
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
											</div>
										</div>
									</Col>
								</Row>
							</Container>
						</section>
					);
				})
			)}
		</>
	);
};
