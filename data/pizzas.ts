export interface Pizza {
  id: string;
  name: string;
  ingredients: string;
  image: any; // Para require() de imágenes locales
}

export const pizzas: Pizza[] = [
  {
    id: "1",
    name: "Ketitos",
    ingredients: "Tomate y Mozzarella, pepperoni, bacon crujiente y York",
    image: require("../assets/images/01-pizza-ketitos.jpg"),
  },
  {
    id: "2",
    name: "Infantil",
    ingredients: "Tomate y Mozzarella, salchichas y York",
    image: require("../assets/images/02-pizza-infantil.jpg"),
  },
  {
    id: "3",
    name: "Bella Italia",
    ingredients: "Tomate y Mozzarella, cherrys partidos, mortadela, pistachos y ricotta",
    image: require("../assets/images/03-pizza-bella-italia.jpg"),
  },
  {
    id: "4",
    name: "Zanots Choice",
    ingredients: "Tomate y Mozzarella. En crudo: rúcula, aceite de oliva, mortadela y burrata",
    image: require("../assets/images/04-pizza-zanotas-choice.jpg"),
  },
  {
    id: "5",
    name: "Fugazzita",
    ingredients: "Tomate y mozzarella, York, cebolla y pesto",
    image: require("../assets/images/05-pizza-fugazzita.jpg"),
  },
  {
    id: "6",
    name: "Mapis",
    ingredients: "Tomate y mozzarella, pollo marinado, pimiento rojo y verde y cebolla caramelizada",
    image: require("../assets/images/06-pizza-mapis.jpg"),
  },
  {
    id: "7",
    name: "Serrana",
    ingredients: "Cherrys horneados con aceite, sal y albahaca de base con mozzarella. En crudo: jamón serrano",
    image: require("../assets/images/07-pizza-serrana.jpg"),
  },
  {
    id: "8",
    name: "Calzone",
    ingredients: "Ricotta, mozzarella, albahaca y jamón York. Tomate y parmesano por arriba al cerrar",
    image: require("../assets/images/08-pizza-calzone.jpg"),
  },
  {
    id: "9",
    name: "Aroma A Roma",
    ingredients: "Tomate y mozzarella. Cherrys, aceitunas negras y pesto",
    image: require("../assets/images/09-pizza-aroma-a-roma.jpg"),
  },
  {
    id: "10",
    name: "Yayos",
    ingredients: "Base de philadelphia y mozzarella. En crudo, salmón ahumado",
    image: require("../assets/images/10-pizza-yayos.jpg"),
  },
  {
    id: "11",
    name: "Ceporrina",
    ingredients: "Tomate y mozzarella. Pepperoni, aceitunas negras y queso feta",
    image: require("../assets/images/11-pizza-ceporrina.jpg"),
  },
  {
    id: "12",
    name: "Digna",
    ingredients: "Tomate y mozzarella. Atún y bacón",
    image: require("../assets/images/12-pizza-digna.jpg"),
  },
];
