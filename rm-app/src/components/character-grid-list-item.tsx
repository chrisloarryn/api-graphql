import { Grid } from '@mui/material';
import { CharacterGridListItem_CharacterFragment } from '@/gql/graphql';
import CharacterCard from './character-card';


interface CharacterGridListItemProps {
	character: CharacterGridListItem_CharacterFragment;
}

function CharacterGridListItem({ character }: CharacterGridListItemProps) {
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<CharacterCard
				character={character}
				href={'/'}
			/>
		</Grid>
	);
}

export default CharacterGridListItem;