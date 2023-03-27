export interface Topping {
  name: string;
  id: number;
}

let toppingNames = ['Pepperoni', 'Sausage', 'Beef', 'Bacon', 'Garlic', 'Onions', 'Mushrooms', 'Pineapple', 'Green Peppers', 'Spinach'];
const toppings = toppingNames.map((name, i) => ({name, id: i}));

export const getToppings = () => toppings;

export const getTopping = (id: number) => toppings.find(t => t.id === id);
