const menu = [
  {
    id: 1,
    category: 'Hamburguesas',
    name: 'hamburguesa básica',
    price: 40,
    description:
      'Una receta de hamburguesa realmente buena producirá una hamburguesa clásica húmeda y jugosa que se puede comer sola y aun así sabe deliciosa.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/07/3839692.jpg',
  },
  {
    id: 2,
    category: 'Hamburguesas',
    name: 'Hamburguesas rancheras',
    price: 50,
    description:
      'El condimento ranchero y las cebollas tiernas salteadas son el secreto para agregar un gran sabor a estas hamburguesas rancheras. Estas jugosas hamburguesas están cubiertas con queso cheddar derretido y una salsa de hamburguesa Ranch ahumada.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/06/3837574.jpg',
  },
  {
    id: 3,
    category: 'Hamburguesas',
    name: 'Hamburguesa de guacamole',
    price: 45,
    description:
      '¡No se puede superar una hamburguesa de guacamole casera! Estas deliciosas hamburguesas se asan a la parrilla a la perfección jugosa y luego se cargan con guacamole y queso pepper jack..',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3874637.jpg',
  },
  {
    id: 4,
    category: 'Hamburguesas',
    name: 'Hamburguesas griegas',
    price: 45,
    description:
      'Rebosantes de sabores mediterráneos frescos, estas hamburguesas griegas fáciles son la mejor hamburguesa para este verano. Mezcle algunos ingredientes simples, asados a la parrilla a la perfección jugosa, luego apílelo todo en un panecillo.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/08/3848575.jpeg',
  },
  {
    id: 5,
    category: 'Hamburguesas',
    name: 'Hamburguesa ahumada',
    price: 50,
    description:
      'Las hamburguesas ahumadas, que son apreciadas por su rico sabor a carne, cuentan con carne picada molida que se ahúman a temperatura baja y lenta en una parrilla o ahumador.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2021/08/3748363.jpg',
  },
  {
    id: 6,
    category: 'Hamburguesas',
    name: 'Hamburguesas clásicas de ternera',
    price: 60,
    description:
      'Estas jugosas hamburguesas tienen mucho sabor a barbacoa ahumada.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2021/06/3733317.jpg',
  },
  {
    id: 7,
    category: 'Sopas',
    name: 'Sopa griega de frijoles blancos fasolada',
    price: 100,
    description:
      ' ¡Es una sopa griega de frijoles blancos que es absolutamente deliciosa! Esta abundante sopa es perfecta para un día frío de invierno. Es fácil de hacer y lleno de sabor. Además, está cargado de fibra y proteínas, lo que lo convierte en una opción de comida saludable.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/12/3878968.jpg',
  },
  {
    id: 8,
    category: 'Sopas',
    name: 'Estofado de ternera coreano',
    price: 90,
    description:
      '¡Este es el estofado de ternera para vencer a todos los guisos! ¡El estofado de ternera coreano es dulce, salado, picante y tan sabroso!',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/12/3876539.jpeg',
  },
  {
    id: 9,
    category: 'Sopas',
    name: 'Curry de brotes mixtos',
    price: 80,
    description:
      'Curry de brotes mixtos altamente nutritivo y saludable hecho con una combinación de lentejas germinadas, frijoles, nueces y semillas.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/12/3878374.jpg',
  },
  {
    id: 10,
    category: 'Sopas',
    name: 'Sopa de arroz salvaje con tomate',
    price: 75,
    description:
      'Esta sopa de tomate con arroz salvaje es un cambio de la versión cremosa tradicional. Cargado con verduras y tomates, es una gran variación de la versión habitual.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/12/3876133.jpeg',
  },
  {
    id: 11,
    category: 'Sopas',
    name: 'Crema de brócoli',
    price: 110,
    description:
      'Esta sopa de crema de brócoli combina cebollas, papas, ajo y brócoli en una sopa ultra cremosa con un poco de crema espesa, todo adornado con brócoli finamente picado, tocino crujiente y una pizca de queso.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/12/3877776.jpg',
  },
  {
    id: 12,
    category: 'Sopas',
    name: 'Estofado de vegetales',
    price: 60,
    description:
      'Está repleto de una tonelada de sabores, súper nutritivo y todo hecho en solo 40 minutos.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3874853.jpg',
  },
  {
    id: 13,
    category: 'Sopas',
    name: 'Sopa de carne con cebada',
    price: 90,
    description:
      'Rica y sustanciosa, esta sopa de carne y cebada está hecha con tiernos trozos de carne, cebada nutritiva, verduras sabrosas y capas de sabor.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3871884.jpg',
  },
  {
    id: 14,
    category: 'Sopas',
    name: 'Sopa de quinoa',
    price: 90,
    description:
      'Los sabores robustos de la salchicha de chorizo se superponen en un caldo profundo y delicioso que usa salsa en lugar de algunos de los tomates. ¡El resultado es una sopa que es fresca y audaz y está cargada de proteínas!',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3873078.jpg',
  },
  {
    id: 15,
    category: 'Sopas',
    name: 'Sopa tailandesa de calabaza con leche de coco',
    price: 100,
    description:
      'Rociada con leche de coco y cubierta con semillas de calabaza tostadas, esta magnífica sopa de calabaza al curry impresionará a todos los invitados a su mesa.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3872930.jpg',
  },
  {
    id: 16,
    category: 'Sopas',
    name: 'Sopa de langosta',
    price: 120,
    description:
      'Esta sopa de langosta es aterciopelada y rica en sabores entre su base cremosa de tomate y vino blanco con trozos de colas de langosta dulces y suculentas en todas partes.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/11/3872606.jpg',
  },
  {
    id: 17,
    category: 'Sopas',
    name: 'Pozole verde de cerdo',
    price: 80,
    description:
      'Hecha con carne de cerdo a la parrilla, tomatillo y pimientos, esta es una sopa robusta que bordea un guiso.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/10/3868006.jpg',
  },
  {
    id: 18,
    category: 'Sopas',
    name: 'Pozole rojo',
    price: 80,
    description:
      'Cargada con carne de cerdo desmenuzada y maíz pozolero, condimentada con chiles rojos suaves y vibrantes y muchos aderezos para terminar.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3869596.jpg',
  },
  {
    id: 19,
    category: 'Carnes',
    name: 'Costillas de cerdo brasadas',
    price: 50,
    description:
      'Estas costillas de cerdo estofadas son tan buenas como parece. Se cocinan a fuego lento en una salsa ridículamente deliciosa hecha con cerveza negra y chocolate.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/10/3866744.jpg',
  },
  {
    id: 20,
    category: 'Carnes',
    name: 'Costillas de res',
    price: 55,
    description:
      'Las costillas de res son tan tiernas, deliciosas, sabrosas y jugosas, ¡son adictivas! El frote seco crea una corteza deliciosa y crujiente, ni siquiera necesita agregar salsa BBQ.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/10/3861824.jpg',
  },
  {
    id: 21,
    category: 'Carnes',
    name: 'Jamón Ahumado Doble',
    price: 70,
    description:
      'El glaseado de mostaza y azúcar moreno agrega una acidez y un sabor profundo que hace que cualquier jamón sea muy especial.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/12/3878454.jpg',
  },
  {
    id: 22,
    category: 'Carnes',
    name: 'Pernil puertorriqueño',
    price: 70,
    description:
      'El pernil puertorriqueño es un delicioso cerdo extra tierno con un agradable toque de piel crujiente en la parte superior.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/12/3876211.jpg',
  },
  {
    id: 23,
    category: 'Carnes',
    name: 'Paletilla de cordero a cocción lenta',
    price: 50,
    description:
      'Esta tierna, húmeda y sabrosa paleta de cordero cocida a fuego lento es extremadamente fácil de preparar con un poco de preparación.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3872662.jpg',
  },
  {
    id: 24,
    category: 'Carnes',
    name: 'Solomillo de ternera ahumado',
    price: 60,
    description:
      'El lomo de res ahumado es una de las mejores carnes de la barbacoa, y se lleva a un nuevo nivel al cocinarlo a temperatura baja y lenta en su ahumador al aire libre.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/11/3869956.jpeg',
  },
  {
    id: 25,
    category: 'Postres',
    name: 'Trufas Biscoff',
    price: 40,
    description:
      'Con ese clásico y cálido sabor a bizcocho especiado en un elegante dulce casero.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/12/3879156.jpg',
  },
  {
    id: 26,
    category: 'Postres',
    name: 'Tortugas cetogénicas',
    price: 30,
    description:
      'Esta delicia baja en carbohidratos está cubierta con chocolate negro y rellena con un relleno cremoso y decadente.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/12/3879058.jpg',
  },
  {
    id: 27,
    category: 'Postres',
    name: 'Arándanos azucarados',
    price: 20,
    description:
      'Son súper simples de preparar y funcionan como un refrigerio afrutado festivo.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/12/3879006.jpg',
  },
  {
    id: 28,
    category: 'Postres',
    name: 'Bolas de nieve con beso de chocolate',
    price: 25,
    description:
      'Estas clásicas galletas de bola de nieve son ricas, mantecosas, delicadas, deliciosas y tienen una sorpresa de chocolate adentro.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/12/3878945.jpg',
  },
  {
    id: 29,
    category: 'Cafés',
    name: 'Latte de pan de jengibre',
    price: 20,
    description:
      'Comienza con un jarabe casero lleno de especias cálidas, espresso de sabor completo y su leche o sustituto de leche favorito.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/12/3878452.jpg',
  },
  {
    id: 30,
    category: 'Cafés',
    name: 'Latte de vainilla rubia',
    price: 15,
    description:
      'Este Blonde Vanilla Latte está hecho con espresso rubio ligero y suave.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/11/3871920.jpg',
  },
  {
    id: 31,
    category: 'Cafés',
    name: 'Latte mocha irlandés',
    price: 20,
    description:
      'Espere mucho sabor, un toque de alcohol y una agradable dulzura en este juguetón moca Baileys.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/11/3868844.jpg',
  },
  {
    id: 32,
    category: 'Cafés',
    name: 'Café casero',
    price: 12,
    description: 'Café casero perfecto y sabroso.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/10/3862462.jpg',
  },
  {
    id: 33,
    category: 'Bebidas',
    name: 'Sidra de manzana casera',
    price: 12,
    description:
      '¡La sidra de manzana es la bebida de otoño perfecta para mantenerte caliente y disfrutar de la cosecha de frutas!',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/12/3877236.jpeg',
  },
  {
    id: 34,
    category: 'Bebidas',
    name: 'Limonada de té helado',
    price: 10,
    description:
      '¡Disfruta de esta refrescante bebida de té dulce con limón para refrescarte en el clima cálido o en cualquier momento que tengas un antojo!',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/09/3856316.jpeg',
  },
  {
    id: 35,
    category: 'Bebidas',
    name: 'Té de diente de león',
    price: 20,
    description:
      'El brebaje dorado del té de flor de diente de león suavemente cocido a fuego lento no solo es refrescante, es un estimulante primaveral perfecto lleno de beneficios medicinales.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/10/3861508.jpg',
  },
  {
    id: 36,
    category: 'Bebidas',
    name: 'Jugo de durazno',
    price: 20,
    description:
      'El jugo de durazno es dulce, simple, refrescante y está hecho sin aditivos ni azúcares refinados.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/10/3865220.jpg',
  },
  {
    id: 37,
    category: 'Tacos',
    name: 'Tacos de lengua',
    price: 40,
    description:
      'Sirva con salsa verde (o la salsa de su elección), cebollas picadas y mucho cilantro.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/10/3863828.jpg',
  },
  {
    id: 38,
    category: 'Tacos',
    name: 'Taco callejero de carne asada',
    price: 30,
    description: '¡Te encantará lo rápido que se unen!',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/08/3850738.jpg',
  },
  {
    id: 39,
    category: 'Tacos',
    name: 'Cochinita pibil',
    price: 45,
    description:
      'La cochinita pibil utiliza ingredientes tradicionales yucatecos como el chile habanero, jugo de naranja agria y pasta de achiote rojo que le da color y sabor al platillo.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2022/05/3824964.jpg',
  },
  {
    id: 40,
    category: 'Tacos',
    name: 'Carnitas de cocción lenta',
    price: 35,
    description:
      'Estas carnitas crujientes se hacen súper fáciles en la olla de cocción lenta.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/04/3821375.jpg',
  },
  {
    id: 41,
    category: 'Salsas',
    name: 'Salsa verde',
    price: 10,
    description:
      'Brillante y picante con un toque ahumado, esta receta de salsa verde asada al fuego seguramente complacerá. Esta increíble salsa verde a base de tomatillo es la favorita de la familia.',
    image:
      'https://photo2.foodgawker.com/wp-content/uploads/2022/09/3860210.jpg',
  },
  {
    id: 42,
    category: 'Salsas',
    name: 'Salsa roja',
    price: 10,
    description: 'Una salsa roja preparada con tomates.',
    image:
      'https://photo.foodgawker.com/wp-content/uploads/2021/09/3764569.jpg',
  },
];

function createMenu(categories) {
  let newMenu = [];
  for (const category of categories) {
    newMenu = newMenu.concat(menu.filter((dish) => dish.category === category));
  }

  return newMenu;
}

export { createMenu };
export default menu;
