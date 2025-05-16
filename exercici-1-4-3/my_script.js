const object1 = {
  name: 'Alice',
  age: 30,
  city: 'Barcelona'
};

const object2 = { ...object1 };

object2.age = 35;

console.log('object1:', object1);
console.log('object2:', object2);