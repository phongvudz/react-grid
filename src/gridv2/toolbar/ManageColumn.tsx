import React from 'react';
import ColumnPermissionSVG from '../../components/ColumnPermissionSVG';
import clsx from 'clsx';

const ManageColumn = () => {
	const showSpellcheck = false;

	return (
		<div
			className={clsx(
				'w-8 h-8 rounded flex items-center justify-center  hover:bg-divider cursor-pointer',
				{
					'bg-fuchsiaBlue bg-opacity-30': showSpellcheck,
				},
			)}>
			<ColumnPermissionSVG height={18} width={18} />
		</div>
	);
};

export default ManageColumn;
