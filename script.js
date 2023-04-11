let copyCodeIcons = document.querySelectorAll(".copy-code");

let codes = document.querySelectorAll("code");

copyCodeIcons.forEach((copyCodeIcon, index) => {
    copyCodeIcon.addEventListener("click", ()=>{
        navigator.clipboard.writeText(codes[index].innerHTML);
        
        Swal.fire({
            icon: 'success',
            title: 'Copied Successfully',
            text: 'Text Copied Successfully',
        })
    })
})

