import clsx from 'clsx';
import ColumRecordSVG from '../../components/ColumRecordSVG';

const ManageColumnRecord = () => {

	return (
		<div
			className={clsx(
				'w-8 h-8 rounded flex items-center justify-center  hover:bg-divider cursor-pointer',
			)}>
			<ColumRecordSVG height={18} width={18}  />
		</div>
	);
};

export default ManageColumnRecord;
