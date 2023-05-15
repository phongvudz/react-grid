import clsx from 'clsx';
import SortSVG from '../../components/SortSVG';

const ManageSort = () => {

	return (
		<div
			className={clsx(
				'w-8 h-8 rounded flex items-center justify-center  hover:bg-divider cursor-pointer',
			)}>
			<SortSVG height={18} width={18}  />
		</div>
	);
};

export default ManageSort;
