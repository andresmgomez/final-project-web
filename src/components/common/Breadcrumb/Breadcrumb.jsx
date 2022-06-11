import { Container, Row, Col } from 'react-bootstrap';
import classes from './Breadcrumb.module.css';

export const BreadcrumbComponent = () => {
	return (
		<section className={`${classes.breadcrumbBanner}`}>
			<Container>
				<Row>
					<Col lg={12}>
						<div className={`${classes.breadcrumbTitle}`}>
							<h1>Make a new Recipe</h1>
							<ul>
								<li>
									<a href='index.html'>Home</a>
								</li>
								<li>Add Recipe</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
