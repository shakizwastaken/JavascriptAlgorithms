export interface NodeProps {
  data: any;
  next?: Node;
  previous?: Node;
}

export class Node {
  private data: any;
  private next?: Node;
  private previous?: Node;

  constructor({ data, next, previous }: NodeProps) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }

  getData = () => {
    return this.data;
  };

  getNext = () => {
    return this.next;
  };

  getPrevious = () => {
    return this.previous;
  };

  setData = (data: any) => {
    this.data = data;
  };

  setPrevious = (node: Node | undefined) => {
    this.previous = node;
  };

  setNext = (node: Node | undefined) => {
    this.next = node;
  };
}

export class LinkedList {
  private head: Node;
  private tail: Node;

  public length: number;

  constructor(...data: any) {
    //init tail and head
    this.head = new Node({
      data: data[0],
    });
    this.tail = this.head;

    this.length = 1;

    this._init(...data);
  }

  //initialize linked list
  private _init(...data: any) {
    for (let i = 1; i < data.length; i++) {
      //init nodes
      let current = this.put(data[i]);
      current.setPrevious(this.tail);

      //update previous node
      this.tail.setNext(current);
    }
  }

  //get node from index
  get = (index: number) => {
    let i = 0;

    let current: Node | undefined = this.head;

    while (i < index && current?.getNext()) {
      current = current?.getNext();
    }

    return current;
  };

  //add node to end of list
  put = (data: any) => {
    //create node
    let node = new Node({ data, previous: this.tail });

    //update tail node
    this.tail.setNext(node);

    //set as new last element
    this.tail = node;

    this.length = this.length + 1;

    //return node
    return this.tail;
  };

  //delete node from list by index
  remove = (index: number) => {
    let node = this.get(index);

    let prev = node?.getPrevious();
    let next = node?.getNext();

    next?.setPrevious(prev);
    prev?.setNext(next);

    return node;
  };

  //returns first element of linked list
  getHead = () => this.head;

  //returns last element of linked list
  getTail = () => this.tail;
}

let linkedList = new LinkedList(1, 4, 5);

linkedList.put(3);

let current: Node | undefined = linkedList.getHead();

console.log(linkedList.length);
