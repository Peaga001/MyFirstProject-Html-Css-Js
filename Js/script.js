setTimeout(ApresentarModal, 3000);


//VALIDANDO MODAL

function ApresentarModal(){

    var modal = document.querySelector(".modal");

    if (modal!=null) {

        document.querySelector(".modal").style.display = "block";
        document.querySelector(".modal a").addEventListener("click",function(){

        document.querySelector(".modal").style.display = "none";

             }

            )
        
    }

}

    if (document.forms["modal_form"] != undefined)  {


        var form = document.forms["modal_form"];
        
        form.addEventListener("submit", validarFormModal);
        form.email.addEventListener("keyup", retornaInicio);

        function retornaInicio(){

                form.email.className="";
                document.querySelector("span.nao_valido").style.display="none";
        }

    }

    function validarFormModal(evt){

        var form = document.forms["modal_form"];

        var inputEmail = form.email;
        var valorEmail = form.email.value;
        var posicaoArroba = valorEmail.indexOf("@");


        if (!validarEmail(valorEmail)) {

            inputEmail.className = "nao_valido";
            document.querySelector("span.nao_valido").style.display="block";


            evt.preventDefault();
        }
    }
    

    //VALIDAÇÃO FALE CONOSCO
    

    if (document.forms["form_fale_conosco"] != undefined) { // DEIXANDO COM A LINHA VERMELHA

        var form = document.forms["form_fale_conosco"]; 

        form.addEventListener("submit",validandoForm);

            function validandoForm(evt){

                var formValido = true;

                if (!NaoVazio(form.NomeCompleto.value)) { // NOME

                    form.NomeCompleto.className = "nao_valido";
                    formValido = false;
                    
                }

                
                if (!NaoVazio(form.Telefone.value)) { // TELEFONE

                    form.Telefone.className = "nao_valido";
                    formValido = false;
                    
                }
                
                if (!NaoVazio(form.Mensagem.value)) { // MENSAGEM

                    form.Mensagem.className = "nao_valido";
                    formValido = false;
                    
                }
                
                if (!validarEmail(form.Email.value)) { // EMAIL

                    form.Email.className = "nao_valido";
                    formValido = false;
                    
                }



                if (!formValido) {

                    evt.preventDefault();
                    
                }
            }

        
    }

    var inputs = document.querySelectorAll("form[name=form_fale_conosco] input[type=text]");

    for (var i = 0; i < inputs.length; i++) {
        
        inputs[i].addEventListener("keypress", resetaCampo);

    }

    var mensagem = document.querySelector("form[name=form_fale_conosco] textarea");
    mensagem.addEventListener("keyup", resetaCampo);


    /*FUNÇÕES*/
    
    function validarEmail(valorEmail){

    if 
        (

        valorEmail != "" && 
        valorEmail.indexOf("@") > 3 && 
        valorEmail.lastIndexOf(".") > posicaoArroba
        ){
            return true;
         }
    else {

            return false;
    }

    }

    function NaoVazio(text){


        if (text.trim().lenght > 0) {
            return true;
        }

        else{
            return false;
        }

    }

    function resetaCampo(){


        this.className="";
        document.querySelector(".texto").innerHTML = "Caractere(s) "+ this.value.length;

    }


    
