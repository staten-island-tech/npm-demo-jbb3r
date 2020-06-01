export const calc = {
    add: function (x,y) {
        return x + y;
    },
};
export const DOMSelectors = {
    header: document.querySelector
}
console.log(calc.add(2,6));