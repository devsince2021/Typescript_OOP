type ToDo = {
  title: string;
  description: string;
};

const todo1: ToDo = {
  title: 'hi',
  description: 'hi'
};

const todo2: Readonly<ToDo> = {
  title: 'bye',
  description: 'bye',
}

const todo3: Partial<ToDo> = {
  description: 'partial'
};

const todo4: Partial<ToDo> = {
  title: 'partial'
};

type Optional = {
  name: string;
  age: number;
  marriaged?: boolean;
};

const option: Optional = {
  name: 'han',
  age: 32,
}

const option2: Optional = {
  name: 'han',
  age: 2,
  marriaged: true,
}

const option3: Partial<Optional> = {
  age: 3,
};

const option4: Required<Optional> ={
  name: 'han',
  age: 3,
  marriaged: true
}