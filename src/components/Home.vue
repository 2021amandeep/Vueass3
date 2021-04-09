<template>
<div>
   <!-- Conditional Rendring -->
   <!-- if/else -->
    <h1 v-if="show">Hello from home component with *if*</h1>
    <h1 v-else>if condition will false then this will be shown</h1>
    <button v-on:click="display">Toggle</button>
    <hr/>
    <!-- For Loop -->
    <table>
       <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
       </tr>
       <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
       </tr>
    </table>
    <hr/>
    <button v-on:mouseover="hello('amandeep')"> Call Hello Function</button>
    <hr/>
    <form>
<div class="formContainer">
<h1>Please sign Up to explore our website</h1>
<hr>
<label for="email"><b>Email</b></label>
<input type="text" placeholder="Enter Email" name="email" required>
<label for="password"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="password" required>
<label for="repeatPassword"><b>Repeat Password</b></label>
<input type="password" placeholder="Repeat Password" name="repeatPassword"
required>
<label>
<input type="checkbox" checked="checked" name="remember" style="marginbottom: 15px"> Remember me
</label>
<p>By creating an account you agree to our <a href="#"
style="color:dodgerblue">Terms & Privacy</a><p>
<div>
<button type="button" class="cancel">Cancel</button>
<button type="submit" class="signup">Sign Up</button>
</div>
</div>
</form>
</div>
</template>

<script>

export default {
    name: 'Home',
    methods: {
   hello(data)
   {
      alert(data);
   },
   display()
   {
      this.show=!this.show
   }
},
data()
{
   return{show: false,
   users:[
      {id:1, name:'aman', email:'aman@gmail.com'},
      {id:2, name:'aman', email:'aman@gmail.com'},
      {id:3, name:'aman', email:'aman@gmail.com'},
      {id:4, name:'aman', email:'aman@gmail.com'}
   ]}
}
// return{
//    users:[
//       {id:1, name:'aman', email:'aman@gmail.com'}
//    ]
// }
}
</script>

<style scoped>
h1{
    color: blanchedalmond;
    background: brown;
}
body{
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
* {box-sizing: border-box}
input[type=text], input[type=password] {
   width: 100%;
   font-size: 28px;
   padding: 15px;
   margin: 5px 0 22px 0;
   display: inline-block;
   border: none;
   background: #f1f1f1;
}
label{
   font-size: 15px;
}
input[type=text]:focus, input[type=password]:focus {
   background-color: #ddd;
   outline: none;
}
hr {
   border: 1px solid #f1f1f1;
   margin-bottom: 25px;
}
button {
   font-size: 18px;
   font-weight: bold;
   background-color: rgb(10, 119, 13);
   color: white;
   padding: 14px 20px;
   margin: 8px 0;
   border: none;
   cursor: pointer;
   width: 100%;
   opacity: 0.9;
}
button:hover {
   opacity:1;
}
.cancel {
   padding: 14px 20px;
   background-color: #ff3d2f;
}
.formContainer {
   padding: 16px;
}
.formContainer p{
   font-size: 28px;
}
</style>
