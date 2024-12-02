import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import Template from './Template';
import Response from './Response.json'
import Profile from './Profile.json'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Template response={Response} />} />
				<Route path="/cv" element={<Resume profile={Profile} />} />
			</Routes>
		</Router>
	);
}

export default App;