<template>
    <div><h1>This is side menu</h1>
    <div class="sidenav">
  <nav class="navbar">
      <ul class="nav-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <!-- <router-view></router-view> -->
</div>
</div>
</template>

<script>

export default{
    name: 'Sidebar'
}
</script>



<style scoped>
.sidenav {
  height: 100%; 
  width: 160px; 
  position: fixed;
  z-index: 1;
  top: 0; 
  left: 0;
  background-color: #111; 
  overflow-x: hidden; 
  padding-top: 20px;
}
.nav-list {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
.sidenav a:hover {
  color: #f1f1f1;
}

</style>
