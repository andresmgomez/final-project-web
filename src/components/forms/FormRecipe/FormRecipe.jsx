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
		// ingredients,
		instructions: [],
	});

	const [previewPicture, setPreviewPicture] = useState(null);
	const [ingredients, setIngredients] = useState([
		{
			foodName: '',
			foodMeasurement: '',
		},
	]);

	const handleCreateRecipe = e => {
		e.preventDefault();
		fetch('https://final-project-api-hostin-13b05.web.app/recipes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newRecipe),
		})
			.then(res => res.json())
			.then(res => console.log(res))
			.then(() => navigate('/'));
	};

	const handlePictureField = e => {
		if (e.target.files[0]) {
			const readRawPicture = new FileReader();
			readRawPicture.addEventListener('load', () => {
				setPreviewPicture(readRawPicture.result);
			});
			readRawPicture.readAsDataURL(e.target.files[0]);
		}
	};

	const handleRecipeFields = e => {
		const newRecipeValue =
			e.target.name === 'picture' ? e.target.file : e.target.value;
		setNewRecipe({
			...newRecipe,
			[e.target.name]: newRecipeValue,
			ingredients,
		});
	};

	const handleIngredientFields = (event, index) => {
		const { name, value } = event.target;
		const ingredientsList = [...ingredients];
		ingredientsList[index][name] = value;
		setIngredients(ingredientsList);
	};

	const handleAddIngredient = e => {
		setIngredients([...ingredients, { [e.target.name]: e.target.value }]);
		console.log(ingredients);
	};

	const handleRemoveIngredient = index => {
		const currentIngredients = [...ingredients];
		currentIngredients.splice(index, 1);
		setIngredients(currentIngredients);
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
									type='text'
									placeholder='Carrot Orange Juice'
									value={newRecipe.name}
									onChange={handleRecipeFields}
									required
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Recipe Category</Form.Label>
								<Form.Control
									name='category'
									type='text'
									placeholder='Breakfast'
									value={newRecipe.category}
									onChange={handleRecipeFields}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Quick Description</Form.Label>
								<Form.Control
									name='description'
									as='textarea'
									placeholder='Write how has this recipe helped you in your daily routine'
									value={newRecipe.description}
									onChange={handleRecipeFields}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Upload a Pic</Form.Label>
								<ul className={`${classes.recipePic}`}>
									<li>
										<img src={previewPicture} />
									</li>
								</ul>
								<Form.Control
									name='picture'
									type='file'
									value={newRecipe.picture}
									onChange={handlePictureField}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Ingredients</Form.Label>
								{ingredients.map((singleIngredient, index) => {
									return (
										<Row key={index}>
											<Col lg={4}>
												<Form.Group className='mb-3'>
													<Form.Control
														name='foodName'
														type='text'
														placeholder='Food Item: (carrot, apple, etc)'
														onChange={handleIngredientFields}
													/>
												</Form.Group>
											</Col>
											{/* <Col lg={4}>
												<Form.Group className='mb-3'>
													<Form.Control
														type='text'
														placeholder='Category: (fruits, vegetables, etc)'
														onChange={handleRecipeFields}
													/>
												</Form.Group>
											</Col> */}
											<Col lg={4}>
												<Form.Group className='mb-3'>
													<Form.Control
														name='foodMeasurement'
														type='text'
														placeholder='Measurement: (ounces, tbsps, etc)'
														onChange={handleIngredientFields}
													/>
												</Form.Group>
											</Col>
											<Col lg={2}>
												<Form.Group className='mb-3'>
													{ingredients.length >= 1 && (
														<Button
															bsPrefix={`${classes.btnAddIngredient}`}
															onClick={handleAddIngredient}
														>
															Add
														</Button>
													)}
												</Form.Group>
											</Col>
											<Col lg={2}>
												<Form.Group clasName='mb-3'>
													{ingredients.length - 1 === index && (
														<Button
															bsPrefix={`${classes.btnRemoveIngredient}`}
															onClick={() => handleRemoveIngredient(index)}
														>
															Remove
														</Button>
													)}
												</Form.Group>
											</Col>
										</Row>
									);
								})}
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Instructions</Form.Label>
								<Form.Control
									as='textarea'
									style={{ height: '200px' }}
									value={newRecipe.instructions[0]}
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
