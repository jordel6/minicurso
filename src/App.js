import './App.css';
import Consts from './Consts';

import Footer from './components/Footer';
import Ground from './components/Ground';

import city from './assets/city.jpg'
import ground from './assets/ground.png'
import Bird from './components/Bird/Bird';

function App() {


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
						top={Consts.birdPosition}
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
