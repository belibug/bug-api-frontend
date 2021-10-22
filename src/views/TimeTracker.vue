<template>
  <div class="input-box">
    <div class="input-form card">
      <!-- <h2></h2> -->
      <form>
        <div class="form-control">
          <input type="text" name="name" placeholder="activity name" required />
        </div>
        <div class="form-control">
          <input type="text" name="category" placeholder="category" required />
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
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style scoped>
</style>
