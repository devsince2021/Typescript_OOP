type Video = {
  title: string;
  author: string;
  description: string;
};

type Animal = {
  name: string;
  age: number;
};

type Optional<T> = {
  [P in keyof T]?: T[P];
}

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}

type VideoOption = Optional<Video>;

const videoOp: VideoOption = {
  title: 'hi',
};

const animalOptional: Optional<Animal> = {
  name: 'hi',
  age: 3
}

animalOptional.name = 'bye';

const animalRO: ReadOnly<Animal> = {
  name: 'test',
  age: 3,
};

type Proxy


// animalRO.age = 4;
// type VideoOptional = {
//   title?: string;
//   author?: string;
// };

// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
//   readonly description: string;
// };