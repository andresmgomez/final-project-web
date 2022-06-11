import { Container, InputGroup, Form, Row, Col } from 'react-bootstrap';
import classes from './SingleRecipe.module.css';

export const SingleRecipeComponent = () => {
	return (
		<section className={`${classes.recipeArea}`}>
			<Container>
				<Row>
					<Col lg={8}>
						<div className={`${classes.singleRecipe}`}>
							<div className={`${classes.recipeCategory}`}>Breakfast</div>
							<h2 className={`${classes.recipeName}`}>
								Orange Carrot Apple Juice
							</h2>
							<div className={`${classes.recipePicture}`}>
								<img
									src='https://via.placeholder.com/870x494'
									alt='How the recipe looks like after it has been prepared'
								/>
							</div>
							<p className={`${classes.recipeDescription}`}>
								The combination of taste and aroma the ingredients in this
								all-purpose carrot juice bring make it an all round
								crowd-pleaser.
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
												<Form.Control value='7 oz carrot' />
												<Form.Control value='7 oz apple' />
												<Form.Control value='1 oz celery' />
												<Form.Control value='0.25 oz ginger' />
												<Form.Control value='2 tbsp honey' />
												<Form.Control value='10.4 oz orange juice' />
											</InputGroup>
										</div>
									</Col>
								</Row>
							</div>
							<div className={classes.recipeInstructions}>
								<h3>Instructions</h3>
								<p className={`${classes.recipeContent}`}>
									1. Wash everything thoroughly with clean water.
								</p>
								<p className={`${classes.recipeContent}`}>
									2. Peel and cut the carrots into quarters, vertically.
								</p>
								<p className={`${classes.recipeContent}`}>
									3. Peel the apple and slice them into chunks.
								</p>
								<p className={`${classes.recipeContent}`}>
									4. Chop the celery ribs into 3 equal parts.
								</p>
								<p className={`${classes.recipeContent}`}>
									5. Scrape off the skin of the ginger.
								</p>
								<p className={`${classes.recipeContent}`}>
									6. Stir to mix the juice up.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
