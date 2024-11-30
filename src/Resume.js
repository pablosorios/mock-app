import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';

export default function Resume({profile}) {
	const [language, setLanguage] = useState('default');
	const toggle = useCallback(() => language !== 'es' ? setLanguage('es') : setLanguage('default'), [language]);
	const name = profile.name
	const position = profile.position
	const tags = profile.tags
	const introduction = profile.introduction
	const skills = profile.skills
	const languages = profile.languages
	const work = profile.work
	const education = profile.education
	const awards = profile.awards
	const references = profile.references
	function getTranslatedValue(obj, language) {
		return obj[language] || obj.default;
	}
	return(
		<div key='resume-main' className='flex flex-col desktop:flex-row w-screen h-fill desktop:h-screen overflow-y-auto'>
			<div key='translate-box' className='flex flex-row w-max h-max bg-foreground py-2 px-3 fixed top-2 right-2 rounded-2xl print:hidden z-20' onClick={toggle}>
				<div key='translate-options' className='flex flex-row w-auto bg-background text-text font-bold text-xs items-center rounded-lg'>
					<span key='translate-en' className={`flex px-2 h-full items-center ${language === 'default' ? 'rounded-lg bg-primary text-white' : ''}`}>EN</span>
					<span key='translate-es' className={`flex px-2 h-full items-center ${language !== 'default' ? 'rounded-lg bg-primary text-white' : ''}`}>ES</span>
				</div>
				<svg key='translate-icon' className='bg-transparent shadow-none fill-text ml-1 h-6 w-6 z-10' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
					<path key='translate-path' d='m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z'/>
				</svg>
			</div>
			<aside key='aside' className='flex grow-0 flex-col w-screen print:h-screen desktop:max-w-screen-tablet h-auto mt-12 tablet:mt-0 desktop:m-2 px-5 text-text items-center z-10'>
				<div key='container' className='w-full border-b-2 border-primary desktop:border-none pb-7 desktop:pb-0'>
					<span key='resume-name' className='font-bold text-primary flex flex-wrap text-4xl justify-center text-center justify-self-center pt-5 pb-2 desktop:pt-7'>{name}</span>
					<span key='resume-position' className='p-1 flex min-w-max text-2xl desktop:text-2xl justify-center font-bold py-2'>{position[language] || position.default}</span>
					<div key='tags' className='flex flex-row flex-wrap items-center justify-center py-3'>
						<a key='email-link' className=' w-auto flex h-7 flex-row rounded-3xl border-2 border-text hover:border-tertiary hover:bg-foreground group items-center m-1 shadow-shadow bg-foreground' href={tags.email}>
							<svg key='email-svg' className='h-7 w-7 bg-text group-hover:bg-tertiary p-1 rounded-3xl fill-foreground  group-hover:fill-foreground -ml-0.5 -mt-0.5 -mb-0.5' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
								<path key='email-path' d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z'/>
							</svg>
							<span key='email-label' className='pl-1 pr-2 self-center group-hover:text-tertiary font-bold'>Email</span>
						</a>
						<a key='linkedin-link' className='w-auto flex h-7 flex-row rounded-3xl border-2 border-text hover:border-tertiary hover:bg-foreground group items-center m-1 shadow-shadow bg-foreground' href={tags.linkedin}>
							<svg key='linkedin-svg' className='h-7 w-7 bg-text group-hover:bg-tertiary p-1 rounded-3xl fill-foreground group-hover:fill-foreground -ml-0.5 -mt-0.5 -mb-0.5' xlms='http://www.w3.org/2000/svg' viewBox='0 0 72 72' >
								<path key='linkedin-path' d='M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z'/>
							</svg>
							<span key='linkedin-label' className='pl-1 pr-2 self-center group-hover:text-tertiary font-bold'>LinkedIn</span>
						</a>
						<a key='github-link' className='w-auto flex h-7 flex-row rounded-3xl border-2 border-text hover:border-tertiary hover:bg-foreground group items-center m-1 shadow-shadow bg-foreground' href={tags.github}>
							<svg key='github-svg' className='h-7 w-7 p-1 rounded-3xl border-text bg-text group-hover:bg-tertiary fill-foreground group-hover:fill-foreground -ml-0.5 -mt-0.5 -mb-0.5' xlms='http://www.w3.org/2000/svg' viewBox='0 0 100 100' >
								<path key='github-path' d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'/>
							</svg>
							<span key='github-label' className='pl-1 pr-2 self-center group-hover:text-tertiary font-bold'>GitHub</span>
						</a>
						<Link key='website-link' to='/dashboard' className='w-auto flex h-7 flex-row rounded-3xl border-2 border-text hover:border-tertiary hover:bg-foreground group items-center m-1 shadow-shadow bg-foreground'>
							<svg key='website-svg' className='h-7 w-7 bg-text group-hover:bg-tertiary p-1 rounded-3xl fill-foreground group-hover:fill-foreground -ml-0.5 -mt-0.5 -mb-0.5' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
								<path key='website-path' d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z'/>
							</svg>
							<span key='website-label' className='pl-1 pr-2 self-center group-hover:text-tertiary font-bold'>{language === 'es' ? 'Página' : 'Website'}</span>
						</Link>
					</div>
				</div>
				<div key='profile-container' className='desktop:bg-foreground desktop:rounded-lg desktop:justify-self-end desktop:border-2 desktop:h-fill desktop:border-text p-2 flex flex-col mt-6 desktop:h-fill desktop:overflow-y-auto desktop:mb-4'>
					<span key='profile-title' className='font-bold py-3 text-2xl self-center'>{language === 'es' ? 'Perfil' : 'Profile'}</span>
					<p key='profile-content' className='text-lg px-2 text-justify'>{introduction[language] || introduction.default}</p>
					<span key='skills-title' className='font-bold pt-6 pb-3 text-2xl self-center'>{language === 'es' ? 'Habilidades' : 'Skills'}</span>
					<div key='skills-box' className='flex flex-row flex-wrap items-center justify-center py-2'>
						{skills.map((item, index) => (
							<span key={`skill[${index}]`} className='rounded-3xl border border-background bg-text text-background px-2 py-1 m-1 text-sm font-bold'>
								{item[language] || item.default}
							</span>
						))}
					</div>
					<span key='languages-title' className='font-bold pt-5 pb-3 text-2xl self-center'>{language === 'es' ? 'Lenguajes' : 'Languages'}</span>
					{languages.map((item, index) => (
						<div key={`language[${index}]-box`}  className='flex flex-row w-full py-1'>
							<span key={`language[${index}]-name`} className='font-bold text-lg pr-2'>
								{getTranslatedValue(item.name, language) + ':'}
							</span>
							<span key={`language[${index}]-fluency`} className='text-lg'>
								{getTranslatedValue(item.fluency, language)}
							</span>
						</div>
					))}
				</div>
			</aside>
			<main key='main' className='flex grow flex-col desktop:h-fill w-full px-2 desktop:overflow-y-auto text-text mt-5 desktop:mt-7 desktop:ml-2'>
				<div key='work-container' className='print:break-inside-avoid'>
					<span key='work-title' className='font-bold py-2 text-2xl self-center'>{language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</span>
					{work.map((item, index) => (
						<Work key={`work[${index}]`} route={`work[${index}]`} item={item} language={language}/>
					))}
				</div>
				<div key='studies-container' className='print:break-inside-avoid'>
					<span key='studies-title' className='font-bold py-2 text-2xl self-center'>{language === 'es' ? 'Formación Académica' : 'Academic Background'}</span>
					{education.map((item, index) => (
						<Academic key={`studies[${index}]`} route={`studies[${index}]`} item={item} language={language}/>
					))}
				</div>
				<div key='awards-container' className='print:break-inside-avoid'>
					<span key='awards-title' className='font-bold py-2 text-2xl self-center'>{language === 'es' ? 'Premios y Publicaciones' : 'Awards and Publications'}</span>
					{awards.map((item, index) => (
						<Awards key={`studies[${index}]`} route={`studies[${index}]`} item={item} language={language}/>
					))}
				</div>
				<div key='references-container' className='print:break-inside-avoid'>
					<span key='references-title' className='font-bold py-2 text-2xl self-center'>{language === 'es' ? 'Referencias' : 'References'}</span>
					{references.map((item, index) => (
						<Reference key={`references[${index}]`} route={`references[${index}]`} item={item} language={language}/>
					))}
				</div>
			</main>
		</div>
	);
}

function Work({route, item, language}) {
	const color = item.color
	const experience = item.experience
	const modality = item?.modality
	const location = item?.location || ''
	const icon = item.icon
	const icon_src = icon.src
	const icon_alt = icon.alt
	const started = experience.reduce((min, item) => {
		const startDate = item.start || { year: 0, month: 0, day: 0 };
		return min ? ((startDate.year < min.year || (startDate.year === min.year && startDate.month < min.month) || (startDate.year === min.year && startDate.month === min.month && startDate.day < min.day)) ? startDate : min ) : startDate;
	}, null)
	const ended = experience.reduce((max, item) => {
		const endDate = item.end || { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
		return max ? ((endDate.year > max.year || (endDate.year === max.year && endDate.month > max.month) || (endDate.year === max.year && endDate.month === max.month && endDate.day > max.day)) ? endDate : max) : endDate;
	}, null)
	const started_date = new Date(started.year, started.month -1, started.day)
	const ended_date = new Date(ended.year, ended.month -1, ended.day)
	const diffMs = ended_date - started_date
	const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44))
    const yearsDiff = Math.floor(diffMonths / 12)
    const monthsDiff = diffMonths % 12
	return(
		<div key={`${route}-container`} className='flex flex-col py-2'>
			<div key={`${route}-header`} className='h-14 flex flex-row items-center'>
				<img key={`${route}-icon`} className='w-10 h-10 rounded-md' src={`${icon_src}`} alt={icon_alt} />
				<div key={`${route}-box`} className='flex flex-col pl-2'>
					<span key={`${route}-label`} className='text-xl font-bold'>
						{item.company}
					</span>
					<div key={`${route}-time`} className='text-sm flex'>
						{yearsDiff > 0 ? 
							<span key={`${route}-years`} className=''>
								{`${yearsDiff + (language === 'es' ? ' año' : ' year')}${yearsDiff > 1 ? 's' : ''}`}
							</span>
						: null }
						{monthsDiff > 0 ? 
							<span key={`${route}-months`} className={yearsDiff > 0 && monthsDiff > 0 ? 'pl-2' : ''}>
								{`${monthsDiff + (language === 'es' ? ' mes' : ' month')}${monthsDiff > 1 ? (language === 'es' ? 'es' : 's') : ''}`}
							</span>
						: null }
					</div>
				</div>
				<div key={`${route}-specs`} className='pl-7 text-md flex flex-col justify-center'>
					<span key={`${route}-modality`} className='font-bold'>
						{modality[language] || modality.default}
					</span>
					{ location !== '' ?
						<div key={`${route}-location_box`} className='flex flex-row items-center'>
							<svg key={`${route}-location_icon`} className='bg-transparent shadow-none fill-text h-4 w-4 z-10' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
								<path d='M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z'/>
							</svg>
							<span key={`${route}-location`} className='pl-1 text-sm'>
								{location}
							</span>
						</div>
					: null }
				</div>
			</div>
			<div key={`${route}-content`} className='flex flex-col pl-5 ml-5 border-l-4 -mt-2 py-2' style={{borderColor:`${color}`}}>
				<ul key={`${route}-list`}>
					{experience.map((item, index) => (
						<Experience key={`${route}-experience[${index}]`} route={`${route}-experience[${index}]`} item={item} language={language} color={color}/>
					))}
				</ul>
			</div>
		</div>
	)
}

