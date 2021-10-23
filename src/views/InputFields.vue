<template>
  <div class="container">
    <div class="section">
      <div class="menu-header">
        <div class="header-bar" @click="showView(1)">
          <h2>Notes</h2>
        </div>
        <div class="header-bar" @click="showView(2)">
          <h2>Tracker</h2>
        </div>
      </div>
      <div class="menu-box">
        <div class="input-form" v-if="showNoteField">
          <form>
            <div class="form-control">
              <input type="text" name="title" placeholder="title" required />
            </div>
            <div class="form-control">
              <textarea type="text" name="body" placeholder="content" />
            </div>
            <div class="submit-btn">
              <input type="submit" class="btn btn-primary" value="Add" />
            </div>
          </form>
        </div>
        <div class="input-form" v-if="showTrackerField">
          <form>
            <div class="form-control">
              <input
                type="text"
                name="name"
                placeholder="activity name"
                required
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="category"
                placeholder="category"
                required
              />
            </div>
            <div class="form-control">
              <input
                type="number"
                name="duration"
                placeholder="duration in minutes"
                required
              />
              <div class="form-control">
                <input type="text" name="comments" placeholder="comments" />
              </div>
            </div>
            <div class="form-control">
              <input type="datetime-local" name="timestamp" />
            </div>
            <div class="submit-btn">
              <input type="submit" class="btn btn-primary" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showNoteField: true as boolean,
      showTrackerField: false as boolean,
    };
  },
  methods: {
    showView(num: number) {
      this.showNoteField = num == 1 ? true : false;
      this.showTrackerField = num == 2 ? true : false;
    },
  },
});
</script>

<style scoped>
.section {
  display: flex;

  align-content: center;
  justify-content: center;
}

.menu-header {
  height: 400px;
  background-color: cadetblue;
  margin: 5px;
  padding: 10px;
  width: 20%;
}
.menu-box {
  padding: 10px;
  margin: 5px;
  height: 400px;
  width: 40%;
  background-color: coral;
}

.header-bar {
  background-color: blanchedalmond;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
}

@media only screen and (max-width: 600px) {
  .header-bar {
    background-color: rgb(255, 0, 0);
    width: 100%;
    border-radius: 15px;
    user-select: none;
  }
  .input-form {
    /* padding: 20px; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border: 1px black solid;
    border-top: 0px;
    max-width: 90%;
  }
}
</style>
