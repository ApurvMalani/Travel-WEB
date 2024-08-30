import "./styles/herostyles.css";
import hom3Image from '../assets/hom2.jpg';

function Hero() {
	return (
		<div className="hero">
			<img alt="Home Image" src={hom3Image} />

			<div className="herotext">
				<h1>your journey your story</h1>
				<p>choose your favorite destination</p>
				<a href="/">
					Travel Plan
				</a>
			</div>
		</div>
	);
}

export default Hero;
