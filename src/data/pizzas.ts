export class Pizza {
    constructor(sizeName: string, sizeInches: number, id: number) {
        this.sizeName = sizeName;
        this.sizeInches = sizeInches;
        this.id = id;
    }

    id: number;
    sizeName: string;
    sizeInches: number;

    get area() {
        return Math.PI * ((this.sizeInches * this.sizeInches) / 4)
    }
}

const defaultPizzas = [
    new Pizza('Small', 10, 0),
    new Pizza('Medium', 12, 1),
    new Pizza('Large', 14, 2),
    new Pizza('Extra Large', 16, 3)
]

export const getDefaultPizzas = () => defaultPizzas;

//   export const getTopping = (id: number) => toppings.find(t => t.id === id);