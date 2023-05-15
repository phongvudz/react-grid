import clsx from 'clsx';
import PathTagSVG from '../../components/PathTagSVG';

const ManagePathTag = () => {

	return (
		<div
			className={clsx(
				'w-8 h-8 rounded flex items-center justify-center  hover:bg-divider cursor-pointer',
			)}>
			<PathTagSVG height={18} width={18}  />
		</div>
	);
};

export default ManagePathTag;
