import React from 'react'
import Resume from './Resume';
import Profile from './Profile.json'

export default function Main({content, duplicated}) {
	return(
		<Resume profile={Profile} />
	)
}