interface StackClass {
  push(string: string): void;
  pop(): void;
}

class Stack implements StackClass {
  private data: string | null;
  private next: Stack | null;

  constructor() {
    this.data = null;
    this.next = null;
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
