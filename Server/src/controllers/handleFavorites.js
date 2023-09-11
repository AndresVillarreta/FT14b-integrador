let myFavorites = [];

function postFav(req, res) {
  let newFav = req.body;
  myFavorites.push(newFav);
  res.json(myFavorites);
}

function deleteFav(req, res) {
  let favToDelete = req.params.id;
  myFavorites = myFavorites.filter((fav) => fav.id !== favToDelete);
  res.json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
};
