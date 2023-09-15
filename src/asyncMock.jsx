 
 const products =
 [
    {
        id: 1,
        nombre: "Nike Air Force",
        precio: 40000,
        category: "zapatillas",
        img:
          "https://nikearprod.vtexassets.com/arquivos/ids/658672/DD9625_100_A_PREM.jpg?v=638221810286670000",
        stock: 20,
      },
      {
        id: 2,
        nombre: "Nike Air Max",
        precio: 63000,
        category: "zapatillas",
        img:
          "./img/amarigrises.jfif", 
        stock: 20,
      },
      {
        id: 3,
        nombre: "Nike Air Force Stage 1",
        precio: 59000,
        category: "zapatillas",
        img:
          "./img/air force stage 1.jfif",
        stock: 20,
      },
      {
        id: 4,
        nombre: "Nike Air Max 90",
        precio: 37000,
        category: "zapatillas",
        img:
          "./img/air max 90.jpg",
        stock: 20,
      },
      {
        id: 5,
        nombre: "Nike Air Max Axis",
        precio: 70000,
        category: "zapatillas",
        img:
          "./img/air max axis.jpg",
        stock: 20,
      },
      {
        id: 6,
        nombre: "Nike Air Max Impact",
        precio: 42000,
        category: "zapatillas",
        img:
          "./img/air max impact.jfif",
        stock: 20,
      },
      {
        id: 7,
        nombre: "Nike Air Max LTD3",
        precio: 67000,
        category: "zapatillas",
        img:
          "./img/airmax LTD3.jfif",
        stock: 20,
      },
      {
        id: 8,
        nombre: "Nike Air Sport",
        precio: 90000,
        category: "zapatillas",
        img:
          "./img/azules.jfif",
        stock: 20,
      },
      {
        id: 9,
        nombre: "Nike Air Jordan",
        precio: 140000,
        category: "zapatillas",
        img:
          "./img/air jordan.jfif",
        stock: 20,
      },
      {
        id: 10,
        nombre: "Nike Air Jordan Retro",
        precio: 120000,
        category: "zapatillas",
        img:
          "./img/jordan retro.jpg",
        stock: 20,
      }
    ]

    export const getProducts =() => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(products)
            },500)
        })
    }

    export const getProductById = (productId) => {
      return new Promise((resolve) =>{
        setTimeout(() => {
          resolve(products.find(prod => prod.id ===productId))
        },500)
      })
    }