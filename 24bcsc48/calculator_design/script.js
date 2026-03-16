const buttons = document.querySelectorAll('button');

const dis = document.getElementsByName('resDis')[0];

buttons.forEach((button)=>{

    button.addEventListener('click',()=>{

        if(button.classList.contains('equal')){

            let res;

            try{
                res = eval(dis.value.replace(/x/g,'*'));

                if(res === Infinity)
                    throw new Error('Division by zero error!');
            }
            catch(err){
                res = err.message;
            }

            dis.value = res;
        }

        else if(button.classList.contains('clr'))
            dis.value = '';

        else if(button.classList.contains('del'))
            dis.value = dis.value.slice(0,-1);

        else
            dis.value += button.innerText;
    });
})