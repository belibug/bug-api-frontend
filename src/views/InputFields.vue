<template>
  <div class="container">
    <div class="section">
      <div class="menu-header">
        <div
          class="header-bar"
          :class="{ active: showNoteField }"
          @click="showView(1)"
        >
          <h2>Notes</h2>
        </div>
        <div
          class="header-bar"
          :class="{ active: showTimeTrackerField }"
          @click="showView(2)"
        >
          <h2>Time Tracker</h2>
        </div>
        <div
          class="header-bar"
          :class="{ active: showLastTimeField }"
          @click="showView(3)"
        >
          <h2>Last Time</h2>
        </div>
        <div
          class="header-bar"
          :class="{ active: showHabitField }"
          @click="showView(4)"
        >
          <h2>Habit Tracker</h2>
        </div>
      </div>
      <div class="menu-box">
        <div class="input-form" v-if="showNoteField">
          <form @submit.prevent="noteSubmit" ref="noteForm">
            <div class="form-control">
              <input
                type="text"
                v-model="note.title"
                name="title"
                placeholder="Title"
                required
              />
            </div>
            <div class="form-control">
              <textarea
                type="text"
                v-model="note.body"
                name="body"
                placeholder="content"
              />
            </div>
            <div class="submit-btn">
              <input type="submit" class="btn btn-primary" value="Add" />
            </div>
          </form>
        </div>
        <div class="input-form" v-if="showTimeTrackerField">
          <form @submit.prevent="timeTSbumit" ref="timeTForm">
            <div class="form-control">
              <input
                type="text"
                name="name"
                placeholder="activity name"
                required
                v-model="timeT.name"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="category"
                placeholder="category"
                required
                v-model="timeT.category"
              />
            </div>
            <div class="form-control">
              <input
                type="number"
                name="duration"
                placeholder="duration in minutes"
                required
                v-model="timeT.duration"
              />
              <div class="form-control">
                <input
                  type="text"
                  name="comments"
                  placeholder="comments"
                  v-model="timeT.comment"
                />
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
        <div class="input-form" v-if="showLastTimeField">
          <form @submit.prevent="lastTSubmit" ref="lastTForm">
            <div class="form-control">
              <input
                type="text"
                name="name"
                placeholder="activity name"
                required
                v-model="lastT.name"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="category"
                placeholder="category"
                required
                v-model="lastT.category"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="comment"
                placeholder="comments"
                v-model="lastT.comment"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="tag"
                placeholder="tags"
                v-model="lastT.tags"
              />
            </div>
            <div class="form-control">
              <input
                type="datetime-local"
                name="timestamp"
                v-model="lastT.timestamp"
              />
            </div>
            <div class="submit-btn">
              <input type="submit" class="btn btn-primary" value="Add" />
            </div>
          </form>
        </div>
        <div class="input-form" v-if="showHabitField">
          <form @submit.prevent="habitTSubmit" ref="habitTForm">
            <div class="form-control">
              <input
                type="text"
                name="name"
                placeholder="activity name"
                required
                v-model="habitT.name"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="type"
                placeholder="type"
                required
                v-model="habitT.type"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="comment"
                placeholder="comments"
                v-model="habitT.comment"
              />
            </div>
            <div class="form-control">
              <input
                type="datetime-local"
                name="timestamp"
                v-model="habitT.timestamp"
              />
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
import {
  isNote,
  isHabitTracker,
  isLastTime,
  isTimeTracker,
} from "../interfaces";
import NotesApi from "../store/api/notes";
import LastTimeApi from "../store/api/lastTime";
import TimeTrackerApi from "../store/api/timeTracker";
import HabitTrackerApi from "../store/api/habitTracker";

export default defineComponent({
  data() {
    return {
      showNoteField: true as boolean,
      showHabitField: false as boolean,
      showLastTimeField: false as boolean,
      showTimeTrackerField: false as boolean,
      note: {} as isNote,
      habitT: {} as isHabitTracker,
      lastT: {} as isLastTime,
      timeT: {} as isTimeTracker,
    };
  },
  methods: {
    showView(num: number) {
      this.showNoteField = false;
      this.showHabitField = false;
      this.showLastTimeField = false;
      this.showTimeTrackerField = false;
      switch (num) {
        case 1:
          this.showNoteField = true;
          break;
        case 2:
          this.showTimeTrackerField = true;
          break;
        case 3:
          this.showLastTimeField = true;
          break;
        case 4:
          this.showHabitField = true;
          break;
      }
    },
    noteSubmit() {
      console.log("submitting note");
      NotesApi.addNote(this.note);
      this.note = {} as isNote;
    },
    timeTSbumit() {
      console.log("Submitting Time Tracker");
      TimeTrackerApi.addEntry(this.timeT);
      this.timeT = {} as isTimeTracker;
    },
    lastTSubmit() {
      console.log("Submitting Last Time");
      LastTimeApi.addEntry(this.lastT);
      this.lastT = {} as isLastTime;
    },
    habitTSubmit() {
      console.log("Submitting Habit Tracker");
      HabitTrackerApi.addEntry(this.habitT);
      this.habitT = {} as isHabitTracker;
    },
  },
});
</script>

<style scoped>
.section {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 20px;
}

.menu-header {
  /* height: 400px; */
  height: auto;
  margin: 15px 0;
  padding: 30px 0;
  width: 30%;
  margin: 15px 0;
}

.menu-box {
  padding: 10px;
  /* height: 500px; */
  height: auto;
  width: 68%;
  border: 1px black solid;
  margin: 15px 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 10px;
}

.header-bar {
  background-color: #fff;
  padding: 10px;
}
.header-bar:hover {
  cursor: pointer;
  user-select: none;
}

.header-bar.active {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px black solid;
  border-right: none;
  transform: translateX(1px);
}

.input-form {
  padding: 20px;
  width: 100%;
}

.form-control input[type="text"],
.form-control input[type="datetime-local"],
.form-control input[type="number"],
.form-control textarea {
  border: 0;
  border-bottom: 1px solid #000;
  width: 100%;
  padding: 2px;
  margin-bottom: 2rem;
  font-size: 1.2em;
}
.form-control input:focus,
.form-control textarea:focus {
  outline: none;
}
textarea {
  height: 4em;
}

@media only screen and (max-width: 700px) {
  .container {
    padding: 10px;
  }
  .section {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: 0px;
  }
  h2 {
    font-size: 12px;
  }
  .menu-header {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0;
  }

  .menu-box {
    height: auto;
    width: 100%;
    border: 1px black solid;
    margin: 0px;
    border-radius: 5px;
  }

  .header-bar {
    margin: 0;
    padding: 0 8px;
    font-size: 0.8em;
  }

  .header-bar:hover {
    cursor: pointer;
    user-select: none;
  }

  .header-bar.active {
    border: 1px black solid;
    border-radius: 15px;
  }

  .input-form {
    margin: 0px;
    padding: 10px;
    width: 100%;
  }

  .form-control input[type="text"],
  .form-control input[type="datetime-local"],
  .form-control input[type="number"],
  .form-control textarea {
    border: 0;
    border-bottom: 1px solid #000;
    width: 100%;
    padding: 2px;
    margin-bottom: 2rem;
    font-size: 1.2em;
  }
  .form-control input:focus,
  .form-control textarea:focus {
    outline: none;
  }
  textarea {
    height: 4em;
  }
}
</style>
