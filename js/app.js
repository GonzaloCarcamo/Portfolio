const javascript = document.querySelector('.javascript');
let project = document.querySelectorAll('.project');

javascript.addEventListener('click', showJavascript);

function showJavascript(e){
        e.preventDefault();

        for(let i = 0; i < project.length; i++){
                if(project[i].classList.value !== 'project javascript'){
                        project[i].style.display = 'none';
                }

        }
}