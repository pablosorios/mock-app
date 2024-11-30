import React from 'react'

export default function Navbar({content, duplicated}) {
  return (
		<nav className={`${duplicated ? 'static top-0 pt-12 tablet:pt-0' : 'absolute tablet:static bottom-0' } flex grow w-full flex-row bg-foreground tablet:bg-transparent`}>
			{content.map((item, index) => 
				<div key={item.name + index} className={`${item.status === 'current' ? 'fill-primary' : 'tablet:bg-foreground fill-text'} mx-auto group hover:fill-white hover:text-white bg-transparent w-auto min-w-max rounded-md bg-foreground text-xs font-bold transition-all duration-100 scale-100 origin-bottom desktop:group-hover:text-white desktop:group-hover:bg-transparent py-1 flex flex-col desktop:flex-row items-center`}>
					<svg className='p-2 h-10 w-10' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' ><path d={item.icon}/></svg>
					<span className={`${item.status === 'current' ? 'text-primary' : 'text-text'}  px-3 group-hover:text-white bg-transparent w-auto min-w-max rounded-md bg-foreground text-xs font-bold transition-all duration-100 scale-100 origin-bottom desktop:group-hover:text-white desktop:group-hover:bg-transparent`}>
						{item.name}
					</span>
				</div>
			)}
		</nav>
	)
}
