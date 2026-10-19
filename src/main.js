
import './style.css'

const app = document.querySelector('#app')

// Store all tasks in one array.
let tasks = []
let nextId = 1
let editingId = null

app.innerHTML = `
  <header class="border-b border-[#e8e5db]">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <a href="#" class="flex items-center gap-3 no-underline">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#245b43] text-xl text-white" aria-hidden="true">✓</span>
        <span class="text-2xl font-bold tracking-tight text-[#245b43]">TaskFlow</span>
      </a>
      <a href="#tasks" class="rounded-full bg-[#245b43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#194632] focus:outline-none focus:ring-4 focus:ring-[#477858]/30">
        Get Started →
      </a>
    </nav>
  </header>

  <main>
    <section class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <span class="inline-flex items-center gap-2 rounded-full border border-[#d9e5d9] bg-[#edf4eb] px-4 py-2 text-sm font-medium text-[#245b43]">
          <span class="h-2 w-2 rounded-full bg-[#56866a]" aria-hidden="true"></span>
          A calmer way to get things done
        </span>

        <h1 class="mt-7 max-w-xl text-5xl leading-tight font-bold tracking-tight text-[#24382d] sm:text-6xl">
          Make room for <span class="text-[#477858]">what matters.</span>
        </h1>

        <p class="mt-6 max-w-lg text-lg leading-8 text-[#73796f]">
          Your days are full of possibilities. Organize your tasks,
          celebrate your progress, and focus on one thing at a time.
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a href="#tasks" class="rounded-full bg-[#245b43] px-7 py-4 font-semibold text-white no-underline shadow-lg shadow-[#245b43]/15 transition hover:-translate-y-0.5 hover:bg-[#194632] focus:outline-none focus:ring-4 focus:ring-[#477858]/30">
            Start planning →
          </a>
          <span class="text-sm text-[#73796f]">One step at a time.</span>
        </div>

        <div class="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#e8e5db] pt-6">
          <div>
            <p class="text-xl font-bold text-[#245b43]">01</p>
            <p class="mt-1 text-sm text-[#73796f]">Find your focus</p>
          </div>
          <div>
            <p class="text-xl font-bold text-[#245b43]">02</p>
            <p class="mt-1 text-sm text-[#73796f]">Make a plan</p>
          </div>
          <div>
            <p class="text-xl font-bold text-[#245b43]">03</p>
            <p class="mt-1 text-sm text-[#73796f]">Make it happen</p>
          </div>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-md">
        <div class="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-[#e5ead8] blur-2xl" aria-hidden="true"></div>
        <div class="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-[#e6d8bc] blur-2xl" aria-hidden="true"></div>

        <div class="relative rounded-[2rem] border border-[#e8e5db] bg-white p-6 shadow-2xl shadow-[#24382d]/5 sm:p-8">
          <p class="text-sm font-medium text-[#73796f]">YOUR DAY, YOUR WAY</p>
          <h2 class="mt-2 text-2xl font-bold text-[#24382d]">A little progress</h2>

          <div class="mt-7 rounded-2xl bg-[#f8f7f2] p-4">
            <div class="flex items-center justify-between text-sm">
              <span class="font-medium text-[#24382d]">Today's focus</span>
              <span class="text-[#477858]">One step at a time</span>
            </div>
            <div class="mt-3 h-2 overflow-hidden rounded-full bg-[#e5e7dc]">
              <div class="h-full w-1/2 rounded-full bg-[#477858]"></div>
            </div>
          </div>

          <div class="mt-6 space-y-3">
            <div class="flex items-center gap-3 rounded-2xl border border-[#e8e5db] p-4">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#477858] text-sm text-white" aria-hidden="true">✓</span>
              <span class="text-sm text-[#92958b] line-through">Plan the week ahead</span>
            </div>
            <div class="flex items-center gap-3 rounded-2xl border border-[#d9e5d9] bg-[#f5f8f2] p-4">
              <span class="h-6 w-6 rounded-full border-2 border-[#477858]" aria-hidden="true"></span>
              <span class="text-sm font-medium text-[#24382d]">Study something new</span>
            </div>
            <div class="flex items-center gap-3 rounded-2xl border border-[#e8e5db] p-4">
              <span class="h-6 w-6 rounded-full border-2 border-[#d7d8cf]" aria-hidden="true"></span>
              <span class="text-sm text-[#73796f]">Take a mindful break</span>
            </div>
          </div>

          <div class="mt-6 rounded-2xl bg-[#245b43] p-5 text-white">
            <p class="text-sm text-white/75">A reminder for today</p>
            <p class="mt-2 text-lg font-semibold">Progress over perfection.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-[#e8e5db] bg-[#f0efe7]">
      <div class="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3 sm:gap-10">
        <article>
          <span class="text-2xl" aria-hidden="true">✳</span>
          <h2 class="mt-3 text-lg font-bold text-[#24382d]">Clear your mind</h2>
          <p class="mt-2 leading-7 text-[#73796f]">Put your thoughts into a simple plan instead of carrying everything in your head.</p>
        </article>
        <article>
          <span class="text-2xl" aria-hidden="true">↗</span>
          <h2 class="mt-3 text-lg font-bold text-[#24382d]">Find your rhythm</h2>
          <p class="mt-2 leading-7 text-[#73796f]">Choose what matters most and take the next small step at your own pace.</p>
        </article>
        <article>
          <span class="text-2xl" aria-hidden="true">♡</span>
          <h2 class="mt-3 text-lg font-bold text-[#24382d]">Celebrate progress</h2>
          <p class="mt-2 leading-7 text-[#73796f]">Every completed task is a small win worth recognizing.</p>
        </article>
      </div>
    </section>

    <section id="tasks" class="mx-auto max-w-4xl scroll-mt-8 px-6 py-20">
      <div class="text-center">
        <p class="text-sm font-semibold tracking-widest text-[#477858] uppercase">Your next chapter</p>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-[#24382d] sm:text-4xl">Let's make today count.</h2>
        <p class="mx-auto mt-4 max-w-xl leading-7 text-[#73796f]">
          Write it down, choose your priority, and take the first step.
        </p>
      </div>

      <form id="task-form" class="mt-8 rounded-3xl border border-[#e8e5db] bg-white p-5 shadow-sm sm:p-8" novalidate>
        <label for="task-input" class="block text-sm font-semibold text-[#24382d]">What would you like to accomplish?</label>

        <div class="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="task-input"
            name="task"
            type="text"
            maxlength="200"
            placeholder="e.g. Study JavaScript for 30 minutes"
            aria-describedby="task-error"
            class="min-w-0 flex-1 rounded-xl border border-[#dcded4] bg-[#fcfcf9] px-4 py-3 text-[#24382d] outline-none transition placeholder:text-[#9a9d93] focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15"
          />
          <button type="submit" class="rounded-xl bg-[#245b43] px-6 py-3 font-semibold text-white transition hover:bg-[#194632] focus:outline-none focus:ring-4 focus:ring-[#477858]/30">
            + Add task
          </button>
        </div>

        <p id="task-error" class="mt-2 hidden text-sm font-medium text-red-600" role="alert"></p>

        <div class="mt-5">
          <label for="task-priority" class="block text-sm font-semibold text-[#24382d]">Priority</label>
          <select id="task-priority" name="priority" class="mt-2 rounded-xl border border-[#dcded4] bg-white px-4 py-3 text-[#24382d] outline-none focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15">
            <option value="Low">Low priority</option>
            <option value="Medium" selected>Medium priority</option>
            <option value="High">High priority</option>
          </select>
        </div>
      </form>

      <div class="mt-6 flex items-center justify-between gap-4">
        <h3 class="text-lg font-bold text-[#24382d]">Your tasks</h3>
        <p id="task-count" class="text-sm text-[#73796f]" aria-live="polite">0 tasks</p>
      </div>

      <ul id="task-list" class="mt-4 space-y-3" aria-label="Your task list"></ul>
    </section>
  </main>

  <footer class="border-t border-[#e8e5db] px-6 py-8 text-center">
    <p class="text-sm text-[#73796f]">Made for your goals, your growth, and your next small win.</p>
    <p class="mt-2 text-sm font-semibold text-[#245b43]">TaskFlow © 2026</p>
  </footer>
`

