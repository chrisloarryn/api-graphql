export type Maybe<T> = T | null | undefined;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The `Upload` scalar type represents a file upload. */
	Upload: any;
};

export type Character = {
	__typename?: 'Character';
	/** Time at which the character was created in the database. */
	created?: Maybe<Scalars['String']>;
	/** Episodes in which this character appeared. */
	episode: Array<Maybe<Episode>>;
	/** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
	gender?: Maybe<Scalars['String']>;
	/** The id of the character. */
	id?: Maybe<Scalars['ID']>;
	/**
	 * Link to the character's image.
	 * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
	 */
	image?: Maybe<Scalars['String']>;
	/** The character's last known location */
	location?: Maybe<Location>;
	/** The name of the character. */
	name?: Maybe<Scalars['String']>;
	/** The character's origin location */
	origin?: Maybe<Location>;
	/** The species of the character. */
	species?: Maybe<Scalars['String']>;
	/** The status of the character ('Alive', 'Dead' or 'unknown'). */
	status?: Maybe<Scalars['String']>;
	/** The type or subspecies of the character. */
	type?: Maybe<Scalars['String']>;
};

export type CharacterGridList_CharacterFragment = { __typename?: 'Character', id?: number | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> };
export type CharacterGridListItem_CharacterFragment = { __typename?: 'Character', id?: number | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> };
export type CharacterCard_CharacterFragment = { __typename?: 'Character', id?: number | null | undefined, name?: string | null | undefined, image?: string | null | undefined, episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> };
