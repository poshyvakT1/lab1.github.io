console.log("Для використання функції triangle передайте чотири аргументи: triangle(значення1, тип1, значення2, тип2).");

function triangle(val1, type1, val2, type2) {
    const types = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    let result = {};

    if (!types.includes(type1) || !types.includes(type2)) {
        console.log("Перевірте правильність введення типів елементів.");
        return "failed";
    }

    if (val1 <= 0 || val2 <= 0) {
        console.log("Сторони трикутника повинні бути додатніми числами.");
        return "failed";
    }

    if ((type1 === "leg" && type2 === "leg") || (type1 === "hypotenuse" && type2 === "hypotenuse")) {
        console.log("Не можна використовувати два однакових типи.");
        return "failed";
    }

    switch (type1) {
        case "hypotenuse":
            if (type2 === "leg") {
                result.hypotenuse = val1;
                result.leg = val2;
                result.beta = Math.asin(val2 / val1) * (180 / Math.PI);
                result.alpha = 90 - result.beta;
            } else {
                console.log("Кут не може бути поруч з гіпотенузою, якщо задано лише катет.");
                return "failed";
            }
            break;
        case "leg":
            if (type2 === "hypotenuse") {
                result.hypotenuse = val2;
                result.leg = val1;
                result.alpha = Math.asin(val1 / val2) * (180 / Math.PI);
                result.beta = 90 - result.alpha;
            } else {
                console.log("Кут може бути поруч з гіпотенузою лише якщо задано катет.");
                return "failed";
            }
            break;
        case "adjacent angle":
        case "opposite angle":
            console.log("Гострі кути можна обчислити лише за відомою гіпотенузою.");
            return "failed";
    }

    if (result.hypotenuse && result.leg) {
        result.b = Math.sqrt(result.hypotenuse ** 2 - result.leg ** 2);
        console.log(`a: ${result.leg}, b: ${result.b.toFixed(4)}, c: ${result.hypotenuse.toFixed(4)}, alpha: ${result.alpha.toFixed(2)}, beta: ${result.beta.toFixed(2)}`);
        return "success";
    } else {
        console.log("Не вдалося обчислити параметри трикутника.");
        return "failed";
    }
}
