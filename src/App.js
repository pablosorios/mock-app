import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Composer from './Composer'
import Flexer from './Flexer'
import Resume from './Resume'

function App() {
	const locale = navigator.language || 'en-US'
	const [language, setLanguage] = useState(locale.split('-')[0] || 'en-US')
	const languages = [
		'en',
		'es'
	]
	function translate(obj, language) {
			const keys = Object.keys(obj)
			const def = keys[0]
			return obj[language] || obj[def]
	}
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Composer language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
				<Route path="/cv" element={<Resume language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
				<Route path="/dashboard" element={<Composer language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
				<Route path="/dashboard/:space" element={<Composer language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
				<Route path="/dashboard/:space/:menu" element={<Composer language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
				<Route path="/dashboard/:space/:menu/:submenu" element={<Composer language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
				<Route path="/flex" element={<Flexer language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
				<Route path="/flex/:page_id" element={<Flexer language={language} setLanguage={setLanguage} languages={languages} translate={translate}/>}/>
			</Routes>
		</Router>
	);
}

export default App;