const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const priorityInput = document.querySelector('#task-priority')
const taskError = document.querySelector('#task-error')
const taskList = document.querySelector('#task-list')
const taskCount = document.querySelector('#task-count')

// Display an inline validation message.
function showError(message) {
  taskError.textContent = message
  taskError.classList.remove('hidden')
  taskInput.setAttribute('aria-invalid', 'true')
}

// Clear the validation message.
function clearError() {
  taskError.textContent = ''
  taskError.classList.add('hidden')
  taskInput.removeAttribute('aria-invalid')
}

// Show the current tasks and their available actions.
function render() {
  taskList.replaceChildren()

  if (tasks.length === 0) {
    const emptyItem = document.createElement('li')
    emptyItem.className =
      'rounded-2xl border border-dashed border-[#dcded4] bg-white p-8 text-center'

    const emptyTitle = document.createElement('p')
    emptyTitle.className = 'font-semibold text-[#24382d]'
    emptyTitle.textContent = 'Your journey starts with one task.'

    const emptyDescription = document.createElement('p')
    emptyDescription.className = 'mt-2 text-sm text-[#73796f]'
    emptyDescription.textContent = 'Add your first task using the form above.'

    emptyItem.append(emptyTitle, emptyDescription)
    taskList.append(emptyItem)
  }

  tasks.forEach((task) => {
    const item = document.createElement('li')
    item.className =
      'flex flex-col gap-3 rounded-2xl border border-[#e8e5db] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between'

    const taskDetails = document.createElement('div')
    taskDetails.className = 'min-w-0 flex-1'

    if (editingId === task.id) {
      renderEditForm(task, item, taskDetails)
      return
    }

    const taskName = document.createElement('p')
    taskName.className = task.completed
      ? 'break-words font-medium text-[#92958b] line-through'
      : 'break-words font-medium text-[#24382d]'
    taskName.textContent = task.text

    const priorityClasses = {
      High: 'bg-red-50 text-red-700',
      Medium: 'bg-amber-50 text-amber-700',
      Low: 'bg-[#edf4eb] text-[#477858]',
    }

    const priorityBadge = document.createElement('span')
    priorityBadge.className =
      `mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${priorityClasses[task.priority]}`
    priorityBadge.textContent = `${task.priority} priority`

    taskDetails.append(taskName, priorityBadge)

    const actions = document.createElement('div')
    actions.className = 'flex shrink-0 flex-wrap items-center gap-2'

    const checkboxLabel = document.createElement('label')
    checkboxLabel.className =
      'flex items-center gap-2 text-sm text-[#477858]'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed
    checkbox.setAttribute('aria-label', `Mark ${task.text} as completed`)
    checkbox.className = 'h-5 w-5 accent-[#245b43]'

    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked
      render()
    })

    const checkboxText = document.createElement('span')
    checkboxText.textContent = task.completed ? 'Completed' : 'Complete'
    checkboxLabel.append(checkbox, checkboxText)

    const editButton = document.createElement('button')
    editButton.type = 'button'
    editButton.textContent = 'Edit'
    editButton.setAttribute('aria-label', `Edit ${task.text}`)
    editButton.className =
      'rounded-lg px-3 py-2 text-sm font-semibold text-[#245b43] transition hover:bg-[#edf4eb] focus:outline-none focus:ring-2 focus:ring-[#477858]'

    editButton.addEventListener('click', () => {
      editingId = task.id
      render()
    })

    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.textContent = 'Delete'
    deleteButton.setAttribute('aria-label', `Delete ${task.text}`)
    deleteButton.className =
      'rounded-lg px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300'

    deleteButton.addEventListener('click', () => {
      const shouldDelete = window.confirm(
        `Are you sure you want to delete "${task.text}"?`
      )

      if (shouldDelete) {
        tasks = tasks.filter((item) => item.id !== task.id)

        if (editingId === task.id) {
          editingId = null
        }

        render()
      }
    })

    actions.append(checkboxLabel, editButton, deleteButton)
    item.append(taskDetails, actions)
    taskList.append(item)
  })

  taskCount.textContent =
    `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`
}