function Experience({ route, item, language, color }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);
	const monthString = {
		default: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	};
	const monthLabel = language === 'es' ? monthString.es : monthString.default
	const position = item.position
	const start = item.start
	const current_date = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }
	const end = item?.end || { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }
	const functions = item.functions
	const reports = item?.reports || 0
	return (
		<div key={`${route}-container`} className='pt-2'>
			<li key={`${route}-box`} onClick={toggle} className="flex flex-row items-center">
				<div key={`${route}-group`} className='flex flex-col tablet:flex-wrap tablet:items-center tablet:flex-row pl-4'>
					<span key={`${route}-position`} className='text-md font-bold'>
						{position[language] || position.default}
					</span>
					<div key={`${route}-time`} className='text-sm tablet:pl-2 flex flex-wrap'>
						<span key={`${route}-start`} className='pr-1'>
							{`${start.day} ${monthLabel[start.month -1]} ${start.year === end.year ? '' : start.year} ${language === 'es' ? 'a ' : 'to '}`}
						</span>
						<span key={`${route}-end`} className=''>
							{`${end === current_date ? (language === 'es' ? 'presente' : 'present') : end.day + ' ' + monthLabel[end.month -1] + ' ' + end.year}`}
						</span>
					</div>
				</div>
				<svg key={`${route}-arrow`} className={`${isOpen ? 'rotate-0' : 'rotate-180'} print:hidden flex shrink-0 bg-transparent shadow-none fill-text ml-3 h-7 w-7 z-10`} xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
					<path d='M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z'/>
				</svg>
				{reports !== 0 ?
					<div key={`${route}-reports-box`} className='ml-5 pr-3 flex min-w-max flex-row items-center border-2 rounded-2xl bg-foreground' style={{borderColor:`${color}`}}>
						<div key={`${route}-reports-group`} className={`${reports > 1 ? 'px-2' : 'pl-1 pr-2'} rounded-xl flex flex-row items-center`} style={{backgroundColor:`${color}`}}>
							<svg key={`${route}-people`} className={`${reports > 1 ? 'w-4 h-5' : 'w-5 h-4'} bg-transparent shadow-none fill-white`} xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
								<path d={reports === 1 ? 'M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z' : 'M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z'}/>
							</svg>
							<span key={`${route}-report-count`} className='pl-1 text-xs font-bold text-white'>
								{reports}
							</span>
						</div>
						<span key={`${route}-reports`} className='text-xs pl-2 font-bold'>
							{`${language === 'es' ? 'Reporte' : 'Direct'}${language === 'es' && reports > 1 ? 's' : ''} ${language === 'es' ? 'directo' : 'report'}${reports > 1 ? 's' : ''}`}
						</span>
					</div>
				: null}
			</li>
			<ul key={`${route}-list`} className={`${isOpen ? 'flex flex-col' : 'hidden print:flex print:flex-col'} pt-1`}>
				{functions.map((item, index) => (
					<Functions key={`${route}-function[${index}]`} route={`${route}-function[${index}]`} item={item} language={language}/>
				))}
			</ul>
		</div>
	);
}

