
interface QuickFilterSVGProps  {
	color?: string,
    height?: number , 
    width?: number,
	other?: unknown
}


export default function QuickFilterSVG({ color = '#78778B', width  = 16 , height = 16, ...other } : QuickFilterSVGProps) {
	return (
		<svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...other}>
            <path
                d="M6.22222 13.3327H9.77778V11.5549H6.22222V13.3327ZM0 2.66602V4.44379H16V2.66602H0ZM2.66667 8.88824H13.3333V7.11046H2.66667V8.88824Z"
                fill={color}
            />
        </svg>
	);
}
