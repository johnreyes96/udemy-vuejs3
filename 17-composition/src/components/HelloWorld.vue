<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  setup() {
    const title = "Composition";
    return { title };
  }
}
</script>