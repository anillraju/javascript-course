class Stack {

	constructor() {
		this._stack = [];
	}

	push(elet) {
		this._stack.push(elet);
		console.log("current stack has : " + this._stack);
	}

	pop() {
		if (this._stack.length > 0) {
			return this._stack.pop();
		} else {
			console.log("Stack is empty");
		}
	}

	top() {
		console.log("Top element is " + this._stack[this._stack.length - 1]);
	}

}


var stack = new Stack();

stack.push("hi");
stack.push("anil");

stack.pop();

stack.push("anil1");

stack.pop();

stack.push("anil2");

stack.pop();

stack.pop();
stack.pop();