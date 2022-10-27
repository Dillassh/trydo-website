import "./card.css";
import logo1 from "./logo3.PNG";

function Card1() {
	return (
		<>
			<div className='cards-component'>
				<img src={logo1} alt='logo3' />
				<h1>Bussines Strategy</h1>
				<p>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</p>
			</div>
		</>
	);
}

export default Card1;
