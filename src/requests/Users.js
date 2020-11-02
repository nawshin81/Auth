import { JPclients } from "../clients/JPclients";
const user_endpoint = "/users";
const getUsers = () => {
  return JPclients.get(user_endpoint);
};

export { getUsers };