function Functions({ route, item, language }) {
	const name = item.name;
	const responsibilities = item.responsibilities;
	function getTranslatedValue(obj, language) {
		return obj[language] || obj.default;
	}
	const realname = getTranslatedValue(name, language);;
	const items = getTranslatedValue(responsibilities, language);
  
	return (
	  <div key={`${route}-box`} className='ml-5 pl-5 pt-1 print:break-inside-avoid'>
		<li key={`${route}-label`} className='list-disc text-md font-bold'>
			{realname}
		</li>
		<ul  key={`${route}-list`} className='ml-5 pl-5'>
		  {items.map((item, index) => (
			<li key={`${route}-label[${index}]`} className='list-disc text-md'>
			  {item}
			</li>
		  ))}
		</ul>
	  </div>
	);
}

function Academic({route, item, language}) {
	const monthString = {
		default: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	};
	const monthLabel = language === 'es' ? monthString.es : monthString.default
	const color = item.color
	const courses = item.courses
	const location = item?.location
	const institution = item?.institution
	const icon = item.icon
	const icon_src = icon.src
	const icon_alt = icon.alt
	const started = courses.reduce((min, item) => {
		const startDate = item.start || { year: 0, month: 0, day: 0 };
		return min ? ((startDate.year < min.year || (startDate.year === min.year && startDate.month < min.month) || (startDate.year === min.year && startDate.month === min.month && startDate.day < min.day)) ? startDate : min ) : startDate;
	}, null)
	const ended = courses.reduce((max, item) => {
		const endDate = item.end || { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
		return max ? ((endDate.year > max.year || (endDate.year === max.year && endDate.month > max.month) || (endDate.year === max.year && endDate.month === max.month && endDate.day > max.day)) ? endDate : max) : endDate;
	}, null)
	const started_date = new Date(started.year, started.month -1, started.day)
	const ended_date = new Date(ended.year, ended.month -1, ended.day)
	const diffMs = ended_date - started_date
	const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44))
    const yearsDiff = Math.floor(diffMonths / 12)
    const monthsDiff = diffMonths % 12
	return(
		<div key={`${route}-container`} className='flex flex-col py-2'>
			<div key={`${route}-header`} className='h-14 flex flex-row items-center'>
				<img key={`${route}-icon`} className='w-10 h-10 rounded-md' src={`${icon_src}`} alt={icon_alt} />
				<div key={`${route}-box`} className='flex flex-col pl-2'>
					<span key={`${route}-label`} className='text-xl font-bold'>
						{institution[language] || institution.default}
					</span>
					<div key={`${route}-time`} className='text-sm flex'>
						{yearsDiff > 0 ? 
							<span key={`${route}-years`} className=''>
								{`${yearsDiff + (language === 'es' ? ' año' : ' year')}${yearsDiff > 1 ? 's' : ''}`}
							</span>
						: null }
						{monthsDiff > 0 ? 
							<span key={`${route}-months`} className={yearsDiff > 0 && monthsDiff > 0 ? 'pl-2' : ''}>
								{`${monthsDiff + (language === 'es' ? ' mes' : ' month')}${monthsDiff > 1 ? (language === 'es' ? 'es' : 's') : ''}`}
							</span>
						: null }
						{yearsDiff === 0 && monthsDiff === 0 ? 
							<span key={`${route}-date`} className=''>
								{`${monthLabel[started.month -1]} ${started.year}`}
							</span>
						: null }
						<div key={`${route}-location_box`} className='flex flex-row items-center pl-2'>
							{ location.default !== 'Remote' ?
								<svg key={`${route}-location_icon`} className='bg-transparent shadow-none fill-text h-4 w-4 z-10' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
									<path d='M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z'/>
								</svg>
							: null }
							<span key={`${route}-location`} className='pl-1 text-sm'>
								{location[language] || location.default}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div key={`${route}-content`} className='flex flex-col pl-5 ml-5 border-l-4 -mt-2 py-2' style={{borderColor:`${color}`}}>
				<ul key={`${route}-list`}>
					{courses.map((item, index) => (
						<Course key={`${route}-courses[${index}]`} route={`${route}-courses[${index}]`} item={item} language={language} color={color}/>
					))}
				</ul>
			</div>
		</div>
	)
}

