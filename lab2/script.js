(function () {
    const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    let goodBye = speakGoodBye();
    let hello = speakHello();

    function getLastLetter(name) {
        return name[name.length - 1].toLowerCase();
    }

    const lastLettersCount = {};
    names.forEach(name => {
        const lastLetter = getLastLetter(name);
        if (lastLettersCount[lastLetter]) {
            lastLettersCount[lastLetter]++;
        } else {
            lastLettersCount[lastLetter] = 1;
        }
    });
    console.log("Залежність від останньої літери:");
    for (const letter in lastLettersCount) {
        console.log(`${letter}: ${lastLettersCount[letter]}`);
    }


    for (let i = 0; i <= names.length; i++) {
        const item = names[i];
        if (item.toLowerCase().charAt(0) === "j") {
            goodBye(item);
        } else {
            hello(item);
        }
    }
}());

