import BaseCard from '@/common/base-card';
import BaseImage, { imageProps } from '@/common/base-image';
import {
	CharacterCard_CharacterFragment,
} from '@/gql/graphql';
import { isOfType, UNKNOWN } from '@/common/common-utils';
import LabeledTextList from '@/common/labeled-text-list';
import { CardContent, CardHeader } from '@mui/material';

function hasSpecs(
	character:
		| CharacterCard_CharacterFragment
		| CharacterCard_CharacterWithSpecsFragment,
): character is CharacterCard_CharacterWithSpecsFragment {
	return isOfType<CharacterCard_CharacterWithSpecsFragment>(character, [
		'status',
		'species',
		'origin',
		'gender',
		'location',
	]);
}

type CharacterCardProps = {
	titleAs?: React.ElementType;
	character:
	| CharacterCard_CharacterFragment
	| CharacterCard_CharacterWithSpecsFragment;
	href?: string;
	imgPriority?: boolean;
};

function CharacterCard({
	titleAs,
	character,
	href,
	imgPriority,
}: CharacterCardProps) {
	const { episode } = character;
	return (
		<BaseCard href={href}>
			{character.image && character.name && (
				<BaseImage
					src={character.image}
					alt={character.name}
					priority={imgPriority}
					{...imageProps.responsive('1')}
				/>
			)}
			<CardHeader
				title={character.name}
				titleTypographyProps={{ component: titleAs }}
				subheader={`Episodes: ${episode?.length}`}
			/>
			{hasSpecs(character) ? (
				<CardContent>
					<LabeledTextList
						data={[
							{ label: 'Status', text: character.status },
							{ label: 'Species', text: character.species },
							{ label: 'Gender', text: character.gender },
							{
								label: 'Origin',
								text: character.origin?.name ?? UNKNOWN,
							},
							{
								label: 'Location',
								text: character.location?.name ?? UNKNOWN,
							},
						]}
					/>
				</CardContent>
			) : null}
		</BaseCard>
	);
}

export default CharacterCard;