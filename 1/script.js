function fetch() {
  A = 7; // look for A, it's a let variable && we're in temporal dead zone i.e A has not been declared yet: so reference error.
  console.log(A);
}

fetch();
let A;
