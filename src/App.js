import logo from "./trydo-logo.PNG";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import About from "./components/about";
import Aboutcontent from "./components/about-content";
import AboutontentSection from "./components/about-content2";

function App() {
	return (
		<div className='App'>
			<Navbar expand='lg'>
				<Navbar.Brand>
					<img src={logo} alt='logo' />
				</Navbar.Brand>

				<Navbar.Toggle class='bg light position-absolute top-20 start-100 translate-middle' />
				<Navbar.Collapse>
					<Nav class='ms-auto d-flex justify-content-end align-items-center'>
						<NavDropdown title='Home'>
							<NavDropdown.Item href='home/main-demo'>
								Main demo
							</NavDropdown.Item>
							<NavDropdown.Item href='home/main-demo-dark'>
								Main demo dark
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-agency'>
								Creative agency
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-onePage'>
								Creative one page
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-portofolio'>
								Creative portofolio
							</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title='Service'>
							<NavDropdown.Item href='home/main-demo'>Service</NavDropdown.Item>
							<NavDropdown.Item href='home/main-demo-dark'>
								Main demo dark
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-agency'>
								Creative agency
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-onePage'>
								Creative one page
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-portofolio'>
								Creative portofolio
							</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title='About'>
							<NavDropdown.Item href='home/main-demo'>
								Main demo
							</NavDropdown.Item>
							<NavDropdown.Item href='home/main-demo-dark'>
								Main demo dark
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-agency'>
								Creative agency
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-onePage'>
								Creative one page
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-portofolio'>
								Creative portofolio
							</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title='Pages'>
							<NavDropdown.Item href='home/main-demo'>
								Main demo
							</NavDropdown.Item>
							<NavDropdown.Item href='home/main-demo-dark'>
								Main demo dark
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-agency'>
								Creative agency
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-onePage'>
								Creative one page
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-portofolio'>
								Creative portofolio
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title='Blocks'>
							<NavDropdown.Item href='home/main-demo'>
								Main demo
							</NavDropdown.Item>
							<NavDropdown.Item href='home/main-demo-dark'>
								Main demo dark
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-agency'>
								Creative agency
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-onePage'>
								Creative one page
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-portofolio'>
								Creative portofolio
							</NavDropdown.Item>
						</NavDropdown>

						<NavDropdown title='Contact'>
							<NavDropdown.Item href='home/main-demo'>
								Main demo
							</NavDropdown.Item>
							<NavDropdown.Item href='home/main-demo-dark'>
								Main demo dark
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-agency'>
								Creative agency
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-onePage'>
								Creative one page
							</NavDropdown.Item>
							<NavDropdown.Item href='home/creative-portofolio'>
								Creative portofolio
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link className='nav-menu' href='buy-now'>
							<button>BUY NOW</button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className='content'>
				<h1>
					A DIGITAL <br /> AGENCY.
				</h1>
			</div>
			<div className='cards'>
				<div class='row'>
					<Card1 class='col-sm-6' />
					<Card2 class='col-sm-6' />
					<Card3 class='col-sm-6' />
				</div>
			</div>
			<About />
			<div className='aboutcontent'>
				<Aboutcontent />
				<div className='content2'>
					<AboutontentSection />
					<AboutontentSection />
				</div>
			</div>
		</div>
	);
}

export default App;
