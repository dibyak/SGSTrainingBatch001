<template>
  <button type="button" :style="{'background-color ': BGColour}" @click="$emit('submit')" id="button">{{name}}</button>
</template>

<script>
export default {
 name: "NewButton",
 props: {
    name: String,
    BGColour: String
 }
}
</script>

<style>
#button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}
#button2 {
  background-color: grey;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}
</style>