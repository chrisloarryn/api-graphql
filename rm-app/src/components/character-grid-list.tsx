import CharacterGridListItem from './character-grid-list-item';
import BaseGridList, { BaseGridListProps } from '@/common/base-grid-list';
import { CharacterGridList_CharacterFragment, Maybe } from '@/gql/graphql';

type ListItem = Maybe<CharacterGridList_CharacterFragment>;

function renderItem(character: ListItem) {
	if (character?.id) {
		return <CharacterGridListItem key={character.id} character={character} />;
	}

	return null;
}

type CharacterGridListProps = Pick<
	BaseGridListProps<ListItem>,
	'loading' | 'loadingRef' | 'items'
>;

function CharacterGridList(props: CharacterGridListProps) {
	return <BaseGridList renderItem={renderItem} {...props} />;
}

export default CharacterGridList;