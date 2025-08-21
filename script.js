 emailjs.initc("TU_PUBLIC_KEY");
        function CalcularDescuento(Edad){
            let descuento=0;
            if(edad <= 18){
                descuento=10;
            }else if (edad <=40){
                descuento=9;
            }else if (edad >=40){
                descuento=10;
        }else if (edad >=50){
                descuento=25;
            }
            document.getElementById('descuento').textContent="Tu descuento es de:"+descuento+"%";
        }
        document.getElementById("formRegistro").addEventListener("submit", function(event){
            event.preventDefault();
            emailjs.sendForm('Tu_service_id', 'Tu_template_id', this).then(()=>alert("Formulario enviado correctamente."),(err)=>alert("Error:" + JSON.stringify(err)));
        });