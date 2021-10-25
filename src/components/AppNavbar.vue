<template>
  <div class="navbar">
    <div class="container flex">
      <h1 class="logo">
        <router-link to="/notes">BuG Apps</router-link>
      </h1>
      <nav>
        <ul>
          <router-link to="/notes">Notes</router-link>
          <router-link to="/lasttime">Last Time</router-link>
          <router-link to="/timetracker">Time Tracker</router-link>
          <router-link to="/habittracker">Hait Tracker</router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
h1,
h2 {
  margin: 10px 0;
}
a {
  text-decoration: none;
  padding: 10px;
  color: #fff;
  margin: 0 5px;
}
a:hover {
  border-bottom: 2px #fff solid;
}
.navbar {
  background-color: #047aed;
  color: #fff;
  height: 80px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
ul {
  display: flex;
}
li {
  list-style: none;
}
@media only screen and (max-width: 700px) {
  .container {
    padding: 10px;
  }
  h1,
  a {
    padding: 0;
    margin: 0;
  }
  .flex {
    justify-content: center;
  }
  nav {
    display: none;
  }
}
</style>