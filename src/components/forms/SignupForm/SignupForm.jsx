import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from '../UserForm.module.css';

export const SignupFormComponent = () => {
	return (
		<section className={`${classes.userArea}`}>
			<Container
				bsPrefix={`${classes.containerForm} ${classes.backgroundForm}`}
			>
				<Row>
					<Col>
						<div className={`${classes.wrapperForm}`}>
							<Form className={`${classes.userForm}`}>
								<h1>Make a new Account</h1>
								<Form.Group className='mb-3'>
									<Form.Label>First Name</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='firstname'
										type='text'
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='lastname'
										type='text'
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Username</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='username'
										type='text'
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='email'
										type='text'
									/>
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										bsPrefix={`${classes.userFields}`}
										name='password'
										type='text'
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
