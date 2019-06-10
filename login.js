var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
<!-- <div class="hero-wrap" style="background-image: url('images/bg_6.jpg'); background-attachment:fixed;">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div class="col-md-8 ftco-animate text-center">
            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Admin</span></p>
            <h1 class="mb-3 bread">Admin</h1>
          </div>
        </div>
      </div>
    </div>
    <section>
    	<div>
    		<div class="container">
<div class="main">
<h2>Admin Login Form Validation</h2>
<form id="form_id" method="post" name="myform">
<label>User Name :</label>
<input type="text" name="username" id="username"/>
<label>Password :</label>
<input type="password" name="password" id="password"/>
<input type="button" value="Login" id="submit" onclick="validate()"/>
</form>
    	 <a href="link.html">
    </section>
   <section>
    	   <div class="container">
      <h1 id="OpenARS"></h1>
       
        <h3> The address of the current accident</h3>
      <table class="table-striped" id="table1">
    		
    			<tr>
                    <th> Address </th>
    			</tr>
    		
    	
    </div>
    <script src="firebase.js"></script>
    	<p> These are the following contents in the database for your hospital</p>
    	

</section>-->