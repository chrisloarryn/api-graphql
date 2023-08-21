import { Box } from '@mui/material';
import LabeledText, { LabeledTextProps } from './labeled-text';

const spacing = 1.25;

interface LabeledTextListProps {
	data: Array<LabeledTextProps>;
}

function LabeledTextList({ data }: LabeledTextListProps) {
	return (
		<Box margin={-spacing} display="flex" flexWrap="wrap">
			{data.map((item) => {
				return (
					<Box key={item.label} padding={spacing}>
						<LabeledText {...item} />
					</Box>
				);
			})}
		</Box>
	);
}

export default LabeledTextList;