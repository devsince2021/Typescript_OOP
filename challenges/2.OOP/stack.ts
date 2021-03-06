interface StackClass {
  // readonly size: number;
  push(string: string): void;
  pop(): string | null;
}

export default class Stack implements StackClass {
  private data: string | null;
  private next: Stack | null;

  constructor() {
    this.data = null;
    this.next = null;
  }

  get log(): string | null {
    return this.data;
  }

  push(string: string) {
    if (!this.data) {
      this.data = string;
      return;
    } else if (!this.next) {
      const tail = new Stack();
      tail.push(string);
      this.next = tail;
      return;
    }

    this.next.push(string);
    return;
  }

  pop(): string | null {
    debugger;
    if (!this.next && !this.data) throw new Error('It is an empty stack!');
    else if (!this.next) {
      const temp = this.data;
      this.data = null;
      return temp;
    }

    const string = this.next.pop();
    if (!this.next.data) this.next = null;
    return string;
  }
}
