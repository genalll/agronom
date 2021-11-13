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


function closeImagePopup(event) {
    console.log(event.target.id);
    if (event.target.shape=="poly") {
        region.textContent='';
        region.textContent=event.target.id;
        result.textContent="Тут будут результаты вычеслений, бизнес планера"
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
        this.removeEventListener('click', selectRegion);

    }
}



document.addEventListener('click', closeImagePopup);
document.addEventListener('click', selectRegion);




buttonSelectRegion.onclick = function readContent(event,regionMap){
    console.log("Я выбрал регион")
    features.textContent="";
    features.appendChild(result);

}

buttonResetRegion.onclick = function resetContent(event,regionMap){
    console.log("Я сбросил регион")
    document.location.href = "index.html";

}

