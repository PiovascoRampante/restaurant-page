
function menuRender (menu){
  const mainNode = document.querySelector("main")

  for (let key in menu) {
    const divE = document.createElement("div")
    mainNode.appendChild(divE)

    const sectionE = document.createElement("h2")
    sectionE.textContent = `${key}`
    divE.appendChild(sectionE)
  
    const ule = document.createElement("ul")
    divE.appendChild(ule)
    //per ogni elemento dell'array
    menu[key].forEach(order => {
      const lie = document.createElement("li")
      ule.appendChild(lie)

      const orderName = document.createElement("h4")
      lie.appendChild(orderName)
      orderName.textContent = order.nome;

      if (order.ingredienti !== "") { 
        const orderIng = document.createElement("div")
        lie.appendChild(orderIng)
        orderIng.textContent = order.ingredienti;
      };

      if (order.allergeni !== "") {      
        const orderAll = document.createElement("div");
        lie.appendChild(orderAll);
        orderAll.textContent = order.allergeni;
      };

      const orderPri = document.createElement("div")
      lie.appendChild(orderPri)
      orderPri.textContent = order.price;

    });

  }
}

const menu = {
  antipasti: [
    {
      nome:"tagliere salumi",
      ingredienti:"",
      allergeni:"",
      price:"8",
    },
    {
      nome:"tagliere formaggi",
      ingredienti:"",
      allergeni:"",
      price:"8",
    },
    {
      nome:"tagliere misto",
      ingredienti:"",
      allergeni:"",
      price:"8",
    },
    {
      nome:"verdurine tristi",
      ingredienti:"",
      allergeni:"",
      price:"88",
    },
  ],

  primi:[
    {
      nome:"penne carbonara",
      ingredienti:"uova pasta guanciale pepe",
      allergeni:"",
      price:"8",
    },
    {
      nome:"linguine pesto",
      ingredienti:"noci basilico aglio olio linguine",
      allergeni:"",
      price:"8",
    },
    {
      nome:"pasta e fagioli",
      ingredienti:"fagioli pasta mista pancetta",
      allergeni:"",
      price:"8",
    },
    {
      nome:"risotto ai gamberi",
      ingredienti:"riso gamberi",
      allergeni:"gamberi",
      price:"8",
    },
  ],

  secondi:[
    {
      nome:"carbonara",
      ingredienti:"uova pasta guanciale pepe",
      allergeni:"",
      price:"8",
    },
    {
      nome:"carbonara",
      ingredienti:"uova pasta guanciale pepe",
      allergeni:"",
      price:"8",
    },
    {
      nome:"carbonara",
      ingredienti:"uova pasta guanciale pepe",
      allergeni:"",
      price:"8",
    },
    {
      nome:"carbonara",
      ingredienti:"uova pasta guanciale pepe",
      allergeni:"",
      price:"8",
    },
  ],

  dessert: [
    {
      nome: "gelato",
      ingredienti:"sdf sdfsd ertg",
      allergeni:"",
      price:"6",
    },
    {
      nome: "torta",
      ingredienti:"erg fdg dferter",
      allergeni:"",
      price:"7",
    },
    {
      nome: "cornetto",
      ingredienti:"ert  fg dfg ert rt",
      allergeni:"",
      price:"8",
    },
    {
      nome: "babà",
      ingredienti:"ert fsd ",
      allergeni:"",
      price:"9",
    },
  ],

  bevande: [
    {
      nome:"acqua",
      price:"1",
    },
    {
      nome:"vino",
      price:"5",
    },
    {
      nome:"birra",
      price:"3",
    },
  ],
}


export { menuRender, menu }
