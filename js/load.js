// loadCategories-
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}

// loadAllPet
const loadAllPet =() =>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllPets(data.pets))
    .catch((error) => console.log(error))
}


// -------------- remove activeClass
const removeActiveClass = () => {
const buttons = document.getElementsByClassName("category-btn");
        for(let btn of buttons){
            btn.classList.remove("bg-red-500", "text-white")
        }
}


// loadPetCategory
const loadPetCategory = (id) => {
     fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        // reomve active class 
        removeActiveClass()
        
        // add active class
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add("bg-red-500", "text-white")
        displayAllPets(data.data)
    })
    .catch((error) => console.log(error))
}





// call functions 
loadCategories();
loadAllPet();