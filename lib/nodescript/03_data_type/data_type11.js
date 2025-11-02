const obj = { foo: "hello" };
Object.freeze(obj);

obj = { foo: "good bye" }; //uncaught TypeError
