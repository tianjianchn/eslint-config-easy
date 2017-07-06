
// this is inline comment
/* this is cross-lines comment*/

// declare vars
let a,
  b = 2,
  c;
console.log(a, b, c);

// different data type
b = 1 + 2;
a = { key: 'value', 'a-b': 2, c: 3 };
a = { key: 'value' };
a = [1, 2];
a = function f() { console.log(a); };
a = () => {};
a = 'end spaces';

c = a.b().c().f()
  .d()
  .e();
c = a.b.c().d();

const { x } = a;
const { y, z, u } = a;
console.log(x, y, z, u);

// if/else statements
if (a === 1) { console.log(a); } // allow single line if
if (a === 1) console.log(a);
if (a === 1) {
  console.log(a);
} else {
  console.log(b);
}

function update(
  {
    id, name, email, remark, field2, field3,
  } = {}, { other1, other2 }) {
}
update();

// function
function f1(p1, p2, p3) { // allow not used params
  console.log(p3);
  p1 = 'new value'; // allow reassign param
  p1.a = 'new value'; // allow reassign param prop
}
f1((err) => {
  if (err) console.log(err);// err param in callback must be handled
});

// async/await
(async function f2() {
  return f1();
}());

// class
class A extends Object {
  m1 = 0;
  static m2 = 0

  constructor() {
    super();
    this.m1 = 1;
  }
  f1() {
    this.m1 = 2;
  }
  static f2() {
    console.log('hello');
  }
  async f3() {
    return this.f1();
  }
}
console.log(A);

// react
const React = {};// require('react');

class MyComponent extends React.Component {
  getInitialState() {
    return {
      name: 'this',
    };
  }
  onInput = (name) => { // use property initializer to avoid bind externaly
    this.setState({
      name,
    });
  }
  render() {
    return (
      <div className="rich">
        <input
          title="Input your name"
          className="editor"
          onInput={this.onInput}
        />
      </div>
    );
  }
}
console.log(MyComponent);

