function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed."
  };

 function login(id, password) {
    console.log("inside action creater--login");
     return {
        type: 'LOGIN',
        
     };
  }
