function cal(){
    let nasci =  document.getElementById("nasc").value;
      let atual = new Date().getFullYear();
      let total = atual - nasci;
  
      if(nasci===''){
          alert('Voce não inseriu o ano de nascimento');
      }
   
      else{
      document.getElementById("ano").innerText = `Em ${atual} você completará:`;
      document.getElementById("resposta").innerText = total;
  }
  }