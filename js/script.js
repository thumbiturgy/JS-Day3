const taskMaker = document.querySelector('#task-maker')
const taskName = document.querySelector('#taskmaster')
const taskDesc = document.querySelector('#description')
const button = document.querySelector('#commit')
const cardBox = document.querySelector('#card-display')


taskMaker.addEventListener('commit',(event)=>{
    event.preventDefault()
    const taskName = getTask()
    handleTaskData(data)
})



function getTask(){
    const taskName = document.querySelector('#taskmaster').value 
    const taskDescription = document.querySelector('description')
    return taskName, taskDescription
}

function handleTaskData(name,description) {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const d = document.createElement('p')
    div.id = `card-${name}`
    p.innerText = name
    d.innerText = description
    div.append(p,d)
    div.addEventListener('click', ()=> div.remove())
}