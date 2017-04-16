function greeter(person: string) {
  console.log("Hello, " + person);
  return "Hello, " + person;
}

setTimeout(() => {
  const ran = Number(Math.random().toFixed(2))
  let user
  if (ran < 0.5)
    user = [1, 2, 3];
  else
    user = "sds"
  greeter(user);
}, 0)
