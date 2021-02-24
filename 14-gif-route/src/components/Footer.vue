<template>
  <div class="footer">
      <footer class="text-center bg-dark text-white py-4">
          <h3>&copy; {{ year }} - John Reyes</h3>
      </footer>
  </div>
</template>

<script>
export default {
    data: () => ({
        year: new Date().getFullYear()
    })
};
</script>

<style>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>