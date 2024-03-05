function speakHello() {
    let speakWord = "Hello";
    function speak(name) {
        console.log(speakWord + " " + name);
    }
    return speak;
}
