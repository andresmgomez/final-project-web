import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import classes from './FormRecipe.module.css';

export const FormRecipeComponent = () => {
	let navigate = useNavigate();

	const emptyIngredients = {
		foodName: '',
		foodMeasurement: '',
	};

	const emptyInstructions = {
		foodInstruction: '',
	};

	const [newRecipe, setNewRecipe] = useState({
		name: '',
		category: '',
		description: '',
		picture: '',
		// ingredients: [],
		// instructions: [],
	});

	const [previewPicture, setPreviewPicture] = useState(null);
	const [ingredients, setIngredients] = useState([emptyIngredients]);
	const [instructions, setInstructions] = useState([emptyInstructions]);

	const handleCreateRecipe = e => {
		e.preventDefault();
		let _newRecipe = newRecipe;
		_newRecipe.ingredients = ingredients;
		_newRecipe.instructions = instructions;
		fetch('https://final-project-api-hostin-13b05.web.app/recipes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(_newRecipe),
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

	const handleIngredientFields = (e, name, index) => {
		let ingredientsList = ingredients;
		ingredientsList[index][name] = e.target.value;
		setIngredients(ingredientsList);
	};

	const handleAddIngredient = () => {
		setIngredients([...ingredients, emptyIngredients]);
	};

	const handleRemoveIngredient = index => {
		const currentIngredients = [...ingredients];
		currentIngredients.splice(index, 1);
		setIngredients(currentIngredients);
	};

	const handleInstructionFields = e => {
		let instructionsList = instructions;
		instructionsList = e.target.value;
		console.log(instructionsList);

		if (e.onKeyUp === 13) {
			const newInstruction = instructionsList.split(',');
			instructionsList.push(newInstruction);
		}

		// const recipeIngredients = emptyInstructions({
		// 	foodInstruction: instructionsList,
		// });

		setInstructions({
			...instructions,
			emptyInstructions,
		});
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
								{ingredients.map((ingredient, index) => {
									const _index = index;
									return (
										<Row key={index}>
											<Col lg={4}>
												<Form.Group className='mb-3'>
													<Form.Control
														name='foodName'
														type='text'
														placeholder='Food Item: (carrot, apple, etc)'
														onChange={e =>
															handleIngredientFields(e, 'foodName', _index)
														}
													/>
												</Form.Group>
											</Col>
											<Col lg={4}>
												<Form.Group className='mb-3'>
													<Form.Control
														name='foodMeasurement'
														type='text'
														placeholder='Measurement: (ounces, tbsps, etc)'
														onChange={e =>
															handleIngredientFields(
																e,
																'foodMeasurement',
																index
															)
														}
													/>
												</Form.Group>
											</Col>
											<Col lg={2}>
												<Form.Group className='mb-3'>
													<Button
														bsPrefix={`${classes.btnAddIngredient}`}
														onClick={handleAddIngredient}
													>
														Add
													</Button>
												</Form.Group>
											</Col>
											<Col lg={2}>
												<Form.Group clasName='mb-3'>
													<Button
														bsPrefix={`${classes.btnRemoveIngredient}`}
														onClick={() => handleRemoveIngredient(index)}
													>
														Remove
													</Button>
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
									onChange={e => handleInstructionFields(e)}
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
