
interface SortSVGProps  {
	color?: string,
    height?: number , 
    width?: number,
	other?: unknown
}


export default function SortSVG({ color = '#78778B', width  = 16 , height = 16, ...other } : SortSVGProps) {
	return (
		<svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...other}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.01163 1H4.41163V13H3.01163V1Z" fill={color} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.71699 4L6.71133 3.00566L3.70568 2.62763e-07L0.700023 3.00566L1.69437 4L3.70568 1.98869L5.71699 4Z"
            fill={color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.69436 11L0.700012 11.9943L3.70567 15L6.71132 11.9943L5.71698 11L3.70567 13.0113L1.69436 11Z"
            fill={color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2205 4.78228C13.6045 4.39828 13.7965 3.93322 13.7965 3.38708C13.7965 2.84095 13.6045 2.37802 13.2205 1.99828C12.8365 1.61855 12.3757 1.42868 11.8381 1.42868C11.3005 1.42868 10.8397 1.61855 10.4557 1.99828C10.0717 2.37802 9.87974 2.84095 9.87974 3.38708C9.87974 3.93322 10.0717 4.39615 10.4557 4.77588C10.8397 5.15562 11.3005 5.34548 11.8381 5.34548C12.3757 5.34548 12.8365 5.15775 13.2205 4.78228ZM15.1917 0.391881V6.38228H13.8349V5.53748C13.2973 6.20308 12.5549 6.53588 11.6077 6.53588C10.7544 6.53588 10.0291 6.23295 9.43174 5.62708C8.8344 5.02121 8.53574 4.27455 8.53574 3.38708C8.53574 2.49961 8.8344 1.75295 9.43174 1.14708C10.0291 0.541212 10.7544 0.238281 11.6077 0.238281C12.5549 0.238281 13.2973 0.571078 13.8349 1.23668V0.391881H15.1917Z"
            fill={color}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6648 7.92773L14.8142 8.34587L11.8275 13.4531H14.9934V14.9165H9.63228L9.46802 14.5133L12.38 9.3912H9.96082V7.92773H14.6648Z"
            fill={color}
        />
    </svg>
	);
}