function Course({ route, item, language }) {
	const monthString = {
		default: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	};
	const monthLabel = language === 'es' ? monthString.es : monthString.default
	const course = item.name
	const start = item.start
	const end = item?.end || { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }
	const type = item?.type || ''
	return (
		<li key={`${route}-box`} className="flex flex-col items-start pt-2 pl-4 print:break-inside-avoid">
			<div key={`${route}-group`} className='flex flex-row items-center tablet:flex-wrap'>
				<span key={`${route}-position`} className='text-md font-bold'>
					{course[language] || course.default}
				</span>
				<span key={`${route}-type`} className='pl-3 text-md'>
					{type[language] || type.default}
				</span>
			</div>
			<div key={`${route}-modality`} className='text-sm flex flex-wrap'>
				<span key={`${route}-start`} className='text-sm pr-1'>
					{`${monthLabel[start.month -1]} ${start.year === end.year && start.month === end.month ? start.year : (language === 'es' ? 'a ' : 'to ')}`}
				</span>
				<span key={`${route}-end`} className='text-sm'>
					{`${start.year === end.year && start.month === end.month ? '' : monthLabel[end.month -1] + ' ' + end.year}`}
				</span>
			</div>
		</li>
	);
}

function Awards({route, item, language}) {
	const monthString = {
		default: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	};
	const monthLabel = language === 'es' ? monthString.es : monthString.default
	const color = item.color
	const entity = item?.entity
	const icon = item.icon
	const icon_src = icon.src
	const icon_alt = icon.alt
	const date = item.date
	const title = item.name
	const description = item.description
	return(
		<div key={`${route}-container`} className='flex flex-col py-2'>
			<div key={`${route}-header`} className='h-auto flex flex-row items-center'>
				<img key={`${route}-icon`} className='w-10 h-10 rounded-md' src={`${icon_src}`} alt={icon_alt} />
				<div key={`${route}-box`} className='flex flex-col pl-2'>
					<span key={`${route}-label`} className='text-xl font-bold'>
						{entity[language] || entity.default}
					</span>
					<span key={`${route}-title`} className='text-sm flex'>
						{title[language] || title.default}
					</span>
				</div>
			</div>
			<div key={`${route}-content`} className='flex flex-col pl-9 ml-5 border-l-4 -mt-2 py-2 pt-4' style={{borderColor:`${color}`}}>
				<span key={`${route}-description`} className='text-md font-bold'>
					{description[language] || description.default}
				</span>
				<span key={`${route}-date`} className='text-sm flex'>
					{`${monthLabel[date.month -1]} ${date.year}`}
				</span>
			</div>
		</div>
	)
}

