const digits="0123456789";
const alpha="AfBgChDiEj";
const spec="#(>?|{:*?~";

const field=document.querySelector('.field-of-pas');
const len=document.querySelector('.length-box')
const digit=document.querySelector('.digit-box');
const char=document.querySelector('.char-box');
const special=document.querySelector('.spec-box');
const submit=document.querySelector('.submit');
submit.addEventListener('click',Get);
function Get()
{
   let length=Number(len.value);
   if(length>=1&&length<=20)
   {
        let pass=""; 
        let i=0;
        if(digit.checked!=true&&char.checked!=true&&special.checked!=true)
        {
            console.error('no parameters set');
            field.classList.add('error');
            field.value="Tick atleast one";
            return;
        }
        while(i<length)
        {
            if(digit.checked&&i<length)
            {
             i++;
             pass+=digits.charAt(generate(9));  
            }
            if(char.checked&&i<length)
            {
             i++;
             pass+=alpha.charAt(generate(9));  
            }
            if(special.checked&&i<length)
            {
             i++;
             pass+=spec.charAt(generate(9));  
            }
        }  
        field.classList.remove('error');  
        field.value=pass;
   }
   else
   {
        field.classList.add('error');
        field.value="Please check requested length";
        console.error("invalid length");
   }
}
function generate(limit)
{
    let n=Math.random();
    n=(n*limit)+1;
    return Math.floor(n);
}
 
