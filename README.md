## Introduction.

Calculators are not only one of the most useful tools available, but they are also a great way to understand UI and event processing in an application. 

> This calculator does not use ``` eval() ``` function to execute calculations.

## 💻 Languages and Tools.

![image](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)
![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)
![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)



# Interface.

![Big Number (1)](https://user-images.githubusercontent.com/83431609/121712853-90f69280-cab2-11eb-87f5-1d8a2d6f3915.png)

# Java Script.

``` js
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
                    this.n1 = Array.from(this.n1).slice(0,-1);
                    this.n1.toString();

                    console.log('O valor de n1 agora é -> ' + this.n1);
                    return;

                }

                
                if(flag == false){

                    console.log('Estou dentro do false com a flag->', flag)

                    if(this.n2){

                        console.log('Estou indo apagar o n2->', flag)

                        this.display.value = this.display.value.slice(0, -1);
                        this.n2 = Array.from(this.n2).slice(0,-1);
                        this.n2.toString();

                        console.log('O valor de n1 agora é -> ' + this.n2);
                        return;

                    }

                    if(this.sym = ''){

                        console.log('Estou indo apagar o n1->', flag)

                        flag = true;    
                        this.display.value = this.display.value.slice(0, -1);
                        this.sym = Array.from(this.sym).slice(0,-1);
                        this.sym.toString();

                        console.log('O valor de n1 agora é -> ' + this.sym);
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
                this.n1 = conta.toString();
                console.log('Valor de n1 -> ' + this.n1);
                this.n2 = '';
                this.sym= '';
                return this.display.value = conta;

            }

            if(this.sym === '-'){

                this.sym = '';
                let n1 = Number(this.n1)
                let n2 = Number(this.n2)
                conta = n1 - n2;
                this.n1 = conta.toString();
                console.log('Valor de n1 -> ' + this.n1);
                this.n2 = '';
                this.sym= '';
                return this.display.value = conta;

            }

            if(this.sym === '*'){

                this.sym = '';
                let n1 = Number(this.n1)
                let n2 = Number(this.n2)
                conta = n1 * n2;
                this.n1 = conta.toString();
                console.log('Valor de n1 -> ' + this.n1);
                this.n2 = '';
                this.sym= '';
                return this.display.value = conta;

            }
            if(this.sym === '/'){

                this.sym = '';
                let n1 = Number(this.n1)
                let n2 = Number(this.n2)
                conta = n1 / n2;
                this.n1 = conta.toString();
                console.log('Valor de n1 -> ' + this.n1);
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

```



# HTML.

``` js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calculadora</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <section  class="Caixa" >
        <h1>Calculadora</h1>
        <table class="calculadora" >
            <tr>
               <td colspan="4" ><input type="text" class="display" ></td> 
            </tr>

            <tr>
                <td><button class="btn btn-clear">C</button></td>
                <td><button class="btn btn-num" >(</button></td>
                <td><button class="btn btn-num" >)</button></td>
                <td><button class="btn btn-sym" >/</button></td>
            </tr>

            <tr>
                <td><button class="btn btn-num" >7</button></td>
                <td><button class="btn btn-num" >8</button></td>
                <td><button class="btn btn-num" >9</button></td>
                <td><button class="btn btn-sym" >*</button></td>
            </tr>

            <tr>
                <td><button class="btn btn-num" >4</button></td>
                <td><button class="btn btn-num" >5</button></td>
                <td><button class="btn btn-num" >6</button></td>
                <td><button class="btn btn-sym" >+</button></td>
            </tr>

            <tr>
                <td><button class="btn btn-num" >1</button></td>
                <td><button class="btn btn-num" >2</button></td>
                <td><button class="btn btn-num" >3</button></td>
                <td><button class="btn btn-sym" >-</button></td>
            </tr>
            <tr>
                <td><button class="btn btn-sym" >.</button></td>
                <td><button class="btn btn-num" >0</button></td>
                <td><button class="btn btn-del" >&laquo;</button></td>
                <td><button class="btn btn-result" >=</button></td>
            </tr>



        </table>

    </section>   
    <script src="./main.js"></script>
</body>
</html>


```