// Display an inline editing form for one task.
function renderEditForm(task, item, taskDetails) {
  const editForm = document.createElement('form')
  editForm.className = 'flex min-w-0 flex-1 flex-col gap-3 sm:flex-row'
  editForm.setAttribute('aria-label', 'Edit task')

  const editInput = document.createElement('input')
  editInput.type = 'text'
  editInput.value = task.text
  editInput.maxLength = 200
  editInput.setAttribute('aria-label', 'Edit task text')
  editInput.className =
    'min-w-0 flex-1 rounded-xl border border-[#dcded4] px-3 py-2 text-[#24382d] outline-none focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15'

  const editError = document.createElement('p')
  editError.className = 'hidden text-sm text-red-600'
  editError.setAttribute('role', 'alert')

  const saveButton = document.createElement('button')
  saveButton.type = 'submit'
  saveButton.textContent = 'Save'
  saveButton.className =
    'rounded-lg bg-[#245b43] px-4 py-2 text-sm font-semibold text-white hover:bg-[#194632]'

  const cancelButton = document.createElement('button')
  cancelButton.type = 'button'
  cancelButton.textContent = 'Cancel'
  cancelButton.className =
    'rounded-lg border border-[#dcded4] px-4 py-2 text-sm font-semibold text-[#24382d] hover:bg-[#f8f7f2]'

  editForm.addEventListener('submit', (event) => {
    event.preventDefault()
    saveEdit(task.id, editInput.value, editError)
  })

  editInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      editingId = null
      render()
    }
  })

  cancelButton.addEventListener('click', () => {
    editingId = null
    render()
  })

  const editActions = document.createElement('div')
  editActions.className = 'flex flex-wrap gap-2'
  editActions.append(saveButton, cancelButton)

  const editContent = document.createElement('div')
  editContent.className = 'flex min-w-0 flex-1 flex-col gap-2'
  editContent.append(editInput, editError)

  editForm.append(editContent, editActions)
  taskDetails.append(editForm)
  item.append(taskDetails)
  taskList.append(item)

  editInput.focus()
  editInput.select()
}