function Reference({route, item, language}) {
	const color = item.color
	const company = item?.company
	const icon = item.icon
	const icon_src = icon.src
	const icon_alt = icon.alt
	const title = item.position
	const person = item.name
	const relationships = item.relationships
	return(
		<div key={`${route}-container`} className='flex flex-col py-2'>
			<div key={`${route}-header`} className='h-auto flex flex-row items-center'>
				<img key={`${route}-icon`} className='w-10 h-10 rounded-md' src={`${icon_src}`} alt={icon_alt} />
				<div key={`${route}-box`} className='flex flex-col pl-2'>
					<span key={`${route}-label`} className='text-xl font-bold'>
						{person}
					</span>
					<div key={`${route}-work`} className='flex flex-row'>
						<span key={`${route}-company`} className='text-sm font-bold flex'>
							{company + ':'}
						</span>
						<span key={`${route}-position`} className='pl-2 text-sm flex'>
							{title[language] || title.default}
						</span>
					</div>
				</div>
				<a key={`${route}-email`} href={item.email} className='pl-4'>
					<svg key='email-svg' className='h-6 w-6 bg-text group-hover:bg-tertiary p-1 rounded-lg fill-foreground  group-hover:fill-foreground -ml-0.5 -mt-0.5 -mb-0.5' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
						<path key='email-path' d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z'/>
					</svg>
				</a>
				<a key={`${route}-linkedin`} href={item.linkedin} className='pl-3'>
					<svg key='linkedin-svg' className='h-6 w-6 bg-text group-hover:bg-tertiary p-1 rounded-lg fill-foreground group-hover:fill-foreground -ml-0.5 -mt-0.5 -mb-0.5' xlms='http://www.w3.org/2000/svg' viewBox='0 0 72 72' >
						<path key='linkedin-path' d='M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z'/>
					</svg>
				</a>
			</div>
			<div key={`${route}-content`} className='flex flex-col pl-9 ml-5 border-l-4 -mt-2 py-2 pt-4' style={{borderColor:`${color}`}}>
				{relationships.map((item, index) => (
					<Relation key={`${route}-relationships[${index}]`} route={`${route}-relationships[${index}]`} item={item} language={language}/>
				))}
			</div>
		</div>
	)
}

