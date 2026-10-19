
import './style.css'

const app = document.querySelector('#app')

// Store all tasks in one array.
let tasks = []
let nextId = 1

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

// Display an error message beside the input.
function showError(message) {
  taskError.textContent = message
  taskError.classList.remove('hidden')
  taskInput.setAttribute('aria-invalid', 'true')
}

// Clear the input error message.
function clearError() {
  taskError.textContent = ''
  taskError.classList.add('hidden')
  taskInput.removeAttribute('aria-invalid')
}

// Render tasks from the array using safe DOM methods.
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
    taskDetails.className = 'min-w-0'

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
    actions.className = 'flex shrink-0 items-center gap-3'

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
        render()
      }
    })

    actions.append(checkboxLabel, deleteButton)
    item.append(taskDetails, actions)
    taskList.append(item)
  })

  taskCount.textContent =
    `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`
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

  const newTask = {
    id: nextId,
    text: text,
    priority: priorityInput.value,
    completed: false,
  }

  tasks.push(newTask)
  nextId += 1

  taskInput.value = ''
  priorityInput.value = 'Medium'

  render()
  taskInput.focus()
}

// Clear validation errors as the input changes.
function clearErrorOnInput() {
  clearError()
}

// Handle form submission using the Add Task button or Enter.
function handleFormSubmit(event) {
  addTask(event)
}

taskInput.addEventListener('input', clearErrorOnInput)
taskForm.addEventListener('submit', handleFormSubmit)

render()