// Validate and save an edited task.
function saveEdit(taskId, value, errorElement) {
  const text = value.trim()

  if (text.length === 0) {
    errorElement.textContent = 'Task text cannot be empty.'
    errorElement.classList.remove('hidden')
    return
  }

  if (text.length > 100) {
    errorElement.textContent = 'Your task must be 100 characters or fewer.'
    errorElement.classList.remove('hidden')
    return
  }

  const task = tasks.find((item) => item.id === taskId)

  if (!task) {
    return
  }

  task.text = text
  editingId = null
  render()
}

// Validate the form and add a new task.
function addTask(event) {
  event.preventDefault()

  const text = taskInput.value.trim()

  if (text.length === 0) {
    showError('Please enter a task before adding it.')
    taskInput.focus()
    return
  }

  if (text.length > 100) {
    showError('Your task must be 100 characters or fewer.')
    taskInput.focus()
    return
  }

  clearError()

  tasks.push({
    id: nextId,
    text: text,
    priority: priorityInput.value,
    completed: false,
  })

  nextId += 1
  taskInput.value = ''
  priorityInput.value = 'Medium'

  render()
  taskInput.focus()
}

// Clear the validation message when the user types.
function clearErrorOnInput() {
  clearError()
}

taskInput.addEventListener('input', clearErrorOnInput)
taskForm.addEventListener('submit', addTask)

render()
