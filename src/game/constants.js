const WORLDHEIGHT = 665;
const WORLDWIDTH = 1375;

let preloadAll = (list) => {
  list.forEach((element) => {
    element.preload();
  })
}

let createAll = (list) => {
  list.forEach((element) => {
    element.create();
  })
}

let updateAll = (list) => {
  list.forEach((element) => {
    element.update();
  })
}
