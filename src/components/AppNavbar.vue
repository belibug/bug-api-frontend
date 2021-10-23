<template>
  <div class="navbar">
    <div class="container flex">
      <h1 class="logo">
        <a href="/">Bug Apps</a>
      </h1>
      <nav>
        <ul>
          <li><a href="/notes">Notes</a></li>
          <li><a href="/lasttime">Last Time</a></li>
          <li><a href="/timetracker">Time Tracker</a></li>
          <li><a href="/habittracker">Habit Tracker</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
h1,
h2 {
  /* font-weight: 300; */
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
</style>