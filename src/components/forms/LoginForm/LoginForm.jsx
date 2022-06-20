import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { auth } from '../../../App.js';
import { getApps, initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../../../firebase.config.js';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import classes from '../UserForm.module.css';

export const LoginFormComponent = () => {
	let navigate = useNavigate();
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const [user, setUser] = useState({
		email,
		password,
	});

	const handleSigninUser = e => {
		e.preventDefault();

		if (getApps().length === 0) {
			initializeApp(firebaseConfig);
		}

		signInWithEmailAndPassword(auth, email, password)
			.then(response => {
				setUser(response.user);
				console.log(user.email, user.password);
			})
			.then(() => navigate('/'))
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
								onSubmit={handleSigninUser}
							>
								<h1>Login</h1>
								<Form.Group className='mb-3'>
									<span>
										<FontAwesomeIcon
											icon={faUserAlt}
											className={`${classes.userIcons}`}
										/>
									</span>
									<Form.Label>Email</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='email'
										type='email'
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<span>
										<FontAwesomeIcon
											icon={faLock}
											className={`${classes.userIcons}`}
										/>
									</span>
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
										Login
									</Button>
								</Form.Group>
								<Form.Group className='mb-3'>
									<div className={`text-center ${classes.userLinks}`}>
										<Link to='/signup'>Ready to make an account?</Link>
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
