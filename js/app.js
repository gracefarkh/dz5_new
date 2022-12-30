const tabItems = document.querySelectorAll(".tabheader__item")
const tabContent = document.querySelectorAll(".tabcontent")
const tabMain = document.querySelector(".tabheader__items")

      const hideContent  =()=>{
        tabContent.forEach((item)=>{
            item.style.display= "none"
        })
        tabItems.forEach((item)=>{
            item.classList.remove("tabheader__item_active")
        })
    }

      const showContent = (i=0)=>{
        tabContent[i].style.display = "block"
        tabItems[i].classList.add("tabheader__item_active")
      }

    hideContent()
    showContent()
//     let SlindeIndex = 0
// const changeIndex=()=>{
//     if(SlindeIndex<3){
//         SlindeIndex+=1
//         console.log(SlindeIndex)
//         hideContent()
//         showContent(SlindeIndex)
//     }else{
//         SlindeIndex=0
//         console.log(SlindeIndex)
//         hideContent()
//         showContent(SlindeIndex)
//     }
// }
// const SetSlide =setInterval(changeIndex,1000)
    
   

tabMain.addEventListener("click",(event) => {
    const target = event.target
    if(!target.classList.contains('tabheader__item_active')){
        tabItems.forEach((tab , idx)=>{
            if(target === tab){
                hideContent()
                showContent(idx)
                // clearInterval(SetSlide)
            }
        }
        )
    }
})


// hw 1
const  btnOpen = document.querySelector('.btn_white')
const modal = document.querySelector('.modal')
const closeModal= document.querySelector('.modal__close')


const  openModal=()=>{
    modal.classList.add('show')
    document.body.style.overflow ='hidden'
}
const closinModal=()=>{
    modal.classList.remove('show')
    document.body.style.overflow ='auto'
}


btnOpen.addEventListener('click',openModal)

window.addEventListener('click',(e)=>{
    if(e.target===modal){
       closinModal()
    }else if(e.target===closeModal){
        closinModal()
    }
})

//form



const form = document.querySelectorAll('form')

const messagText = {
    loading :`<div style = "color:orange" >
    <p>Loading...</p>
    <img src="img/loading.gif" alt="">
   </div>
   ` ,
    success :  `<div style = "color:green">
    <p>Success</p>
    <img src="img/winner.png" alt="">
   </div>
   `  ,
    error : `<div style = "color:red">
    <p>Error</p>
    <img src="img/loser.png" alt="">
   </div>
   ` 
}

form.forEach((form)=>{
    postData(form)
})

function postData (form) {
    form.addEventListener('submit',(event) =>{
        event.preventDefault()
        const request = new XMLHttpRequest()
        const modal__title = document.querySelector('.modal__title')
    
        modal__title.innerHTML = messagText.loading

 

        request.open('POST','server.php')
        request.setRequestHeader('Content-Type','multipart/form-data')
        
        const formData = new FormData(form)
        // formData.append('email','erkutbekt@gmail.com')
        // const obj={} 
        // formData.forEach((item,id)=>{
        //     obj[id]=item
        // })

        // const data = JSON.stringify(obj)

        request.send(formData)

        request.addEventListener('load',()=>{
            if(request.status === 200){
                modal__title.innerHTML = messagText.success
                // const data = JSON.parse(request.status)
            }else if (request.status>=400 && request.status<500){
                modal__title.innerHTML = messagText.error
            }
        })
    })
}