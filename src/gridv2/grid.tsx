import Grid from './grid/Grid';
import SideBar from './sidebar/SideBar';
import Toolbar from './toolbar/Toolbar';

export default function GridV2() {
	return (
		<div className=" h-full flex min-h-screen w-screen">
			<div className="flex flex-1 flex-col w-full h-full">
				<Toolbar />
				<div className="flex-1">
					<Grid /> 
				</div>
			</div>
			<SideBar />
		</div>
	);
}
