import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import classes from '../UserForm.module.css';

export const LoginFormComponent = () => {
	return (
		<section className={`${classes.userArea}`}>
			<Container
				bsPrefix={`${classes.containerForm} ${classes.backgroundForm}`}
			>
				<Row>
					<Col>
						<div className={`${classes.wrapperForm}`}>
							<Form className={`${classes.userForm}`}>
								<h1>Login</h1>
								<Form.Group className='mb-3'>
									<span>
										<FontAwesomeIcon
											icon={faUserAlt}
											className={`${classes.userIcons}`}
										/>
									</span>
									<Form.Label>Username</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='username'
										type='text'
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
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Button bsPrefix={`${classes.userBtn}`}>Login</Button>
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
