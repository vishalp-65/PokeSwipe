export type TypePokemonRes =
    | {
          abilities: Record<"ability", Record<"name", string>>[];
          name: string;
          sprites: Record<
              "other",
              Record<"dream_world", Record<"front_default", string>>
          >;
      }
    | undefined;
