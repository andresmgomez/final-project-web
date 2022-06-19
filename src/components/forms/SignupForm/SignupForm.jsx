import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../App';
import classes from '../UserForm.module.css';

export const SignupFormComponent = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		username: '',
	});

	const createUserWithFirebase = async ({ email, password }) => {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return response.user;
	};

	const handleSignupFields = e => {
		setUser({
			[e.target.name]: e.target.value,
		});
	};

	const handleCreateUser = async (e, { email, password }) => {
		e.preventDefault();

		fetch('https://final-project-api-hostin-13b05.web.app/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...user, email, password }),
		})
			.then(res => res.json())
			// .then(user => createUserWithFirebase(user))
			.then(data => {
				if (createUserWithFirebase) {
					setUser(user, data);
				}
			})
			.then(() => navigate('/login'))
			.catch(err => console.log(err));
	};

	return (
		<section className={`${classes.userArea}`}>
			<Container
				bsPrefix={`${classes.containerForm} ${classes.backgroundForm}`}
			>
				<Row>
					<Col>
						<div className={`${classes.wrapperForm}`}>
							<Form
								className={`${classes.userForm}`}
								onSubmit={handleCreateUser}
							>
								<h1>Make a new Account</h1>
								<Form.Group className='mb-3'>
									<Form.Label>First Name</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='firstname'
										type='text'
										onChange={handleSignupFields}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='lastname'
										type='text'
										onChange={handleSignupFields}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Username</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='username'
										type='text'
										onChange={handleSignupFields}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='email'
										type='text'
										onChange={handleSignupFields}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='password'
										type='text'
										onChange={handleSignupFields}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Button bsPrefix={`${classes.userBtn}`}>Sign Up</Button>
								</Form.Group>
								<Form.Group className='mb-3'>
									<div className={`text-center ${classes.userLinks}`}>
										<Link to='/login'>Let's login to see recipes!</Link>
									</div>
								</Form.Group>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
