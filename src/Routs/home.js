import React from 'react';
import Navbar from '../components/navbar';
import hom3Image from '../assets/hom2.jpg';

function Hero() {
	const heroStyle = {
		backgroundImage: `url(${hom3Image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',



		height: '100vh',
		width: '100%',
	};

	return (
		<div style={heroStyle}>

			<Navbar />

			<div className="herotext" style={{

				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				textAlign: 'center',
				color: 'white',

			}}>


				<h1 style={{ fontSize: '4rem', margin: '0', color: '#2E2E2E' }}>your journey your story</h1>
				<p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#2E2E2E', fontWeight: 'bold' }}>
					choose your favorite destination
				</p>

				<a
					href="/"
					style={{
						fontSize: '1.5rem',
						marginTop: '1rem',
						textDecoration: 'none',
						color: 'black',

						backgroundColor: 'white',
						padding: '0.5rem 1rem',
						borderRadius: '5px',
					}}
				>
					Travel Plan
				</a>
			</div>
		</div>
	);
}

export default Hero;
