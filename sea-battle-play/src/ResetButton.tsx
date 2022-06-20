export const ResetButton = ({ reset }: { reset: () => void }) => {
	return ( 
		<button type='button' onClick={reset}>
			Reset
		</button> 
	);
}
