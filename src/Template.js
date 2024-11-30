import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Profile from './Profile';
import Main from './Main';
import Footer from './Footer';

export default function Template({response}) {
	const sidebar = response?.sidebar;
	const sidebarCheck = response.hasOwnProperty('sidebar') && Array.isArray(sidebar);
	const company = response?.company ?? {};
	const navbar = response?.navbar;
	const navbarCheck = response.hasOwnProperty('navbar') && Array.isArray(navbar);
	const profile = response?.profile;
	const profileCheck = response.hasOwnProperty('profile') && typeof profile === 'object';
	const main = response?.main;
	const mainCheck = response.hasOwnProperty('main') && Array.isArray(main);
	const bottom = response?.bottom;
	const bottomCheck = response.hasOwnProperty('bottom') && Array.isArray(bottom);
	const duplicated = navbarCheck && bottomCheck;
	return (
		<div className='flex flex-row'>
			{sidebarCheck ? <Sidebar company={company} sidebar={sidebar} duplicated={duplicated}/> : null}
			<div className='flex-col w-full z-0'>
				<div className='flex flex-row'>
					{navbarCheck ? <Navbar content={navbar} duplicated={duplicated}/> : null}
					{profileCheck ? <Profile content={profile} duplicated={duplicated}/> : null}
				</div>
				{mainCheck ? <Main content={main} duplicated={duplicated}/> : null}
				{bottomCheck ? <Footer content={bottom}/> : null}
			</div>
		</div>
	);
}