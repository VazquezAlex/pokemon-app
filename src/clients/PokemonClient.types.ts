export interface APIPokemonType {
    abilities?: AbilitiesEntity[] | null;
    base_experience: number;
    forms?: NameURLObject[] | null;
    game_indices?: (GameIndicesEntity)[] | null;
    height: number;
    held_items?: (null)[] | null;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves?: (MovesEntity)[] | null;
    name: string;
    order: number;
    past_abilities?: (null)[] | null;
    past_types?: (null)[] | null;
    species: NameURLObject;
    sprites: Sprites;
    stats?: (StatsEntity)[] | null;
    types?: (TypesEntity)[] | null;
    weight: number;
}

interface AbilitiesEntity {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface NameURLObject {
    name: string;
    url: string;
}

interface GameIndicesEntity {
    game_index: number;
    version: NameURLObject;
}

interface MovesEntity {
    move: NameURLObject;
    version_group_details?: (VersionGroupDetailsEntity)[] | null;
}

interface VersionGroupDetailsEntity {
    level_learned_at: number;
    move_learn_method: NameURLObject;
    version_group: NameURLObject;
}

interface Sprites {
    back_default: string;
    back_female?: null;
    back_shiny: string;
    back_shiny_female?: null;
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
    other: Other;
    versions: Other;
}

interface Other {
    [key: string]: {
        [key: string]: string;
    }
}

interface StatsEntity {
    base_stat: number;
    effort: number;
    stat: NameURLObject;
}

interface TypesEntity {
    slot: number;
    type: NameURLObject;
}
  