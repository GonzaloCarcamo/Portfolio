let projects = document.querySelector('#projects');
const javascript = document.querySelector('.javascript');
const react = document.querySelector('.react');
const node = document.querySelector('.node');
const videos = document.querySelector('.videos');

const project = document.querySelectorAll('.project');

javascript.addEventListener('click', showJavascript);
react.addEventListener('click', showReact);
node.addEventListener('click', showNode);
videos.addEventListener('click', showVideos);

function showJavascript(e){
        e.preventDefault();
        for(let i = 0; i < project.length; i++){
                project[i].style.display = 'inline-block';
                if(project[i].classList.value !== 'project javascript'){
                        project[i].style.display = 'none';
                }

        }
}

function showReact(e){
        e.preventDefault();

        for(let i = 0; i < project.length; i++){
                project[i].style.display = 'inline-block';
                if(project[i].classList.value !== 'project react'){
                        project[i].style.display = 'none';
                }

        }
}

function showNode(e){
        e.preventDefault();

        for(let i = 0; i < project.length; i++){
                project[i].style.display = 'inline-block';
                if(project[i].classList.value !== 'project node'){
                        project[i].style.display = 'none';
                }

        }
}

function showVideos(e){
        e.preventDefault();

        for(let i = 0; i < project.length; i++){
                project[i].style.display = 'inline-block';
                if(project[i].classList.value !== 'project videos'){
                        project[i].style.display = 'none';
                }

        }
}
