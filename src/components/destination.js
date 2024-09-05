import Mountain1 from "../assets/vol2.jpg";
import Mountain2 from "../assets/vol1.jpg";
import Tower from "../assets/fra.jpg"
import France from "../assets/fra2.jpg"

import "./Destistyles.css";

const Destination = () => {
	return (
		<div className="destination">
			<h1>Popular Destinations</h1>
			<p>Tours give you the opportunity to see a lot, within a time frame.</p>

			{/*  1  */}
			<div className="first-des">
				<div className="des-text">
					<h2>Taal Volcano, Batangas</h2>
					<p>
						One of the most iconic views in Luzon, Mt. Taal boasts a volcano
						inside a lake inside an island. If you fancy a closer look, the hike
						up to the crater is a mere 45 minutes, and is easy enough for
						beginners. Guides will assist you most of the way, and you’ll see
						the peculiar environment found on an active volcano, including
						volcanic rocks and steam vents. The hike can be dusty and hot, so
						plan for an early morning trip, and then unwind with some bulalo
						before heading back home!
					</p>
				</div>
				<div className="image">
					<img alt="img" src={Mountain1} className="small-image" />
					<img alt="img" src={Mountain2} className="small-image" />
				</div>
			</div>



			{/* 2  */}

			<div className="second-des">
				<div className="des-text2">
					<h2>Eiffel Tower, France</h2>
					<p>
						One of the most recognizable landmarks in France,
						the Eiffel Tower stands proudly in Paris, overlooking
						the city.If you wish to experience its grandeur up
						close, you can take an elevator ride to one of its
						observation decks, which offers stunning views of
						the Paris skyline. The tower, constructed of iron,
						is a marvel of engineering and a symbol of French
						artistry. It can be crowded, especially during peak
						tourist season, so planning an early visit can help
						you avoid long lines and fully enjoy the iconic structure.


					</p>
				</div>
				<div className="image1">
					<img alt="img1" src={Tower} className="small-image1" />
					<img alt="img1" src={France} className="small-image1" />
				</div>
			</div>
		</div>
	);
};

export default Destination;
