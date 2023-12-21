import { Pokemon } from "../../types/pokemon";

export type RootStackParamList = {
    Home: undefined,
    Detail: { pokemon: Pokemon },
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}