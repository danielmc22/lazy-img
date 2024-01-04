const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum //forma de sacar un # random entre un rango especifico en este caso para sacar una imagen random de un total de 120 imgs

const createImageNode = () => {
const container = document.createElement('div');
container.className = 'p-4';
  const imagen = document.createElement('img');
  imagen.className = "mx-auto";
  imagen.width = "270";
  imagen.src = `https://randomfox.ca/images/${random()}.jpg`; // TODO CHANGE #
  container.appendChild(imagen);

  return container;
};



const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');


const btnAdd = document.getElementById('btnAdd');

const addNewImg = () => {
  const newImage = createImageNode()
  mountNode.append(newImage)

};
btnAdd.addEventListener("click", addNewImg);
