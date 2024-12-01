import React, { useState } from 'react'

export default function Sidebar({ company, sidebar, duplicated }) {
	const [isHidden, setHidden] = useState(true);

	function toggleSidebar() {
		setHidden(!isHidden);
	};

	return (
		<>
			<aside {...isHidden ? {onMouseOver: toggleSidebar} : null} className={`${isHidden ? `${duplicated ? 'top-1 left-4' : 'top-5 left-6'} sideBar` : 'top-0 left-0 sideModal z-20'} group/sidebar`}>
				<div className={`${isHidden ? 'flex-row tablet:flex-col desktop:flex-row justify-center desktop:justify-start' : 'flex-row-reverse justify-start'} z-20 flex items-center w-auto p-1`}>
					<button className={`${isHidden ? 'tablet:hidden' : 'desktop:hidden'} flex justify-center items-center fill-text py-2 my-1 h-7 w-7 z-20`} onClick={toggleSidebar}>
						<svg className='justify-self-center self-center' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
							<path d={!isHidden ? 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' : 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'}/>
						</svg>
					</button>
					<div className={`${isHidden ? 'company' : 'companyModal'} z-20`}>
						<svg className='w-8 h-8 p-1 mr-1 bg-primary fill-white rounded-lg' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
							<path d={company.icon}/>
						</svg>
						<span className={`${isHidden ? 'hidden tablet:flex desktop:pr-5' : 'flex pr-5'} min-w-max text-sm text-text font-bold tablet:flex pl-2 tablet:pl-0 desktop:pl-2 z-20`}>
							{company.name}
						</span>
					</div>
				</div>
				{sidebar.map((item, index) => (
					<Sidemenu key={`sidemenu-${index}`} item={item} rank={index} hiddenSidebar={isHidden}/>
				))}
			</aside>
			<div className={`${isHidden ? 'hidden' : 'hidden tablet:sideBar desktop:hidden'} z-10`}>
				{sidebar.map((item, index) => (
					<div key={`fakemenu-${index}`} className='hidden tablet:flex tablet:flex-col desktop:hidden bg-transparent fill-transparent text-transparent'>
						<svg className='p-2 tablet:p-1 h-10 w-10 tablet:h-8 tablet:w-10' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
							<path d={item.icon}/>
						</svg>
						<span>
							{item.name}
						</span>
					</div>
				))}
			</div>
			<button {...!isHidden ? {onMouseOver: toggleSidebar, onClick: toggleSidebar} : null} className={`${isHidden ? 'hidden' : 'flex desktop:hidden'} z-10 absolute h-screen w-screen inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition ease-in-out duration-300 origin-left`}></button>
		</>
	)
};

function Sidemenu({ item, rank, hiddenSidebar }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSubMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div key={`sidemenuDiv-${rank}`} {...!isOpen ? {onMouseEnter: toggleSubMenu, onClick: toggleSubMenu} : {onMouseLeave: toggleSubMenu}} className='group/sideMenu w-full px-2 tablet:px-1 desktop:hover:px-1 flex flex-col'>
			<div {...isOpen ? {onClick: toggleSubMenu} : null} className={`${item.hasOwnProperty('children') && isOpen ? 'py-1' : 'py-1 tablet:py-2.5 desktop:py-1'} ${hiddenSidebar ? 'hidden tablet:flex tablet:sideMenu desktop:sideMenuModal' : 'flex sideMenuModal'} ${item.status === 'current' ? 'bg-background fill-primary text-primary' : 'bg-foreground fill-text text-text'} z-20 relative`}>
				<svg className='p-2 tablet:p-1 h-8 w-8 tablet:h-8 tablet:w-8' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
					<path d={item.icon}/>
				</svg>
				<span>
					{item.name}
				</span>
				<svg className={`${item.hasOwnProperty('children') ? 'scale-100' : 'scale-0'} ${hiddenSidebar ? 'tablet:absolute desktop:static tablet:left-0 tablet:top-3' : 'static'} ${isOpen ? 'rotate-0' : 'rotate-180'} bg-transparent shadow-none fill-text py-1 h-7 w-7 z-10`} xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
					<path d='M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z'/>
				</svg>
			</div>
			{item.hasOwnProperty('children') && isOpen && !hiddenSidebar ? 
				item.children.map((child, index) => (
					<div key={`submenu-${rank}.${index}`} className='subMenu'>
						<svg className='p-2 tablet:p-1 desktop:p-2 h-7 w-7' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
							<path d={child.icon}/>
						</svg>
						<span className='pl-2'>
							{child.name}
						</span>
					</div>
				)) : null
			}
		</div>
	)
};