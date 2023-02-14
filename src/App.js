import './App.css';
import Consts from './Consts';

import Footer from './components/Footer';
import Ground from './components/Ground';

import city from './assets/city.jpg'
import ground from './assets/ground.png'
import Bird from './components/Bird/Bird';
import { useState, useEffect } from 'react';

function App() {

const [birdPosition, setBirdPosition] = useState(0)
useEffect(() => {
	let timeId = setInterval(() => {
		setBirdPosition((pos) => pos + 10)


	},24)

	return () => {
		clearInterval(timeId)
	}
})
	

	return (
		<div className='App'>
			<div className='Container'>

				<div
					className='GameBox'
					style={{
						height: Consts.GAME_HEIGHT,
						width: Consts.GAME_WIDTH,
						//backgroundImage: url(city)
					}}
				>

					{/* Add modals here */}

					{/* Add obstacles here */}

					<Bird
						size={Consts.BIRD_SIZE}
						top={birdPosition}
						left={Consts.BIRD_LEFT}
					/>

					<Ground
						width={Consts.GROUND_WIDTH}
						height={Consts.GROUND_HEIGHT}
						leftCrop={0}
					/>
				</div>
				<span>Score</span>
				<Footer controlsContent={["JUMP - a / ↑ / Enter", "PAUSE - Space"]} />

			</div>
		</div>
	);
}

export default App;
