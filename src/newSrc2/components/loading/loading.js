import { Box, CircularProgress } from '@mui/material';
import React from 'react';

function Loading() {
	return (
		<Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
			<CircularProgress
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)'
				}}
				size={80}
			/>
		</Box>
	);
}

export default Loading;
