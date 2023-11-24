function generateRandomString(num) {
    const characters = 'Leonardo';
    let result1 = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}
function generateRandomNumberMatrix(num, valorMinimo) {
    const characters = '0123456789';
    let result1 = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let r = parseFloat(result1);
    return r > valorMinimo ? r : valorMinimo;
}

function createSectionMatrix(idSection) {
    let section = document.getElementById(idSection);
    let widthPage = section.offsetWidth;
    let heightPage = section.offsetHeight;

    let qtdColumns = widthPage / 25;
    let qtdrows = heightPage / 100;

    let countRow = 0;
    while (countRow < qtdrows) {

        let newDivRow = document.createElement("div");
        newDivRow.style.width = '100%';
        newDivRow.style.height = "100px";
        newDivRow.style.flexDirection = 'row';
        newDivRow.style.backgroundColor = '#000';
        section.appendChild(newDivRow);

        let countColumn = 0;
        while (countColumn < qtdColumns) {
            let newDivColumn = document.createElement("div");

            newDivColumn.style.animation = "makeItRain " + generateRandomNumberMatrix(1, 3) + "s infinite linear";
            newDivColumn.classList = 'divMatrix';
            newDivRow.appendChild(newDivColumn);


            newDivColumn.innerHTML = generateRandomString(1);

            countColumn++;
        }

        countRow++;
    }
}