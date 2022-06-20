import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { auth } from '../../../App.js';
import { getApps, initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../../../firebase.config.js';

import classes from '../UserForm.module.css';

export const SignupFormComponent = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [user, setUser] = useState({
		name: '',
		username: '',
		email,
		password,
	});

	const createGuestUser = () => {
		fetch('https://final-project-api-hostin-13b05.web.app/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.catch(err => console.log(err));
	};

	const handleSignupUser = e => {
		e.preventDefault();

		if (getApps().length === 0) {
			initializeApp(firebaseConfig);
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then(response => {
				setUser(response.user);
				return createGuestUser();
			})
			.then(() => navigate('/login'))
			.catch(err => {
				alert(err.message);
			});
	};

	const handleSignupFields = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
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
								onSubmit={handleSignupUser}
							>
								<h1>Make a new Account</h1>
								<Form.Group className='mb-3'>
									<Form.Label>Name</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='name'
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
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='password'
										type='password'
										onChange={e => setPassword(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Button type='submit' bsPrefix={`${classes.userBtn}`}>
										Sign Up
									</Button>
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
