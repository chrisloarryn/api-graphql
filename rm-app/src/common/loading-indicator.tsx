import { CircularProgress, Box } from '@mui/material';
import { forwardRef } from 'react';

type LoadingIndicatorProps = React.PropsWithChildren<{
	loading: boolean | undefined;
}>;

const LoadingIndicator = forwardRef<
	React.ComponentRef<typeof Box>,
	LoadingIndicatorProps
>(function LoadingIndicator({ loading, children }, ref) {
	if (!loading) {
		return children;
	}

	return (
		<Box ref={ref} display="flex" justifyContent="center" my={2} flexGrow={1}>
			<CircularProgress size={48} color="secondary" />
		</Box>
	);
});

export default LoadingIndicator;