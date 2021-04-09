<template>
  <div id="app">
    <div><Navbar/></div>
    <div class="main">
      <Header/>
    <Sidebar/>
    <!-- <nav class="navbar">
      <ul class="nav-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav> -->
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: "App",
  components: {
    Header,
    Sidebar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  border: 2px solid #e7e7e8;
    background-color: #e7e7e8;

}
.navbar{
    display:flex;
    align-items:center;
    justify-content:center;
    position:sticky;
    top:0;
   cursor: pointer;
}
      
.nav-list{
    width:70%;
    display:flex;
}
      
.nav-list li{      
    list-style:none;
    text-decoration: none;    
    padding:2px 6px;
    color: white;

}
.main {
  margin-left: 160px; 
  padding: 0px 10px;
}
</style>








