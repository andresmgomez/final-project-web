import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './Breadcrumb.module.css';

export const BreadcrumbComponent = props => {
	return (
		<section className={`${classes.breadcrumbBanner}`}>
			<Container>
				<Row>
					<Col lg={12}>
						<div className={`${classes.breadcrumbTitle}`}>
							<h1>{props.title}</h1>
							<ul>
								<li>{props.prev}</li>
								<li>
									<Link to='/add-recipe'>{props.next}</Link>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
