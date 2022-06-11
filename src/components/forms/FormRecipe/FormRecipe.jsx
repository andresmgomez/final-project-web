import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import classes from './FormRecipe.module.css';

export const FormRecipeComponent = () => {
	let navigate = useNavigate();

	const [newRecipe, setNewRecipe] = useState({
		name: '',
		category: '',
		description: '',
		picture: '',
		ingredients: [],
		instructions: '',
	});

	const handleCreateRecipe = e => {
		e.preventDefault();
		fetch('https://final-project-api-hostin-13b05.web.app/recipes/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newRecipe),
		}).then(() => navigate('/recipes/detail-recipe'));
	};

	const handleRecipeFields = e => {
		const newRecipeValue =
			e.target.name === 'picture' ? e.target.file : e.target.value;
		setNewRecipe({ ...newRecipe, [e.target.name]: newRecipeValue });
	};

	return (
		<section className={`${classes.formArea}`}>
			<Container>
				<Row>
					<Col lg={8}>
						<Form
							className={`${classes.recipeForm}`}
							onSubmit={handleCreateRecipe}
						>
							<Form.Group className='mb-3'>
								<Form.Label>Recipe Name</Form.Label>
								<Form.Control
									name='name'
									value={newRecipe.name}
									type='text'
									placeholder='Carrot Orange Juice'
									onChange={handleRecipeFields}
									required
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Recipe Category</Form.Label>
								<Form.Control
									name='category'
									value={newRecipe.category}
									type='text'
									placeholder='Breakfast'
									onChange={handleRecipeFields}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Quick Description</Form.Label>
								<Form.Control
									name='description'
									value={newRecipe.description}
									as='textarea'
									placeholder='Write how has this recipe helped you in your daily routine'
									onChange={handleRecipeFields}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Upload a Pic</Form.Label>
								<ul className={`${classes.recipePic}`}>
									<li>
										<img src='https://via.placeholder.com/138x130' />
									</li>
								</ul>
								<Form.Control
									name='picture'
									type='file'
									multiple
									onChange={handleRecipeFields}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Ingredients</Form.Label>
								<Row>
									<Col lg={4}>
										<Form.Group className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Food Item: (carrot, apple, etc)'
												onChange={handleRecipeFields}
											/>
										</Form.Group>
									</Col>
									<Col lg={4}>
										<Form.Group className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Category: (fruits, vegetables, etc)'
												onChange={handleRecipeFields}
											/>
										</Form.Group>
									</Col>
									<Col lg={4}>
										<Form.Group className='mb-3'>
											<Form.Control
												type='text'
												placeholder='Measurement: (ounces, tbsps, etc)'
												onChange={handleRecipeFields}
											/>
										</Form.Group>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Instructions</Form.Label>
								<Form.Control
									as='textarea'
									style={{ height: '200px' }}
									onChange={handleRecipeFields}
								/>
							</Form.Group>
							<Button
								type='submit'
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
