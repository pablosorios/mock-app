import React from 'react'

export default function Main({content, duplicated}) {
	return(
		<main className={`${duplicated ? '' : 'mt-20 tablet:mt-2'} tablet:m-2 static flex flex-wrap`}>
			{content.map((item, index) => 
				<div key={`main-${index}`} className={item.class}>
					{item.label}
				</div>
			)}
		</main>
	)
}