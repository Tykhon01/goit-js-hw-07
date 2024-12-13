const categories = document.querySelectorAll(`ul#categories li.item`);
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryTitle = category.querySelector('h2').textContent;
    const elementsCount = category.querySelector('li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Element: ${elementsCount}`);
});
