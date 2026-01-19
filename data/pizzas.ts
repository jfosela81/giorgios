export interface Pizza {
  id: string;
  name: string;
  ingredients: string;
  image: string; // URL placeholder por ahora
}

export const pizzas: Pizza[] = [
  {
    id: "1",
    name: "Ketitos",
    ingredients: "Tomate y Mozzarella, pepperoni, bacon crujiente y York",
    image: "https://via.placeholder.com/400x300/FF6B6B/ffffff?text=Ketitos",
  },
  {
    id: "2",
    name: "Infantil",
    ingredients: "Tomate y Mozzarella, salchichas y York",
    image: "https://via.placeholder.com/400x300/4ECDC4/ffffff?text=Infantil",
  },
  {
    id: "3",
    name: "Bella Italia",
    ingredients: "Tomate y Mozzarella, cherrys partidos, mortadela, pistachos y ricotta",
    image: "https://via.placeholder.com/400x300/45B7D1/ffffff?text=Bella+Italia",
  },
  {
    id: "4",
    name: "Zanots Choice",
    ingredients: "Tomate y Mozzarella. En crudo: rúcula, aceite de oliva, mortadela y burrata",
    image: "https://via.placeholder.com/400x300/96CEB4/ffffff?text=Zanots+Choice",
  },
  {
    id: "5",
    name: "Fugazzita",
    ingredients: "Tomate y mozzarella, York, cebolla y pesto",
    image: "https://via.placeholder.com/400x300/FFEAA7/333333?text=Fugazzita",
  },
  {
    id: "6",
    name: "Mapis",
    ingredients: "Tomate y mozzarella, pollo marinado, pimiento rojo y verde y cebolla caramelizada",
    image: "https://via.placeholder.com/400x300/DFE6E9/333333?text=Mapis",
  },
  {
    id: "7",
    name: "Serrana",
    ingredients: "Cherrys horneados con aceite, sal y albahaca de base con mozzarella. En crudo: jamón serrano",
    image: "https://via.placeholder.com/400x300/FF7675/ffffff?text=Serrana",
  },
  {
    id: "8",
    name: "Calzone",
    ingredients: "Ricotta, mozzarella, albahaca y jamón York. Tomate y parmesano por arriba al cerrar",
    image: "https://via.placeholder.com/400x300/FD79A8/ffffff?text=Calzone",
  },
  {
    id: "9",
    name: "Aroma A Roma",
    ingredients: "Tomate y mozzarella. Cherrys, aceitunas negras y pesto",
    image: "https://via.placeholder.com/400x300/6C5CE7/ffffff?text=Aroma+A+Roma",
  },
  {
    id: "10",
    name: "Yayos",
    ingredients: "Base de philadelphia y mozzarella. En crudo, salmón ahumado",
    image: "https://via.placeholder.com/400x300/FD79A8/ffffff?text=Yayos",
  },
  {
    id: "11",
    name: "Ceporrina",
    ingredients: "Tomate y mozzarella. Pepperoni, aceitunas negras y queso feta",
    image: "https://via.placeholder.com/400x300/A29BFE/ffffff?text=Ceporrina",
  },
  {
    id: "12",
    name: "Digna",
    ingredients: "Tomate y mozzarella. Atún y bacón",
    image: "https://via.placeholder.com/400x300/74B9FF/ffffff?text=Digna",
  },
];
