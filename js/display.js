// displayCategories
const displayCategories = (categories) =>{
    categories.forEach((item) =>{
        // create buttonContainer
         const button = document.createElement("button");

        button.className = "btn border border-base-500 px-12 py-6 rounded-lg text-xl font-bold";
        button.innerText = `${item.category}`;
        
         button.onclick = () => {
          loadPetCategory(`${item.category}`)
         }
        // take categoryContainer here and append the buttonContainer
        const categoryContainer = document.getElementById("category-container")
        categoryContainer.append(button);

    })
} 




// displayAllPets
const displayAllPets = (pets) => {
    const petContainer = document.getElementById("pet-container")
    petContainer.innerHTML = "";
    // if don't have data show no content
    if(pets.length == 0){
      petContainer.innerHTML = 
      `<h2 class="text-3xl text-center text-red-500 font-bold">No Content Here</h2>
      `;
      return;
    }
    pets.forEach((pet) =>{
        const card  = document.createElement("div")
        card.innerHTML = 
        ` <div class="card p-4 bg-base-100 shadow-sm">
  <figure class="">
    <img
      src=${pet.image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="">
    <h2 class="card-title mt-2">${pet.pet_name}</h2>

    <div class="flex gap-3 text-lg items-center"><i class="fa-regular fa-square"></i>
    <p>Breed: ${pet.breed}</p>
    </div>

    <div class="flex gap-3 items-center"><i class="fa-regular fa-calendar"></i>
    <p>Birth: ${pet.date_of_birth}</p>
    </div>

    <div class="flex gap-3 items-center"><i class="fa-solid fa-genderless"></i>
    <p>Gender: ${pet.gender}</p>
    </div>
    <div class="flex gap-3 items-center"><i class="fa-solid fa-dollar-sign"></i>
    <p>Price: ${pet.price}</p>
    </div>
    <div class="card-actions flex justify-between mt-2 p-2 rounded bg-transparent border border-zinc-300">
      <button class="btn btn-sm px-5 text-[#0E7A81] font-bold bg-transparent border border-zinc-300"><i class="fa-regular fa-thumbs-up"></i></button>
      <button class="btn btn-sm text-[#008b95] font-bold bg-transparent border border-zinc-300">Buy Now</button>
      <button class="btn btn-sm text-[#0E7A81] font-bold bg-transparent border border-zinc-300">Buy Now</button>
    </div>
  </div>
</div>
        `
        
        petContainer.append(card)
    })
}


