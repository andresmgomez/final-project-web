import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import classes from './AddRecipe.module.css';

export const AddRecipeForm = () => {
	return (
		<section className={`${classes.formArea}`}>
			<Container>
				<Row>
					<Col lg={8}>
						<Form className={`${classes.recipeForm}`}>
							<Form.Group className='mb-3'>
								<Form.Label>Recipe Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Carrot Orange Juice'
									required
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Recipe Category</Form.Label>
								<Form.Control type='text' placeholder='Breakfast' />
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Quick Description</Form.Label>
								<Form.Control
									as='textarea'
									placeholder='Write how has this recipe helped you in your daily routine'
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Upload a Pic</Form.Label>
								<ul className={`${classes.recipePic}`}>
									<li>
										<img src='https://via.placeholder.com/138x130' />
									</li>
								</ul>
								<Form.Control type='file' multiple />
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Ingredients</Form.Label>
								<Row>
									<Col lg={4}>
										<Form.Group className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Grocery Item: (carrot, apple, etc)'
											/>
										</Form.Group>
									</Col>
									<Col lg={4}>
										<Form.Group className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Category: (fruits, vegetables, etc)'
											/>
										</Form.Group>
									</Col>
									<Col lg={4}>
										<Form.Group className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Measurement: (ounces, tbsps, etc)'
											/>
										</Form.Group>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Instructions</Form.Label>
								<Form.Control as='textarea' style={{ height: '200px' }} />
							</Form.Group>
							<Button
								bsPrefix={`btn ${classes.btnAddRecipe}`}
								variant='success'
							>
								Add Recipe
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
