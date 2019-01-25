const drivers=["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(Garfield){
  drivers.pop(Garfield);
}
function destructivelyRemoveFirstDriver(Milo){
  drivers.shift(Milo);
}
function appendDriver(name){
  const copy=drivers.slice();
  copy.push(name);
  return copy;
}
function prependDriver(name){
  const copy=drivers.slice();
  copy.unshift(name);
  return copy;
}
function removeLastDriver(){
  const copy=drivers.slice();
  copy.pop();
  return copy;
}
function removeFirstDriver(Otis, Garfield){
  drivers.shift(Milo, Otis, Garfield);
}