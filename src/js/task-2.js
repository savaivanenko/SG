import users from './users.json';
console.log(users);

// отбор активных играков
const isActivePlayers = users.filter(function (users) {
  return users.isActive;
});
console.table(isActivePlayers)

//сортировка по балансу от большой -> малый
const sortByBalance = isActivePlayers.sort(function (prevPlayer, nextPlayer) {
  return nextPlayer.balance - prevPlayer.balance
});
console.table(sortByBalance)

// отбор НЕ активных играков
const isNoActivePlayers = users.filter(function (users) {
  return !users.isActive;
});
console.table(isNoActivePlayers)