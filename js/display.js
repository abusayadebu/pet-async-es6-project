// displayCategories
const displayCategories = (categories) =>{
    categories.forEach((item) =>{
        // create buttonContainer
         const button = document.createElement("button");
         
        button.className = "btn border border-base-500 px-12 py-6 rounded-lg text-xl font-bold";
        button.innerText = `${item.category}`;
        // take categoryContainer here and append the buttonContainer
        const categoryContainer = document.getElementById("category-container")
        categoryContainer.append(button);

    })
} 