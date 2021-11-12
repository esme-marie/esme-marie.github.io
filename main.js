function openNav() {
    document.getElementById("sidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  function wait() {
    setTimeout(function(){
      history.go(0);
    }, 2500);
  }