import React, { useState } from 'react'
import {
	Container,
	Navbar,
	Nav,
	Row,
	Col,
	Button,
	Card,
	Form
} from 'react-bootstrap'
import {
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
	DownloadIcon,
	SendIcon,
	MenuIcon,
	XIcon
} from 'lucide-react'
import './App.css'

export default function Portfolio() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Container fluid className="px-0">
			{/* Header */}
			<header className="bg-white shadow-sm fixed-top">
				<Navbar expand="md" className="px-3">
					<Container>
						<Navbar.Brand href="#home" className="fw-bold">
							MD ISRAR AHMED
						</Navbar.Brand>
						<Navbar.Toggle
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <XIcon /> : <MenuIcon />}
						</Navbar.Toggle>
						<Navbar.Collapse className="justify-content-end">
							<Nav className="text-center">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#about">About</Nav.Link>
								<Nav.Link href="#skills">Skills</Nav.Link>
								<Nav.Link href="#projects">Projects</Nav.Link>
								<Nav.Link href="#experience">
									Experience
								</Nav.Link>
								<Nav.Link href="#contact">Contact</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>

			<main className="pt-4 mt-5">
				{/* Home Section */}
				<section
					id="home"
					className="min-vh-100 d-flex align-items-center position-relative text-white text-center bg-info"
				>
					<Container>
						<Row>
							<Col>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsI71bMgiWNRJyrOlqCw2o3XETLqd3weD-Q&s"
									alt="Profile"
									className="rounded-circle border border-light mx-auto mb-3"
									style={{ width: '220px', height: '220px' }}
								/>
								<h2 className="display-4 fw-bold">
									MD ISRAR AHMED
								</h2>
								<p className="fs-4 bg-success rounded">
									MERN Stack Developer
								</p>
								<Button
									variant="secondary"
									className="mt-3"
									size="lg"
								>
									<DownloadIcon /> Download Resume
								</Button>
							</Col>
						</Row>
					</Container>
				</section>

				{/* About Section */}
				<section id="about" className="py-5">
					<Container className="text-center">
						<h2 className="display-6 fw-bold mb-4">About Me</h2>
						<p className="mx-auto " style={{ maxWidth: '800px' }}>
							With over 5 years of experience in full-stack
							development, I specialize in building scalable web
							applications using the MERN stack. My mission is to
							create efficient, user-friendly solutions that solve
							real-world problems.
						</p>
					</Container>
				</section>

				{/* Skills Section */}
				<section id="skills" className="py-5 bg-light">
					<Container>
						<h2 className="display-6 fw-bold text-center mb-4">
							Skills
						</h2>
						<Row className="text-center">
							<Col xs={6} md={3} className="mb-4">
								<img
									src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
									alt="MongoDB"
									className="mb-2"
									style={{ width: '50px' }}
								/>
								<h5>MongoDB</h5>
							</Col>
							<Col xs={6} md={3} className="mb-4">
								<img
									src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
									alt="Express"
									className="mb-2"
									style={{ width: '50px' }}
								/>
								<h5>Express</h5>
							</Col>
							<Col xs={6} md={3} className="mb-4">
								<img
									src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
									alt="React"
									className="mb-2"
									style={{ width: '50px' }}
								/>
								<h5>React</h5>
							</Col>
							<Col xs={6} md={3} className="mb-4">
								<img
									src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
									alt="Node.js"
									className="mb-2"
									style={{ width: '50px' }}
								/>
								<h5>Node.js</h5>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Projects Section */}
				<section id="projects" className="py-5">
					<Container>
						<h2 className="display-6 fw-bold text-center mb-4">
							Projects
						</h2>
						<Row className="g-4">
							{[1, 2, 3].map((project) => (
								<Col md={4} key={project}>
									<Card className="shadow-sm">
										<Card.Img
											variant="top"
											src={`https://source.unsplash.com/random/300x200?sig=${project}`}
										/>
										<Card.Body>
											<Card.Title>
												Project {project}
											</Card.Title>
											<Card.Text>
												Project description here.
											</Card.Text>
											<Button
												variant="link"
												className="text-decoration-none"
											>
												Demo
											</Button>
											<Button
												variant="link"
												className="text-decoration-none"
											>
												GitHub
											</Button>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Container>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-5 bg-light">
					<Container>
						<h2 className="display-6 fw-bold text-center mb-4">
							Contact Me
						</h2>
						<Form className="mx-auto" style={{ maxWidth: '500px' }}>
							<Form.Group className="mb-3">
								<Form.Control type="text" placeholder="Name" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Control
									type="email"
									placeholder="Email"
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Control
									as="textarea"
									rows={4}
									placeholder="Message"
								/>
							</Form.Group>
							<Button
								variant="primary"
								type="submit"
								size="lg"
								className="w-100"
							>
								<SendIcon /> Send Message
							</Button>
						</Form>
					</Container>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-dark text-white py-3">
				<Container className="text-center">
					<p className="mb-0">
						&copy; 2024 Md Israr Ahmed. All rights reserved.
					</p>
					<div className="mt-2">
						<a href="#" className="text-white mx-2">
							<GithubIcon />
						</a>
						<a href="#" className="text-white mx-2">
							<LinkedinIcon />
						</a>
						<a href="#" className="text-white mx-2">
							<TwitterIcon />
						</a>
					</div>
				</Container>
			</footer>
		</Container>
	)
}
