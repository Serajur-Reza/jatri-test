import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    async fetchPosts() {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log(result);
        this.posts = result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
