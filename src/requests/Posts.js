import { JPclients } from "../clients/JPclients";

const post_endpoint="/posts"
const getPosts = () => {
  return JPclients.get(post_endpoint);
};

export { getPosts };
