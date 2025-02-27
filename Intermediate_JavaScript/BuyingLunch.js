const buyingLunch = (names) => {
    const randomPayer = Math.floor(Math.random() * names.length) + 1;

    return `${names[randomPayer]} is going to buy lunch today!`;

}

buyingLunch(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);