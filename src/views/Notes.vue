<template>
  <div class="input-box">
    <div class="input-form card">
      <!-- <h2></h2> -->
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
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style scoped>
</style>
