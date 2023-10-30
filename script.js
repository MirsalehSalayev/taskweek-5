function kredit(num, ay) {
    let month = [];
    let tam = Math.floor(num / ay);
    let qaliq = num % ay;

    for (let i = 1; i <= ay; i++) {
        i === ay ? month.push(tam + qaliq) : month.push(tam);
    }

    for (let i = 0; i < month.length; i++) {
        console.log( month[i]);
    }
}

kredit(1307, 3);
