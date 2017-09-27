import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Songs from "@/components/Songs/Index";
import CreateSong from "@/components/CreateSong";
import ViewSong from "@/components/ViewSong/ViewSong";
import EditSong from "@/components/EditSong";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/songs",
      name: "Songs",
      component: Songs
    },
    {
      path: "/songs/create",
      name: "Create Song",
      component: CreateSong
    },
    {
      path: "/songs/:songId/edit",
      name: "Edit Song",
      component: EditSong
    },
    {
      path: "/songs/:songId",
      name: "View Song",
      component: ViewSong
    },
    {
      path: "*",
      redirect: "songs"
    }
  ]
});
