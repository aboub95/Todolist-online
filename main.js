const inputTask = document.querySelector('.inputTask')
const addTask = document.querySelector(`.addTask`)
const list = document.querySelector('.List')


function creatTask(taskValue) {
  const li = creatLi()
  li.innerHTML = taskValue
  list.appendChild(li)
  clearInput()
  creatButton(li)
  saveTask()

}

function clearInput() {
  inputTask.value = ''
  inputTask.focus()
}

inputTask.addEventListener('keypress', (e) => {
  if (!inputTask.value) return
  if (e.key === 'Enter') {
    creatTask(inputTask.value)
  }
})

function creatLi() {
  const li = document.createElement('li')
  return li
}

function creatButton(li) {
  const span = document.createElement('span')
  span.innerHTML = '<i class="fas fa-trash"></i>';

  span.classList.add('delete')
  span.addEventListener('click', function() {
    span.parentElement.remove()
    saveTask()
  })
  li.appendChild(span)
}

function saveTask() {
  const liTask = list.querySelectorAll('li')
  const listArr = []

  for (let task of liTask) {
    let taskText = task.innerText
    listArr.push(taskText)
  }


  const jsonTask = JSON.stringify(listArr)
  localStorage.setItem('task', jsonTask)
}

function addSaveTask() {
  let getTask = localStorage.getItem('task')

  let jsonTask = JSON.parse(getTask)

  for (let task of jsonTask) {
    creatTask(task)
  }
}
addSaveTask()

addTask.addEventListener('click', function() {
  if (!inputTask.value) return
  creatTask(inputTask.value)
})