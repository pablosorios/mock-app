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
				<Route path="/" element={<Resume profile={Profile} />} />
				<Route path="/dashboard" element={<Template response={Response} />} />
			</Routes>
		</Router>
	);
}

export default App;