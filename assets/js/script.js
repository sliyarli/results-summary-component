document.addEventListener("DOMContentLoaded", () => {
  const categoryContainer = document.querySelector(
    ".summary-info-card-categories"
  );

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((categoryData) => {
        const categoryElement = document.createElement("div");
        categoryElement.className = `summary-info-card-category ${categoryData.category.toLowerCase()}-category d-flex flex-justify-between flex-justify-center`;

        const categoryNameElement = document.createElement("p");
        categoryNameElement.className =
          "info-card-category-name d-flex flex-items-center flex-justify-center";
        categoryNameElement.innerHTML = `<img src="${categoryData.icon}" alt="" class="info-card-category-img" />${categoryData.category}`;

        const categoryScoreElement = document.createElement("p");
        categoryScoreElement.className =
          "info-card-category-score d-flex flex-items-center";
        categoryScoreElement.innerHTML = `<span>${categoryData.score}</span>/ 100`;

        categoryElement.appendChild(categoryNameElement);
        categoryElement.appendChild(categoryScoreElement);

        categoryContainer.appendChild(categoryElement);
      });
    })
    .catch((error) => {
      console.error("Error reading the JSON file:", error);
    });
});
