//You may want to copy or rename ~/.mongorc.js to ~/.mongoshrc.js.
test> 4+4
8
test> 1-5
-4
test> 4545*+878
217605510
test> console.log("Hola la suma de 2+3 = ",2+3)
//Hola la suma de 2+3 =  5

test> print("Hola mundo")
//Hola mundo

test> new Date()
ISODate("2022-10-26T23:30:29.818Z")
test> Date()
//Wed Oct 26 2022 18:30:33 GMT-0500 (hora estándar de Colombia)
test> Date("2022/10/26")
//Wed Oct 26 2022 18:30:56 GMT-0500 (hora estándar de Colombia)
test> function suma(a,b){return a+b}
//[Function: suma]
test> suma(85,6)
91
test> function factorial(n){if(n<=1) return 1; return n*factorial(n-1)}
//[Function: factorial]
test> factorial(6)
720
test> factorial(1)
1
test> factorial(0)
1
test>
//use todo;
//show collections
//dc.createCollection("Cliente")
db.usuarios.insertOne({ "nombre": "Carlos" },{apelido:"Olarte"})




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
          id: 1,
          nombre: "Pera",
          descripcion: "PERA, PYRUS CUMMUNIS / ROSACEAE",
          poster_path: "/1.jpg",
          precio: 12.34
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
      
      db.productos.find({ precio: { $gt: 200 }}).sort({ nombre: 1})
      db.productos.find({ precio: { $gt: 200 }}).sort({ nombre: 1}).forEach(producto =>print("hola mundo")) 
      db.productos.find({ precio: { $gt: 200 }}).sort({ nombre: 1}).forEach(producto =>print("hola mundo")) 
      db.poductos.update({un_string: 'Manzana'},{$rename:{nombre:"name"}})