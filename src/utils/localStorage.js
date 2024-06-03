export const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const findUser = (username) => {
  const users = getUsers();
  return users.find(user => user.username === username);
};

export const authenticateUser = (username, password) => {
  const users = getUsers();
  return users.find(user => user.username === username && user.password === password);
};

export const setLoggedInUser = (username) => {
  localStorage.setItem('loggedInUser', username);
};

export const getLoggedInUser = () => localStorage.getItem('loggedInUser');

export const logoutUser = () => {
  localStorage.removeItem('loggedInUser');
};


if (!findUser('admin')) {
  saveUser({ username: 'admin', password: 'admin' });
}
