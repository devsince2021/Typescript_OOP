{
    interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: T) {
      const node: StackNode<T> = {
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

  const stack = new StackImpl<string>(10);

  const stack2 = new StackImpl<number>(10);
}