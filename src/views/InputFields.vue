<template>
  <div class="container">
    <div class="section">
      <div class="input-box">
        <div class="header-bar" @click="showNoteField = !showNoteField">
          <h2>Notes</h2>
        </div>
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
      </div>
      <div class="input-box">
        <div class="header-bar" @click="showTrackerField = !showTrackerField">
          <h2>Tracker</h2>
        </div>
        <div class="input-form" v-if="showTrackerField">
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
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showNoteField: false as boolean,
      showTrackerField: false as boolean,
    };
  },
});
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.input-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.input-form {
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border: 1px black solid;
  border-top: 0px;
  width: 800px;
  /* width: 30rem; */
  /* display: none; */
}
.form-control input[type="text"],
.form-control input[type="datetime-local"],
.form-control input[type="number"],
.form-control textarea {
  border: 0;
  border-bottom: 1px solid #000;
  width: 95%;
  padding: 3px;
  font-size: 1.2em;
}
.form-control input:focus,
.form-control textarea:focus {
  outline: none;
}
textarea {
  height: 4em;
}
.header-bar {
  background-color: burlywood;
  padding: 2px 30px;
  width: 80%;
  border-radius: 15px;
  user-select: none;
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
