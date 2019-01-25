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
function prependDriver(Arnold, Milo, Otis, Garfield){
  drivers.unshift(Milo, Otis, Garfield);
}
function removeLastDriver(Milo, Otis){
  drivers.pop(Milo, Otis, Garfield);
}
function removeFirstDriver(Otis, Garfield){
  drivers.shift(Milo, Otis, Garfield);
}