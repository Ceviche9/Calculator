class Calculadora {

    constructor() {

        this.display = document.querySelector('.display');
        this.n1 = '';
        this.n2= '';
        this.sym = '';
        this.flag = false;


    }

    start() {

        alert('Olá')
        this.click();
        console.log(this.flag);

    }

    click(){

        console.log('fui chamado');
        let flag = this.flag;
        flag = true;
        console.log(flag);

        document.addEventListener('click', e => {

            const el = e.target;

            if(el.classList.contains('btn-num')) {

                console.log('Número');
                console.log(flag);

                if(flag == true) {

                    console.log(el);
                    this.display.value += el.innerText;
                    this.n1 += el.innerText;
                    console.log(this.n1);
                    console.log('Estou dentro do N1');
                    console.log(flag);

                }

                if(flag == false) {

                    console.log('Agora estou dentro do N2');
                    console.log(el);
                    this.display.value += el.innerText;
                    this.n2 += el.innerText;
                    console.log(this.n2);
                    console.log(flag);

                }

                console.log('Número');
                console.log(flag);


            }

            console.log('Estou entre os if')
            console.log(flag);

            if(el.classList.contains('btn-sym') && flag == true){

                console.log('Simbolo');
                this.display.value += el.innerText;
                this.sym = el.innerText;
                console.log(this.sym);
                flag = false;
                console.log(flag);

            }

            if(el.classList.contains('btn-clear')){

                this.n1 = '';
                this.n2 = '';
                this.sym = '';
                this.display.value = '';
                console.log('Limpei');
                flag = true;

            }

            if(el.classList.contains('btn-result')) {

                console.log('Estou no resultado')
                console.log(this.n1, this.n2)
                Number(this.n1);
                Number(this.n2);
                this.result();
                flag = true; 
               
            }

            if(el.classList.contains('btn-del')) {

                console.log('Vou apagar e a minha flag está', flag)
                if(flag == true){

                    console.log('Estou dentro do true com a flag->', flag)

                    this.display.value = this.display.value.slice(0, -1);
                    this.n1 = this.n1.slice(0,-1);
                    console.log(this.n1)
                    return;

                }

                
                if(flag == false){

                    console.log('Estou dentro do false com a flag->', flag)

                    if(this.n2){

                        console.log('Estou indo apagar o n2->', flag)

                        this.display.value = this.display.value.slice(0, -1);
                        this.n2 = this.n2.slice(0,-1);
                        console.log(this.n2);
                        return;

                    }

                    if(this.sym = ''){

                        console.log('Estou indo apagar o n1->', flag)

                        flag = true;    
                        this.display.value = this.display.value.slice(0, -1);
                        this.n1 = this.n1.slice(0,-1);
                        console.log(this.n1);
                        console.log('Apaguei o ultimos valor e minha flag é ', flag)
                        return;

                    }

                   

                }



            }

            

        })

    }

    result(){

        try{

            let conta = 0;

            if(this.sym === '+'){

                this.sym = '';
                let n1 = Number(this.n1)
                let n2 = Number(this.n2)
                conta = n1 + n2
                this.n1 = conta;
                this.n2 = '';
                this.sym= '';
                return this.display.value = conta;

            }

            if(this.sym === '-'){

                this.sym = '';
                let n1 = Number(this.n1)
                let n2 = Number(this.n2)
                conta = n1 - n2;
                this.n1 = conta;
                this.n2 = '';
                this.sym= '';
                return this.display.value = conta;

            }

            if(this.sym === '*'){

                this.sym = '';
                let n1 = Number(this.n1)
                let n2 = Number(this.n2)
                conta = n1 * n2;
                this.n1 = conta;
                this.n2 = '';
                this.sym= '';
                return this.display.value = conta;

            }
            if(this.sym === '/'){

                this.sym = '';
                let n1 = Number(this.n1)
                let n2 = Number(this.n2)
                conta = n1 / n2;
                this.n1 = conta;
                this.n2 = '';
                this.sym= '';
                return this.display.value = conta;

            }

            else{

                alert('Conta inválida');
            }


        }catch(e){

            console.log('Conta inválida')

        }



    }



}

const cal = new Calculadora();
cal.start();