const selCmpt1 = {
  init: [10, 20, 30]
};

const selCmpt2 = {
  // No init property
};

const selCmpt3 = {
  init: null
};

const init1 = selCmpt1.init ? selCmpt1.init[0] : null; // init1 will be 10
const init2 = selCmpt2.init ? selCmpt2.init[0] : null; // init2 will be null
const init3 = selCmpt3.init ? selCmpt3.init[0] : null; // init3 will be null

console.log(init1); // Output: 10
console.log(init2); // Output: null
console.log(init3); // Output: null
