function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function suma3(n,m) {
  return n + m;
}

db.Notas.insertOne({
    Nombre: "Marsh",
    Edad: "6 years",
    materia: "Node",
    Nota: 5.0,
    inscrito: true
})

db.productos.insertOne({
    "un_string":"manzana",
    "un_numero":25,
    "un_boleano":false,
    "una_fecha": new Date("05/10/2021"),
    "expresionregular":/foobar/i,
    "unalista":[1,"manzana",[]],
    "factura":{
        "nombre":"Diego",
        "Articulos":2,
        "Tipo":"fruta",
    }})


    db.productos.insert([
        {
          "id": 1,
          "nombre": "Pera",
          "descripcion": "PERA, PYRUS CUMMUNIS / ROSACEAE",
          "poster_path": "/1.jpg",
          "precio": 12.34
        },
        {
          "id": 2,
          "nombre": "Kiwi",
          "descripcion": "KIWI, ACTINIDIA CHINENSIS / ACTINIDIACEAE",
          "poster_path": "/2.jpg",
          "precio": 2.34
        },
        {
          "id": 3,
          "nombre": "Arándano",
          "descripcion": "El arándano es un fruto que crece silvestre en zonas frescas del hemisferio norte. Es una baya globosa de color negro azulado que mide unos 6mm de diámetro. Se consume sobre todo en mermeladas, tartas o como acompañamiento de diversos platos. Es un alimento rico en vitaminas que además aporta pocas calorías al organismo.",
          "poster_path": "/3.jpg",
          "precio": 3.8
        },
        {
          "id": 4,
          "nombre": "FRAMBUESA",
          "descripcion": "FRAMBUESA, RUBUS IDAEUS / ROSACEAE",
          "poster_path": "/4.jpg",
          "precio": 7.25
        },
        {
          "id": 5,
          "nombre": "Manzana",
          "descripcion": "MANZANA, MALUS DOMESTICA / ROSACEAE",
          "poster_path": "/5.jpg",
          "precio": "3.55"
        },
        {
          "id": 6,
          "nombre": "GROSELLA",
          "descripcion": "GROSELLA ESPINOSA, RIBES GROSSULARIA / SAXIFRAGACEAE (GROSSULARIACEAE)",
          "poster_path": "/6.jpg",
          "precio": 12.34
        },
        {
          "id": 7,
          "nombre": "ZARZAMORA",
          "descripcion": "ZARZAMORA, RUBUS FRUTICOSUS / ROSACEAE",
          "poster_path": "/7.jpg",
          "precio": 2.34
        },
        {
          "id": 8,
          "nombre": "LIMÓN",
          "descripcion": "LIMÓN, CITRUS LIMON / RUTACEAE",
          "poster_path": "/8.jpg",
          "precio": 2.5
        },
        {
          "id": 9,
          "nombre": "MANDARINA",
          "descripcion": "MANDARINA, CITRUS RETICULATA / RUTACEAE",
          "poster_path": "/9.jpg",
          "precio": 3.69
        },
        {
          "id": 10,
          "nombre": "Melocotones",
          "descripcion": "MELOCOTÓN, PRUNUS PERSICA / ROSACEAE",
          "poster_path": "/10.jpg",
          "precio": "3.55"
        }
      ])
      