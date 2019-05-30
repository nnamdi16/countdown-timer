import React from 'react';

import './App.css';
import Countdown from './Countdown';

function App() {
	return (
		<div className="App">
			<Countdown timeTillDate="12 26 2019, 6:00am" timeFormat="MM DD YYYY, h:mm a" />
		</div>
	);
}

export default App;
