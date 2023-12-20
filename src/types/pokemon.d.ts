
export type Pokemon = {
    name: string;
    base_experience: number;
    height: number;
    id: number;
    order: number;
    sprites: {
        front: string,
        back: string,
    };
    stats?: Stat[] | null;
    weight: number;
    type: {
        name: string,
        url: string;
    }
}

type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}