import "./card.css";
import logo1 from "./logo2.PNG";

function Card1() {
	return (
		<>
			<div className='cards-component'>
				<img src={logo1} alt='logo2' />
				<h1>Website Development</h1>
				<p>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered.
				</p>
			</div>
		</>
	);
}

export default Card1;
