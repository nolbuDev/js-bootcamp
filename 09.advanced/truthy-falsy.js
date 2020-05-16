const products = [];
const product = products[0];

// Truthy - Values that resolves to true in boolean context
// Falsy - Values that resolves to false in boolean context
//       - false, 0, empy string, null, undefined, NaN

if (product) {
    console.log('Product found');
} else {
    console.log('Product not found');
}
