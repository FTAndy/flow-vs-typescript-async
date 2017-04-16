function greeter(person) {
    console.log("Hello, " + person);
    return "Hello, " + person;
}
setTimeout(function () {
    var ran = Number(Math.random().toFixed(2));
    var user;
    if (ran < 0.5)
        user = [1, 2, 3];
    else
        user = "sds";
    greeter(user);
}, 0);
