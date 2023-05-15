import clsx from 'clsx';
import QuickFilterSVG from '../../components/QuickFilterSVG';

const ManageFilter = () => {

	return (
		<div
			className={clsx(
				'w-8 h-8 rounded flex items-center justify-center  hover:bg-divider cursor-pointer',
			)}>
			<QuickFilterSVG height={18} width={18}  />
		</div>
	);
};

export default ManageFilter;