function Relation({ route, item, language }) {
	const monthString = {
		default: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	};
	const icon =item.icon
	const monthLabel = language === 'es' ? monthString.es : monthString.default
	const type = item.type
	const company = item.company
	const start = item.start
	const end = item?.end || { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }
	return (
		<li key={`${route}-box`} className="flex flex-col items-start pt-2 pl-0">
			<div key={`${route}-group`} className='flex flex-row items-center tablet:flex-wrap'>
				<span key={`${route}-type`} className='font-bold text-md'>
					{type[language] || type.default}
				</span>
				<span key={`${route}-position`} className='pl-1 text-md'>
					{(language === 'es' ? ' en' : ' at') + ' ' + company}
				</span>
				<img key={`${route}-icon`} className='w-5 h-5 rounded-xl ml-2' src={icon.src} alt={icon.alt} />
			</div>
			<div key={`${route}-modality`} className='text-sm flex flex-wrap'>
				<span key={`${route}-start`} className='text-sm pr-1'>
					{`${monthLabel[start.month -1]} ${start.year === end.year && start.month === end.month ? start.year : start.year + ' ' + (language === 'es' ? 'a ' : 'to ')}`}
				</span>
				<span key={`${route}-end`} className='text-sm'>
					{`${start.year === end.year && start.month === end.month ? '' : monthLabel[end.month -1] + ' ' + end.year}`}
				</span>
			</div>
		</li>
	);
}