import clsx from 'clsx';
import TagSVG from '../../components/SortSVG';

const ManageTag = () => {

	return (
		<div
			className={clsx(
				'w-8 h-8 rounded flex items-center justify-center  hover:bg-divider cursor-pointer',
			)}>
			<TagSVG height={18} width={18}  />
		</div>
	);
};

export default ManageTag;
