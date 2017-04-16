/* @flow */

function foo(x: string){
  console.log(x);
}

setTimeout(() => {
  const ran = Number(Math.random().toFixed(2))
  let user
  if (ran > 0.5)
    user = [1,2,3]
  else
    user = "asds"
  foo(user)
}, 500)
