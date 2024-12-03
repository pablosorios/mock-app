import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import Paths from './Paths.json'
import Error from './Error'

export default function Composer({language, setLanguage, languages, translate}) {
	const { space, menu, submenu } = useParams()
	const [isHidden, setHidden] = useState(true);
	function toggleSidebar() {
		setHidden(!isHidden);
	};
	const path = Paths
	const keys = Object.keys(path)
	const key_count = keys.length
	const exist = path.hasOwnProperty(space)
	const item = path[space] || path[keys[0]]
	const handleChange = (event) => {
		setLanguage(event.target.value)
	}
	const duplicated = false
	const children = item.children
	return (
		<div key='composer'>
			{
				!exist && 1 !== 1 ?
				<Error /> :  
				<div key='composer-screen' className='flex flex-col tablet:flex-row w-screen h-screen overflow-y-auto print:h-auto'>
					{
						children ?
						<aside key='total_sidebar'>
							<div key='sidebar'  {...isHidden ? {onMouseOver: toggleSidebar} : null} className={`${isHidden ? `${duplicated ? 'top-1 left-4' : 'top-5 left-6'} sideBar` : 'top-0 left-0 sideModal z-20'} group/sidebar`}>
								<div key='sidebar-container' className={`${isHidden ? 'flex-row tablet:flex-col desktop:flex-row justify-center desktop:justify-start' : 'flex-row-reverse justify-start'} z-20 flex items-center w-auto p-1`}>
									<button key='sidebar-toggle' className={`${isHidden ? 'tablet:hidden' : 'desktop:hidden'} flex justify-center items-center fill-text py-2 my-1 h-7 w-7 z-20`} onClick={toggleSidebar}>
										<svg key='sidebar-toggle-svg' className='justify-self-center self-center' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
											<path key='sidebar-toggle-path' d={!isHidden ? 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' : 'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'}/>
										</svg>
									</button>
									<Company isHidden={isHidden} company={'Mocca'}/>
								</div>
								{children.map((item, index) => (
									<Menu route={`menu[${index}]`} menu={menu} submenu={submenu} item={item} translate={translate} language={language} isHidden={isHidden}/>
								))}
							</div>
							<div key='fakemenu' className={`${isHidden ? 'hidden' : 'hidden tablet:sideBar desktop:hidden'} z-10`}>
								{children.map((item, index) => (
									<div key={`fakemenu[${index}]-container`} className='hidden tablet:flex tablet:flex-col desktop:hidden bg-transparent fill-transparent text-transparent'>
										<svg key={`fakemenu[${index}]-svg`} className='p-2 tablet:p-1 h-10 w-10 tablet:h-8 tablet:w-10' xlms='http://www.w3.org/2000/svg' viewBox={item.viewbox}>
											<path key={`fakemenu[${index}]-path`} d={item.path}/>
										</svg>
										<span key={`fakemenu[${index}]-label`}>
											{translate(item.label, language)}
										</span>
									</div>
								))}
							</div>
							<button key='blurr' {...!isHidden ? {onMouseOver: toggleSidebar, onClick: toggleSidebar} : null} className={`${isHidden ? 'hidden' : 'flex desktop:hidden'} z-10 absolute h-screen w-screen inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition ease-in-out duration-300 origin-left`}></button>
						</aside>
						: null
					}
					<div key='content-container' className={`${key_count > 0 && duplicated ? 'flex-col' : 'flex-col-reverse'} w-full h-screen flex tablet:flex-col print:h-auto`}>
						<nav key='navbar' className='w-full h-auto bg-foreground flex flex-row'>
							{keys.map((key, index) => (
								<Space route={`space[${index}]`} item={path[key]} current={key === space} name={key} translate={translate} language={language}/>
							))}
							<div key='language-box' className='justify-center px-1 items-center hidden tablet:flex tablet:flex-col tablet:pt-1 desktop:flex-row'>
								<svg key='translate-icon' className='bg-transparent shadow-none fill-text mx-1 h-6 w-6 z-10 tablet:mt-2' xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
									<path key='translate-path' d='m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z'/>
								</svg>
								<select key='language-select' value={language} onChange={handleChange} className='h-auto my-1 w-auto bg-background rounded-xl justify-center items-center text-text text-sm font-bold'>
									{languages.map((option, index) => (
										<option key={`language[${index}]`} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>
						</nav>
					</div>
				</div>
			}
		</div>
	)
}

function Company({isHidden, company}) {
	return (
		<div key='company' className={`${isHidden ? 'company' : 'companyModal'} z-20`}>
			<svg key='company-svg' version='1.1' xmlns='http://www.w3.org/2000/svg' className='rounded-lg w-8 h-8 bg-icon' viewBox='40 40 432 432'>
				<path key='company-path[0]' className='fill-white' d="M0 0 C4.24695972 0.30335427 6.26344799 2.98277599 9 6 C9.61875 6.66 10.2375 7.32 10.875 8 C12 10 12 10 11.88671875 12.3046875 C10.6976287 15.9191022 8.72224064 17.56350861 5.9375 20.125 C3.19723902 22.59010804 3.19723902 22.59010804 1 25 C1 25.99 1 26.98 1 28 C2.83797376 29.59924008 2.83797376 29.59924008 5.1875 31.125 C13.59982077 37.45401876 16.93931237 46.87575206 19 57 C19.3744315 62.03402352 19.27952159 66.96313061 19 72 C18.91685547 73.57587891 18.91685547 73.57587891 18.83203125 75.18359375 C18.47407849 80.16116323 17.58980518 84.260245 16 89 C15.51720625 91.28663853 15.05970512 93.57873412 14.625 95.875 C13.2719067 102.3157241 11.4570092 107.42478537 7.73828125 112.8359375 C4.99152052 116.87771755 3.52682004 120.32962374 2.4375 125.125 C0.80233184 132.26434074 -2.03021525 136.09410313 -7.3125 141.0625 C-11.01640069 144.63909805 -13.30742949 148.09421128 -15.625 152.6875 C-18.74495617 158.86271278 -21.89280042 162.52849041 -27.78515625 166.07421875 C-31.88835909 168.64435679 -33.73903335 171.01965931 -35.9375 175.375 C-40.43363785 184.18979657 -46.85495038 188.15302924 -55.4765625 192.59375 C-58.21800895 194.00636583 -58.21800895 194.00636583 -61 196.625 C-64.5656283 199.44778907 -67.92883435 200.54312927 -72.2109375 201.95703125 C-74.8878016 202.95804345 -77.03258048 204.16146925 -79.4375 205.6875 C-83.96396718 208.36743003 -88.1068552 208.63271928 -93.30078125 208.76171875 C-96.10214333 209.00901699 -97.52702473 209.76110206 -100 211 C-102.734375 211.3359375 -102.734375 211.3359375 -105.75 211.375 C-106.73484375 211.40335938 -107.7196875 211.43171875 -108.734375 211.4609375 C-111.8271726 211.0243943 -113.16524737 210.4627957 -115.796875 208.97265625 C-121.12075897 206.11395651 -126.07256364 206.80668011 -131.93359375 207.24414062 C-138.19549293 207.51308767 -142.25430481 206.18282393 -147 202 C-151.7806103 195.47511297 -153.87695758 187.90973806 -155 180 C-155.42990234 180.37294189 -155.85980469 180.74588379 -156.30273438 181.13012695 C-173.79820693 196.22879608 -193.40088868 207.43265136 -216 213 C-216.73686035 213.19174805 -217.4737207 213.38349609 -218.23291016 213.58105469 C-241.73394054 219.56988513 -266.30785241 219.5362274 -287.97265625 207.84765625 C-297.37220452 202.1108997 -304.42624695 194.10032493 -307.52734375 183.3671875 C-309.96482674 171.15962809 -305.9972547 159.37073237 -299.8828125 148.81640625 C-290.71323276 135.10008468 -278.49738935 124.34635472 -265 115 C-266.76859543 111.87094655 -268.53462394 108.75225172 -270.42578125 105.6953125 C-280.79767164 88.91804277 -287.38994445 70.60872191 -283.33984375 50.765625 C-282.42385401 48.02162111 -281.32945731 45.56818015 -280 43 C-279.51402344 42.00613281 -279.02804687 41.01226562 -278.52734375 39.98828125 C-270.96253511 25.73496567 -259.30115608 18.5562244 -244.30078125 13.8359375 C-215.63949991 7.21354926 -186.54641084 18.50238242 -162.29296875 32.91796875 C-148.18284404 41.83931687 -136.23017977 52.39550762 -124.70703125 64.453125 C-123.13693631 66.22383011 -123.13693631 66.22383011 -121 66 C-120.07673608 64.59800664 -119.15800232 63.19283082 -118.26171875 61.7734375 C-116.38946586 59.14184985 -114.10058784 57.02095861 -111.78125 54.78515625 C-110.09831054 53.09852613 -108.6182293 51.35409305 -107.125 49.5 C-104.33668552 46.18751152 -101.21190412 43.79034623 -97.74609375 41.21875 C-94.86165836 38.88822468 -92.23504221 36.39337972 -89.57128906 33.81787109 C-83.8417971 28.28242866 -78.55971352 23.55120131 -71.26953125 20.11328125 C-68.96537059 19.08344704 -68.96537059 19.08344704 -67.09375 17.484375 C-63.51170589 14.94486611 -59.34604347 14.12826564 -55.16796875 12.91796875 C-52.92312772 12.26749077 -50.7010249 11.53608032 -48.5 10.75 C-37.32495732 8.355348 -28.3732607 10.67780804 -18 15 C-16.33364244 15.66743892 -14.66709532 16.33440597 -13 17 C-12.46258179 16.28082397 -12.46258179 16.28082397 -11.91430664 15.54711914 C-10.29786735 13.38495777 -8.68020021 11.22371811 -7.0625 9.0625 C-6.49853516 8.30775391 -5.93457031 7.55300781 -5.35351562 6.77539062 C-4.81533203 6.05673828 -4.27714844 5.33808594 -3.72265625 4.59765625 C-3.22515869 3.93258057 -2.72766113 3.26750488 -2.21508789 2.58227539 C-1 1 -1 1 0 0 Z " transform="translate(403,141)"/>
				<path key='company-path[1]' className='fill-filling' d="M0 0 C4.24695972 0.30335427 6.26344799 2.98277599 9 6 C9.61875 6.66 10.2375 7.32 10.875 8 C12 10 12 10 11.88671875 12.3046875 C10.6976287 15.9191022 8.72224064 17.56350861 5.9375 20.125 C3.19723902 22.59010804 3.19723902 22.59010804 1 25 C1 25.99 1 26.98 1 28 C2.83797376 29.59924008 2.83797376 29.59924008 5.1875 31.125 C13.59982077 37.45401876 16.93931237 46.87575206 19 57 C19.3744315 62.03402352 19.27952159 66.96313061 19 72 C18.91685547 73.57587891 18.91685547 73.57587891 18.83203125 75.18359375 C18.47407849 80.16116323 17.58980518 84.260245 16 89 C15.51720625 91.28663853 15.05970512 93.57873412 14.625 95.875 C13.2719067 102.3157241 11.4570092 107.42478537 7.73828125 112.8359375 C4.99152052 116.87771755 3.52682004 120.32962374 2.4375 125.125 C0.80233184 132.26434074 -2.03021525 136.09410313 -7.3125 141.0625 C-11.01640069 144.63909805 -13.30742949 148.09421128 -15.625 152.6875 C-18.74495617 158.86271278 -21.89280042 162.52849041 -27.78515625 166.07421875 C-31.88835909 168.64435679 -33.73903335 171.01965931 -35.9375 175.375 C-40.43363785 184.18979657 -46.85495038 188.15302924 -55.4765625 192.59375 C-58.21800895 194.00636583 -58.21800895 194.00636583 -61 196.625 C-64.5656283 199.44778907 -67.92883435 200.54312927 -72.2109375 201.95703125 C-74.8878016 202.95804345 -77.03258048 204.16146925 -79.4375 205.6875 C-83.96396718 208.36743003 -88.1068552 208.63271928 -93.30078125 208.76171875 C-96.10214333 209.00901699 -97.52702473 209.76110206 -100 211 C-102.734375 211.3359375 -102.734375 211.3359375 -105.75 211.375 C-106.73484375 211.40335938 -107.7196875 211.43171875 -108.734375 211.4609375 C-111.8271726 211.0243943 -113.16524737 210.4627957 -115.796875 208.97265625 C-121.12075897 206.11395651 -126.07256364 206.80668011 -131.93359375 207.24414062 C-138.19549293 207.51308767 -142.25430481 206.18282393 -147 202 C-151.7806103 195.47511297 -153.87695758 187.90973806 -155 180 C-155.42990234 180.37294189 -155.85980469 180.74588379 -156.30273438 181.13012695 C-173.79820693 196.22879608 -193.40088868 207.43265136 -216 213 C-216.73686035 213.19174805 -217.4737207 213.38349609 -218.23291016 213.58105469 C-241.74375504 219.57238618 -266.27306374 219.51623042 -287.95703125 207.86328125 C-293.59503496 204.41099913 -299.35549922 200.78356573 -301 194 C-300.56171875 194.37511719 -300.1234375 194.75023437 -299.671875 195.13671875 C-283.02118502 208.57233648 -262.33843349 208.30456829 -242 207 C-234.77484613 206.11364283 -227.89840699 204.28370939 -221 202 C-220.2280127 201.74831055 -219.45602539 201.49662109 -218.66064453 201.23730469 C-198.02054661 194.30934275 -179.77112354 182.9502291 -164 168 C-163.14148438 167.19433594 -162.28296875 166.38867188 -161.3984375 165.55859375 C-149.37856915 153.95633412 -138.32293832 138.27361695 -137.82421875 120.9765625 C-137.78569326 117.314501 -137.86664191 113.65993865 -138 110 C-135.525 112.475 -135.525 112.475 -133 115 C-132.64808594 114.39115967 -132.29617188 113.78231934 -131.93359375 113.1550293 C-118.86076295 90.60396951 -118.86076295 90.60396951 -112 82 C-111.28094482 81.09241943 -111.28094482 81.09241943 -110.54736328 80.16650391 C-104.59043763 72.66646465 -98.5317874 65.28730892 -92.046875 58.234375 C-89.96615109 55.96305043 -87.95361043 53.64118569 -85.9375 51.3125 C-82.23160392 47.15608322 -78.32166745 43.50680759 -74 40 C-73.00742187 39.19304687 -72.01484375 38.38609375 -70.9921875 37.5546875 C-64.33741264 32.24243766 -57.64424626 27.81071381 -50 24 C-49.15695312 23.54882812 -48.31390625 23.09765625 -47.4453125 22.6328125 C-38.17969908 17.75465465 -28.59384824 14.68533124 -18 15 C-15.14453125 15.98828125 -15.14453125 15.98828125 -13 17 C-12.46258179 16.28082397 -12.46258179 16.28082397 -11.91430664 15.54711914 C-10.29786735 13.38495777 -8.68020021 11.22371811 -7.0625 9.0625 C-6.49853516 8.30775391 -5.93457031 7.55300781 -5.35351562 6.77539062 C-4.81533203 6.05673828 -4.27714844 5.33808594 -3.72265625 4.59765625 C-3.22515869 3.93258057 -2.72766113 3.26750488 -2.21508789 2.58227539 C-1 1 -1 1 0 0 Z " transform="translate(403,141)"/>
				<path key='company-path[2]' className='fill-white' d="M0 0 C5.9676144 4.42598768 11.38721244 9.40344954 16.71704102 14.56933594 C18.12229642 15.92984689 19.54405351 17.27325152 20.96655273 18.61572266 C28.06539932 25.44541867 28.06539932 25.44541867 28.18920898 28.99462891 C26.93139648 31.07275391 26.93139648 31.07275391 25.06420898 33.24462891 C19.40232241 40.13979771 15.41522461 47.33363101 11.52124023 55.35791016 C10.18920898 57.99462891 10.18920898 57.99462891 8.18920898 60.99462891 C5.27705737 59.63259808 2.83016664 58.02996414 0.25170898 56.11962891 C-9.94515216 49.34924337 -20.96933848 48.32195712 -32.93579102 48.49462891 C-33.61365662 48.50083252 -34.29152222 48.50703613 -34.9899292 48.51342773 C-61.53254263 48.79718089 -85.85865285 57.70523422 -108.56860352 71.22900391 C-111.81079102 72.99462891 -111.81079102 72.99462891 -114.81079102 72.99462891 C-116.41383494 70.95799977 -117.7702189 69.00275555 -119.12329102 66.80712891 C-119.51991943 66.17291016 -119.91654785 65.53869141 -120.32519531 64.88525391 C-130.59893152 48.12404795 -137.18160161 29.50960628 -133.15063477 9.76025391 C-132.23464503 7.01625002 -131.14024833 4.56280906 -129.81079102 1.99462891 C-129.32481445 1.00076172 -128.83883789 0.00689453 -128.33813477 -1.01708984 C-120.77332612 -15.27040542 -109.11194709 -22.44914669 -94.11157227 -27.16943359 C-60.86843721 -34.85049098 -26.39321915 -18.951813 0 0 Z " transform="translate(252.810791015625,182.00537109375)"/>
				<path key='company-path[3]' className='fill-filling' d="M0 0 C-2.55941819 3.04198153 -5.33874227 4.14756289 -8.99609375 5.6015625 C-10.19556641 6.09269531 -11.39503906 6.58382813 -12.63085938 7.08984375 C-15.12913824 8.10148772 -17.63238324 9.09790894 -20.13867188 10.08984375 C-31.30514092 14.68954946 -40.00232599 20.68215825 -48.38671875 29.38671875 C-58.44359734 39.44359734 -72.24704591 44.23277746 -85.3046875 49.08056641 C-91.32588752 51.32429483 -97.13695235 53.76618569 -102.91796875 56.578125 C-105.48656115 57.76312834 -108.05058668 58.83234396 -110.6796875 59.87109375 C-114.31051602 61.30577176 -117.89570821 62.81255665 -121.46484375 64.39453125 C-122.36654297 64.79220703 -123.26824219 65.18988281 -124.19726562 65.59960938 C-126.05419198 66.4215276 -127.90829033 67.24985952 -129.75976562 68.08398438 C-130.65244141 68.47521484 -131.54511719 68.86644531 -132.46484375 69.26953125 C-133.265271 69.62635986 -134.06569824 69.98318848 -134.89038086 70.35083008 C-137 71 -137 71 -140 70 C-123.97352571 55.84095836 -106.59118971 44.04325557 -87.68408203 34.06396484 C-85.98421143 33.16605225 -85.98421143 33.16605225 -84.25 32.25 C-83.1141748 31.65010254 -81.97834961 31.05020508 -80.80810547 30.43212891 C-74.10482145 26.83630203 -67.80652119 23.0164204 -61.6875 18.5 C-44.23359067 5.63087355 -21.72199752 -1.11078396 0 0 Z " transform="translate(250,251)"/>
				<path key='company-path[4]' className='fill-filling' d="M0 0 C16.52824643 1.89622005 30.48411348 7.18020556 45 15 C45.86367187 15.45503906 46.72734375 15.91007813 47.6171875 16.37890625 C56.53288258 21.18576677 64.85640305 26.83059841 72.99609375 32.83984375 C76.38029845 35.2734786 79.83361763 37.5799628 83.3125 39.875 C88.56597504 43.35318611 93.78299081 46.87640852 98.9375 50.5 C99.54698486 50.9213623 100.15646973 51.34272461 100.78442383 51.77685547 C102.22720859 52.80019924 103.61958401 53.89396562 105 55 C105 55.66 105 56.32 105 57 C105.5775 57.268125 106.155 57.53625 106.75 57.8125 C109.0325868 59.01719859 110.9737942 60.40798115 113 62 C112.67 63.65 112.34 65.3 112 67 C109.08784838 65.63796918 106.64095766 64.03533523 104.0625 62.125 C96.54891985 57.08315407 88.20597074 55.1826469 79.3125 54.1875 C72.45777195 53.26029041 68.22455335 50.37117803 63 46 C62.40316406 45.53980469 61.80632812 45.07960937 61.19140625 44.60546875 C57.95308112 42.06164726 55.51164624 39.24083386 53 36 C51.34730299 34.3194798 49.67885832 32.65438517 48 31 C47.23042969 30.22140625 46.46085937 29.4428125 45.66796875 28.640625 C38.18254886 21.42633056 30.15131277 16.78261621 21 12 C19.44453602 11.17072562 17.88986021 10.33997136 16.3359375 9.5078125 C8.2146091 5.16367937 8.2146091 5.16367937 0 1 C0 0.67 0 0.34 0 0 Z " transform="translate(149,176)"/>
				<path key='company-path[5]' className='fill-white' d="M0 0 C-1.12269287 0.90939331 -1.12269287 0.90939331 -2.26806641 1.8371582 C-11.10055861 9.09554026 -19.22431975 16.9462375 -27.26806641 25.06225586 C-29.38775147 27.20036228 -31.5154955 29.33019261 -33.64453125 31.45898438 C-35.02130802 32.84067299 -36.39762657 34.22281839 -37.7734375 35.60546875 C-38.39648773 36.22963181 -39.01953796 36.85379486 -39.66146851 37.49687195 C-43.41413048 41.28955802 -46.98847467 45.19611063 -50.47332764 49.2364502 C-52.55625105 51.64255858 -54.71563704 53.97500777 -56.875 56.3125 C-60.96118209 60.79312501 -64.8396613 65.39605136 -68.6484375 70.11328125 C-71.24447587 73.3001124 -73.89737988 76.43350244 -76.5625 79.5625 C-81.15081562 84.95641611 -85.61737935 90.43696004 -90 96 C-90 84.26455085 -75.82540176 69.06026782 -69 60 C-68.6086084 59.47567383 -68.2172168 58.95134766 -67.81396484 58.41113281 C-53.3777458 39.15905022 -36.3901312 22.22925978 -17 8 C-16.05511719 7.30519531 -15.11023438 6.61039063 -14.13671875 5.89453125 C-3.49848024 -1.74924012 -3.49848024 -1.74924012 0 0 Z " transform="translate(391,169)"/>
				<path key='company-path[6]' className='fill-white' d="M0 0 C1.49936304 2.99872609 0.21137016 5.08636397 -0.79003906 8.11791992 C-10.70805457 36.51484952 -26.92941708 62.41423069 -47.4921875 84.3046875 C-49.5068633 86.46999326 -51.42141841 88.66630151 -53.3125 90.9375 C-60.9402225 99.74438733 -70.15702896 107.44777318 -79 115 C-79.66 114.67 -80.32 114.34 -81 114 C-80.36191406 113.37351562 -79.72382813 112.74703125 -79.06640625 112.1015625 C-78.24011719 111.28429687 -77.41382813 110.46703125 -76.5625 109.625 C-75.73878906 108.81289063 -74.91507812 108.00078125 -74.06640625 107.1640625 C-71.96565328 105.17651485 -71.96565328 105.17651485 -71 103 C-70.34 103 -69.68 103 -69 103 C-68.65388672 102.20142578 -68.65388672 102.20142578 -68.30078125 101.38671875 C-66.59486555 98.25664519 -64.41430224 95.57934685 -62.1875 92.8125 C-61.18790564 91.55409697 -60.18924707 90.29495018 -59.19140625 89.03515625 C-58.40660889 88.04539795 -58.40660889 88.04539795 -57.60595703 87.03564453 C-52.65189636 80.75608267 -47.80808966 74.39174616 -43 68 C-42.47680176 67.30455078 -41.95360352 66.60910156 -41.41455078 65.89257812 C-27.91792792 47.84100277 -15.71660489 28.82807952 -5 9 C-3.98134499 7.16545543 -2.96088266 5.3319115 -1.9375 3.5 C-1.29119081 2.33359688 -0.64512424 1.16705892 0 0 Z " transform="translate(399,183)"/>
				<path key='company-path[7]' className='fill-filling' d="M0 0 C0.66 0 1.32 0 2 0 C1.95359375 1.13695312 1.9071875 2.27390625 1.859375 3.4453125 C1.23460516 25.10007083 9.34124278 43.37463488 23 60 C23.98206704 61.01761698 24.97516702 62.02546557 26 63 C24.90537324 66.1744176 24.01822665 66.98914157 21.0625 68.75 C18 70 18 70 15 70 C13.39695608 67.96337086 12.04057211 66.00812665 10.6875 63.8125 C10.29087158 63.17828125 9.89424316 62.5440625 9.4855957 61.890625 C1.35882764 48.63211509 -4.29355558 34.87131695 -4.4375 19.1875 C-4.44765137 18.41132324 -4.45780273 17.63514648 -4.46826172 16.83544922 C-4.38908216 11.59956152 -3.91841418 3.91841418 0 0 Z " transform="translate(123,185)"/>
				<path key='company-path[8]' className='fill-filling' d="M0 0 C0.43828125 0.37511719 0.8765625 0.75023437 1.328125 1.13671875 C7.06292317 5.764188 13.13401124 8.4138109 20 11 C19.67 12.65 19.34 14.3 19 16 C11.30239126 14.22362875 4.3071725 8.55439293 0 2 C0 1.34 0 0.68 0 0 Z " transform="translate(102,335)"/>
				<path key='company-path[9]' className='fill-filling' d="M0 0 C4 3 8 6 12 9 C11.67 9.99 11.34 10.98 11 12 C6.33648834 9.18020225 3.24908888 6.39582613 0 2 C0 1.34 0 0.68 0 0 Z " transform="translate(102,335)"/>
				<path key='company-path[10]' className='fill-white' d="M0 0 C0.99 0.33 1.98 0.66 3 1 C1.02 2.98 -0.96 4.96 -3 7 C-3.66 6.67 -4.32 6.34 -5 6 C-3.35 4.02 -1.7 2.04 0 0 Z " transform="translate(298,188)"/>
				<path key='company-path[11]' className='fill-filling' d="M0 0 C0.66 0 1.32 0 2 0 C1.45276317 3.37462715 0.9451 5.08235 -1 8 C-1.625 5.6875 -1.625 5.6875 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " transform="translate(123,185)"/>
			</svg>
			<span key='company-label' className={`${isHidden ? 'hidden tablet:flex desktop:pr-5' : 'flex pr-5'} min-w-max text-sm text-text font-bold tablet:flex pl-2 tablet:pl-0 desktop:pl-2 z-20`}>
				{company}
			</span>
		</div>
	)
}

function Space({route, item, current, name, translate, language}) {
	console.log(name)
	const icon = item.icon
	return(
		<div key={`${route}-container`} className='flex mx-auto'>
			{name === 'cv' && current ?
				<div key={`${route}-box`} className={`${current ? 'fill-primary' : 'tablet:bg-foreground fill-text'} mx-auto group hover:fill-white hover:text-white bg-transparent w-auto min-w-max rounded-md bg-foreground text-xs font-bold transition-all duration-100 scale-100 origin-bottom desktop:group-hover:text-white desktop:group-hover:bg-transparent py-1 flex flex-col desktop:flex-row items-center`}>
					<svg key={`${route}-svg`} className='p-2 h-10 w-10' xlms='http://www.w3.org/2000/svg' viewBox={icon.viewbox}>
						<path key={`${route}-path`} d={icon.path}/>
					</svg>
					<span key={`${route}-label`} className={`${current ? 'text-primary' : 'text-text'}  px-3 group-hover:text-white bg-transparent w-auto min-w-max rounded-md bg-foreground text-xs font-bold transition-all duration-100 scale-100 origin-bottom desktop:group-hover:text-white desktop:group-hover:bg-transparent`}>
						{translate(item.label, language)}
					</span>
				</div>
				: 
				<Link key={`${route}-link-box`} className={`${current ? 'fill-primary' : 'tablet:bg-foreground fill-text'} mx-auto group hover:fill-white hover:text-white bg-transparent w-auto min-w-max rounded-md bg-foreground text-xs font-bold transition-all duration-100 scale-100 origin-bottom desktop:group-hover:text-white desktop:group-hover:bg-transparent py-1 flex flex-col desktop:flex-row items-center`} to='/cv'>
					<svg key={`${route}-link-svg`} className='p-2 h-10 w-10' xlms='http://www.w3.org/2000/svg' viewBox={icon.viewbox}>
						<path key={`${route}-link-path`} d={icon.path}/>
					</svg>
					<span key={`${route}-link-label`} className={`${current ? 'text-primary' : 'text-text'}  px-3 group-hover:text-white bg-transparent w-auto min-w-max rounded-md bg-foreground text-xs font-bold transition-all duration-100 scale-100 origin-bottom desktop:group-hover:text-white desktop:group-hover:bg-transparent`}>
						{translate(item.label, language)}
					</span>
				</Link>
			}
		</div>
	)
}

function Menu({ route, menu, submenu, item, translate, language, isHidden }) {
	const [isOpen, setIsOpen] = useState(false)
	const toggleSubMenu = () => {
		setIsOpen(!isOpen)
	}
	const icon = item.icon
	const item_key = item.route
	const current = item_key === menu
	return (
		<div key={`${route}-container`} {...!isOpen ? {onMouseEnter: toggleSubMenu, onClick: toggleSubMenu} : {onMouseLeave: toggleSubMenu}} className='group/sideMenu w-full px-2 tablet:px-1 desktop:hover:px-1 flex flex-col'>
			<div key={`${route}-box`} {...isOpen ? {onClick: toggleSubMenu} : null} className={`${item.hasOwnProperty('children') && isOpen ? 'py-1' : 'py-1 tablet:py-2.5 desktop:py-1'} ${isHidden ? 'hidden tablet:flex tablet:sideMenu desktop:sideMenuModal' : 'flex sideMenuModal'} ${current ? 'bg-background fill-primary text-primary' : 'bg-foreground fill-text text-text'} z-20 relative`}>
				<svg key={`${route}-svg`} className='p-2 tablet:p-1 h-8 w-8 tablet:h-8 tablet:w-8' xlms='http://www.w3.org/2000/svg' viewBox={icon.viewbox} >
					<path key={`${route}-path`} d={icon.path}/>
				</svg>
				<span key={`${route}-label`} className='text-text'>
					{translate(item.label, language)}
				</span>
				<svg key={`${route}-arrow`} className={`${item.hasOwnProperty('children') ? 'scale-100' : 'scale-0'} ${isHidden ? 'tablet:absolute desktop:static tablet:left-0 tablet:top-3' : 'static'} ${isOpen ? 'rotate-0' : 'rotate-180'} bg-transparent shadow-none fill-text py-1 h-7 w-7 z-10`} xlms='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' >
					<path key={`${route}-arrow-path`} d='M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z'/>
				</svg>
			</div>
			{item.hasOwnProperty('children') && isOpen && !isHidden ? 
				item.children.map((item, index) => (
					<Submenu route={`${route}[${index}]`} parent_key={item_key} submenu={submenu} menu={menu} item={item} translate={translate} language={language}/>
				)) : null
			}
		</div>
	)
}

function Submenu({route, parent_key, submenu, item, translate, language}) {
	const icon = item.icon
	return (
		<div key={`${route}-container`} className='subMenu'>
			<svg key={`${route}-svg`} className='p-2 tablet:p-1 desktop:p-2 h-7 w-7' xlms='http://www.w3.org/2000/svg' viewBox={icon.viewbox}>
				<path key={`${route}-path`} d={icon.path}/>
			</svg>
			<span key={`${route}-label`} className='pl-2'>
				{item.name}
			</span>
		</div>
	)
}