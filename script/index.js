
const buttonSelectRegion = document.querySelector("#seleckt");
const buttonResetRegion = document.querySelector("#reset");
const features = document.querySelector(".features");
const region = document.querySelector(".region");
const regionMap="";
const distrikt1 = document.createElement("p");
const distrikt2 = document.createElement("p");
const distrikt3 = document.createElement("p");
const distrikt4 = document.createElement("p");
const result = document.createElement("p");
result.classList.add("result");
result.textContent="Я крутой результат вычислений"
distrikt1.textContent="Йошкар-Ола"
distrikt2.textContent="Юринский район"
distrikt3.textContent="Сернурский район"
distrikt4.textContent="Волжский район"
distrikt1.classList.add("distrikt");
distrikt2.classList.add("distrikt");
distrikt3.classList.add("distrikt");
distrikt4.classList.add("distrikt");

sernursk={description:"температура воздуха от 5.1 до 25.3 градусов цельсия, почвы ,дерново-подзолистые, суглинистые, влажность 66-68, осадки 360-380, РН почвы 6,7",eco:"Высокий экономический потенциал: картофель, морковь, свекла, дыня, арбуз \n Средний экономический потенциал: капуста, огурец \n Низкий экономический потенциал: рис"};
yurirsk={description:"температура воздуха от 5.6 до 25.1 градусов цельсия,почвы дерново-слабо и средне-подзолистыми песчаными почвами, влажность 66-68, осадки 360-380, РН почвы 6,7",eco:"Высокий экономический потенциал: картофель, морковь, свекла, дыня, арбуз \n Средний экономический потенциал: огурец \n Низкий экономический потенциал: капуста, рис"};
yoskarla={description:"температура воздуха от 5.8 до 25.5 градусов цельсия,дерново-подзолистые, суглинистые, влажность 66-68, осадки 360-380, РН почвы 6,7",eco:"Высокий экономический потенциал: картофель, морковь, свекла, дыня, арбуз \n Средний экономический потенциал: капуста, огурец \n Низкий экономический потенциал: рис"};
voljskiy={description:"температура воздуха от 5 до 25.5 градусов цельсия, почвы дерново-подзолистые почвы, песчанные   влажность 66-68, осадки 360-380, РН почвы 6,7",eco:"Высокий экономический потенциал: картофель, морковь, свекла, дыня, арбуз \n Средний экономический потенциал: огурец \n Низкий экономический потенциал: капуста, рис"};


class Card {
    constructor(cardObj) {
        this.name = cardObj.name;
        this.description = cardObj.description;
        this.eco=cardObj.eco;
        
            
    }

    cardCreate() {
        const cardElement = document.createElement('article');
        const cardName = document.createElement('h3');
        const cardDescription = document.createElement('p');
        const cardeco = document.createElement('p');
        



        cardElement.classList.add("features__offer-text");
        cardElement.classList.add("features__offer-text_result");
        
        cardName.classList.add("card__name");
      


        cardName.textContent = this.name;
        cardDescription.textContent = this.description;
        cardeco.textContent = this.eco;

        
        
        cardElement.appendChild(cardName);
        cardElement.appendChild(cardDescription);
        cardElement.appendChild(cardeco);
    
        this.cardElement = cardElement;
        return this.cardElement;
    }

}







function closeImagePopup(event) {
    console.log(event.target.id);
    if (event.target.shape=="poly") {
        region.textContent='';
        region.textContent=event.target.id;
        
        
        if (event.target.id != "Республика Марий Эл") {
            result.textContent="Для этого региона к сожалению не разработано критериев оценки эфективности сельского хозяйства"    
            
        }


        if (event.target.id=="Республика Марий Эл") {
            region.appendChild(distrikt1);
            region.appendChild(distrikt2);
            region.appendChild(distrikt3);
            region.appendChild(distrikt4);
        }
    }

    
}
    


function selectRegion(event){
    if (event.target.classList.contains('distrikt')){
        event.target.classList.add("distriktred");
        result.textContent=event.target.textContent
        console.log(result.textContent+" На данный момент")
        this.removeEventListener('click', selectRegion);

    }
}



document.addEventListener('click', closeImagePopup);
document.addEventListener('click', selectRegion);




buttonSelectRegion.onclick = function readContent(event,regionMap){
    console.log("Я выбрал регион")
    let description=""
    if (result.textContent=="Сернурский район"){
         description =  sernursk.description;
         eco=sernursk.eco;
    }
    if (result.textContent=="Йошкар-Ола"){
        description =  yoskarla.description;
        eco=yoskarla.eco
   }
   if (result.textContent=="Юринский район"){
    description =  yurirsk.description;
    eco=yurirsk.eco
}
if (result.textContent=="Волжский район"){
    description =  voljskiy.description;
    eco=voljskiy.eco
}
    const card =new Card({name:result.textContent,description:description,eco:eco});
    const cards = card.cardCreate();
    features.textContent="";
    console.log(cards);
    features.appendChild(cards);

}

buttonResetRegion.onclick = function resetContent(event,regionMap){
    console.log("Я сбросил регион")
    document.location.href = "index.html";

}

