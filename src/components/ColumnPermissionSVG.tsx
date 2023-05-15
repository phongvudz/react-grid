
interface ColumnPermissionSVGProps  {
	color?: string,
	height? : number,
	width?:number,
	other?: unknown
}


export default function ColumnPermissionSVG({ color = '#78778B',height= 16 ,width= 16, ...other }:ColumnPermissionSVGProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...other}>
			<g id="Toolbar/columns">
				<path
					id="Shape"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.77079 1.00735C4.72431 0.720473 4.45386 0.5 4.12848 0.5H1.15032L1.05428 0.50646C0.740872 0.549014 0.5 0.796634 0.5 1.09525V14.9047L0.507058 14.9924C0.553549 15.2787 0.824079 15.5 1.15032 15.5H4.12848L4.22428 15.4935C4.53698 15.4508 4.77785 15.2025 4.77785 14.9047V1.09525L4.77079 1.00735ZM10.0119 1.00735C9.9654 0.720473 9.69495 0.5 9.36958 0.5H6.39141L6.29538 0.50646C5.98197 0.549014 5.7411 0.796634 5.7411 1.09525V14.9047L5.74815 14.9924C5.79465 15.2787 6.06518 15.5 6.39141 15.5H9.36958L9.46537 15.4935C9.77807 15.4508 10.0189 15.2025 10.0189 14.9047V1.09525L10.0119 1.00735ZM14.6107 0.5C14.9361 0.5 15.2065 0.720473 15.253 1.00735L15.26 1.09525V14.9047C15.26 15.2025 15.0192 15.4508 14.7065 15.4935L14.6107 15.5H11.6325C11.3071 15.5 11.0367 15.2787 10.9902 14.9924L10.9831 14.9047V1.09525C10.9831 0.796634 11.224 0.549014 11.5367 0.50646L11.6325 0.5H14.6107ZM1.79934 1.69146H3.47877V14.3095H1.79934V1.69146ZM8.71986 1.69146H7.04043V14.3095H8.71986V1.69146ZM12.2815 1.69146H13.961V14.3095H12.2815V1.69146Z"
					fill={color}
				/>
			</g>
		</svg>
	);
}
