interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    const node: StackNode = {
      value,
      next: this.head
    }
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head == null) { //null == undefined, null !== undefiend
      throw new Error('empty stack');
    }

    const node = this.head;
    this.head = node.next;

    this._size--;
    return node.value;
  }
}