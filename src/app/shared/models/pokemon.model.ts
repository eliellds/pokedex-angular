export interface IPodemon {
  status: {
    id: number;
    types: [{ type: { name: string } }];
    sprites: { other: { dream_world: { front_default: string } } };
  };
  name: string;
}
