const btn = document.querySelector('.btn')
const boll = document.querySelectorAll('.numbers li')
const list = document.querySelector('.list')

let count = 0


function addList(lotto){
    const ul = document.createElement('ul')
    ul.className = 'item'
    for(let i =0;i<lotto.length;i++){
        const li = document.createElement('li')
        li.innerText = lotto[i]
        ul.appendChild(li)
    } 
    list.prepend(ul)
}

function paintNumber(){

    let lotto =[]

    while(lotto.length <6){
        
        let num = Math.floor(Math.random()*45)+1
        if(!lotto.includes(num)){
            lotto.push(num)
        }
    }

    boll.forEach((item,i)=>{
        console.log(item,i);
        item.innerText = lotto[i]
    })

    addList(lotto)

}


btn.addEventListener('click',()=>{
    
    if(count >=10){
        snackbar.createSnackbar('하루 10번 제한',{
            actions: [
              {
                text: '확인',
                style: {
                  color: 'pink'
                },
                callback(button, snackbar) {
                snackbar.destroy()               
              }
            }
            ]
          })
          btn.classList.add('none')

    }else{
        paintNumber()
        count++
    }
})