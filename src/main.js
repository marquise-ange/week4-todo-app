
import './style.css'

// Find the main application container.
const app = document.querySelector('#app')

// Define the key used to save TaskFlow data.
const STORAGE_KEY = 'taskflow-state'

// Load saved tasks and settings safely.
function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (!saved || !Array.isArray(saved.tasks)) {
      return { tasks: [], nextId: 1, currentFilter: 'all' }
    }

    const tasks = saved.tasks
      .filter((task) => {
        return (
          task &&
          Number.isInteger(task.id) &&
          typeof task.text === 'string' &&
          task.text.trim().length > 0 &&
          task.text.length <= 100 &&
          typeof task.completed === 'boolean' &&
          ['High', 'Medium', 'Low'].includes(task.priority)
        )
      })
      .map((task) => ({
        id: task.id,
        text: task.text,
        description:
          typeof task.description === 'string'
            ? task.description.slice(0, 300)
            : '',
        priority: task.priority,
        completed: task.completed,
      }))

    const currentFilter = ['all', 'active', 'completed'].includes(
      saved.currentFilter
    )
      ? saved.currentFilter
      : 'all'

    return {
      tasks,
      nextId: Number.isInteger(saved.nextId) ? saved.nextId : 1,
      currentFilter,
    }
  } catch {
    return { tasks: [], nextId: 1, currentFilter: 'all' }
  }
}

// Restore the application state.
const savedState = loadSavedState()
let tasks = savedState.tasks
let nextId = Math.max(
  savedState.nextId,
  tasks.reduce((max, task) => Math.max(max, task.id + 1), 1)
)
let currentFilter = savedState.currentFilter
let editingId = null
let searchText = ''

// Save the current state to the browser.
function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ tasks, nextId, currentFilter })
    )
  } catch {
    console.error('TaskFlow could not save data in localStorage.')
  }
}

// Build the TaskFlow page.
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
        <label for="task-input" class="block text-sm font-semibold text-[#24382d]">Task title</label>

        <div class="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="task-input"
            name="task"
            type="text"
            maxlength="100"
            placeholder="e.g. Study JavaScript"
            aria-describedby="task-error"
            class="min-w-0 flex-1 rounded-xl border border-[#dcded4] bg-[#fcfcf9] px-4 py-3 text-[#24382d] outline-none transition placeholder:text-[#9a9d93] focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15"
          />

          <button type="submit" class="rounded-xl bg-[#245b43] px-6 py-3 font-semibold text-white transition hover:bg-[#194632] focus:outline-none focus:ring-4 focus:ring-[#477858]/30">
            + Add task
          </button>
        </div>

        <p id="task-error" class="mt-2 hidden text-sm font-medium text-red-600" role="alert"></p>

        <div class="mt-5">
          <label for="task-description" class="block text-sm font-semibold text-[#24382d]">Description (optional)</label>
          <textarea
            id="task-description"
            name="description"
            rows="3"
            maxlength="300"
            placeholder="Add a few details about this task..."
            class="mt-2 w-full rounded-xl border border-[#dcded4] bg-[#fcfcf9] px-4 py-3 text-[#24382d] outline-none focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15"
          ></textarea>
        </div>

        <div class="mt-5">
          <label for="task-priority" class="block text-sm font-semibold text-[#24382d]">Priority</label>
          <select id="task-priority" name="priority" class="priority-select mt-2">
            <option value="Low">Low priority</option>
            <option value="Medium" selected>Medium priority</option>
            <option value="High">High priority</option>
          </select>
        </div>
      </form>

      <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
  <h3 class="text-lg font-bold text-[#24382d]">Your tasks</h3>
  <p id="task-count" class="text-sm text-[#73796f]" aria-live="polite">
    0 tasks left
  </p>
</div>

<!-- Show the user's overall task completion progress. -->
<div class="mt-4 rounded-2xl border border-[#e8e5db] bg-white p-4">
  <div class="mb-2 flex items-center justify-between gap-3">
    <span class="text-sm font-semibold text-[#24382d]">
      Your progress
    </span>
    <span id="progress-label" class="text-sm font-semibold text-[#477858]">
      0% completed
    </span>
  </div>

  <div
    id="progress-track"
    class="h-3 overflow-hidden rounded-full bg-[#e5e7dc]"
    role="progressbar"
    aria-label="Task completion progress"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="0"
  >
    <div
      id="progress-fill"
      class="h-full rounded-full bg-[#477858] transition-all duration-300"
      style="width: 0%"
    ></div>
  </div>
</div>
      <label for="task-search" class="mt-5 block text-sm font-semibold text-[#24382d]">Search tasks</label>
      <input
        id="task-search"
        type="search"
        placeholder="Search by title or description..."
        class="mt-2 w-full rounded-xl border border-[#dcded4] bg-white px-4 py-3 text-[#24382d] outline-none placeholder:text-[#9a9d93] focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15"
      />

      <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap gap-2" aria-label="Filter tasks">
          <button type="button" data-filter="all" aria-pressed="true" class="rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#477858]">All</button>
          <button type="button" data-filter="active" aria-pressed="false" class="rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#477858]">Active</button>
          <button type="button" data-filter="completed" aria-pressed="false" class="rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#477858]">Completed</button>
        </div>

        <button id="clear-completed" type="button" class="rounded-lg px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300">
          Clear completed
        </button>
      </div>

      <ul id="task-list" class="mt-4 space-y-3" aria-label="Your task list"></ul>
    </section>
  </main>

  <footer class="border-t border-[#e8e5db] px-6 py-8 text-center">
    <p class="text-sm text-[#73796f]">Made for your goals, your growth, and your next small win.</p>
    <p class="mt-2 text-sm font-semibold text-[#245b43]">TaskFlow © 2026</p>
  </footer>
`

// Select the elements used by the application.
const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const descriptionInput = document.querySelector('#task-description')
const priorityInput = document.querySelector('#task-priority')
const taskError = document.querySelector('#task-error')
const taskList = document.querySelector('#task-list')
const taskCount = document.querySelector('#task-count')
const progressLabel = document.querySelector('#progress-label')
const progressTrack = document.querySelector('#progress-track')
const progressFill = document.querySelector('#progress-fill')
const searchInput = document.querySelector('#task-search')
const filterButtons = document.querySelectorAll('[data-filter]')
const clearCompletedButton = document.querySelector('#clear-completed')

// Create the bottom-right notification container.
const toastContainer = document.createElement('div')
toastContainer.id = 'toast-container'
toastContainer.setAttribute('aria-live', 'polite')
toastContainer.setAttribute('aria-atomic', 'false')
toastContainer.setAttribute('aria-label', 'Notifications')
document.body.append(toastContainer)

// Show a notification in the bottom-right corner.
function showToast(message, type = 'success', title = 'TaskFlow') {
  const toast = document.createElement('div')
  toast.className = `task-toast task-toast--${type}`
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status')

  const icon = document.createElement('span')
  icon.className = 'task-toast__icon'
  icon.setAttribute('aria-hidden', 'true')

  if (type === 'error') {
    icon.textContent = '!'
  } else if (type === 'info') {
    icon.textContent = '↻'
  } else {
    icon.textContent = '✓'
  }

  const content = document.createElement('div')
  content.className = 'task-toast__content'

  const heading = document.createElement('p')
  heading.className = 'task-toast__title'
  heading.textContent = title

  const description = document.createElement('p')
  description.className = 'task-toast__message'
  description.textContent = message

  const closeButton = document.createElement('button')
  closeButton.type = 'button'
  closeButton.className = 'task-toast__close'
  closeButton.textContent = '×'
  closeButton.setAttribute('aria-label', 'Dismiss notification')

  let removeTimer
  let animationTimer

  function dismissToast() {
    clearTimeout(removeTimer)
    clearTimeout(animationTimer)

    toast.classList.remove('task-toast--visible')

    removeTimer = setTimeout(() => {
      toast.remove()
    }, 250)
  }

  closeButton.addEventListener('click', dismissToast)

  content.append(heading, description)
  toast.append(icon, content, closeButton)
  toastContainer.append(toast)

  requestAnimationFrame(() => {
    toast.classList.add('task-toast--visible')
  })

  animationTimer = setTimeout(dismissToast, 3500)
}

// Apply the same compact priority style to the add-task selector.
priorityInput.classList.add('priority-select')

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

// Create a clean priority badge without colored dots.
function createPriorityBadge(priority) {
  const styles = {
    High: 'border-red-200 bg-red-50 text-red-800',
    Medium: 'border-amber-200 bg-amber-50 text-amber-800',
    Low: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  }

  const badge = document.createElement('span')
  badge.className =
    `mt-3 inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${styles[priority] || styles.Medium}`
  badge.textContent = `${priority} priority`

  return badge
}

// Display a task's title, description, and priority.
function renderTaskDetails(task, container) {
  const title = document.createElement('p')
  title.className = task.completed
    ? 'break-words font-medium text-[#92958b] line-through'
    : 'break-words font-medium text-[#24382d]'
  title.textContent = task.text
  container.append(title)

  if (task.description) {
    const description = document.createElement('p')
    description.className =
      'mt-2 break-words text-sm leading-6 text-[#73796f]'
    description.textContent = task.description
    container.append(description)
  }

  container.append(createPriorityBadge(task.priority))
}

// Create the inline editor for a task.
function renderEditForm(task, item, details) {
  const form = document.createElement('form')
  form.className = 'flex min-w-0 flex-1 flex-col gap-4'
  form.dataset.editForm = 'true'
  form.dataset.taskId = String(task.id)

  const titleLabel = document.createElement('label')
  titleLabel.className = 'block text-sm font-semibold text-[#24382d]'
  titleLabel.textContent = 'Task title'

  const titleInputEdit = document.createElement('input')
  titleInputEdit.name = 'text'
  titleInputEdit.value = task.text
  titleInputEdit.maxLength = 100
  titleInputEdit.required = true
  titleInputEdit.setAttribute('aria-label', 'Edit task title')
  titleInputEdit.className =
    'mt-2 w-full rounded-xl border border-[#dcded4] px-3 py-2 text-[#24382d] outline-none focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15'
  titleLabel.append(titleInputEdit)

  const descriptionLabel = document.createElement('label')
  descriptionLabel.className =
    'block text-sm font-semibold text-[#24382d]'
  descriptionLabel.textContent = 'Description (optional)'

  const descriptionInputEdit = document.createElement('textarea')
  descriptionInputEdit.name = 'description'
  descriptionInputEdit.value = task.description
  descriptionInputEdit.maxLength = 300
  descriptionInputEdit.rows = 3
  descriptionInputEdit.setAttribute('aria-label', 'Edit task description')
  descriptionInputEdit.className =
    'mt-2 w-full rounded-xl border border-[#dcded4] px-3 py-2 text-[#24382d] outline-none focus:border-[#477858] focus:ring-4 focus:ring-[#477858]/15'
  descriptionLabel.append(descriptionInputEdit)

  const priorityLabel = document.createElement('label')
  priorityLabel.className =
    'block text-sm font-semibold text-[#24382d]'
  priorityLabel.textContent = 'Priority'

  const prioritySelect = document.createElement('select')
  prioritySelect.name = 'priority'
  prioritySelect.setAttribute('aria-label', 'Edit task priority')
  prioritySelect.className = 'priority-select mt-2'

  const priorityLabels = {
    Low: 'Low priority',
    Medium: 'Medium priority',
    High: 'High priority',
  }

    ;['Low', 'Medium', 'High'].forEach((priority) => {
      const option = document.createElement('option')
      option.value = priority
      option.textContent = priorityLabels[priority]
      option.selected = task.priority === priority
      prioritySelect.append(option)
    })

  priorityLabel.append(prioritySelect)

  const error = document.createElement('p')
  error.className = 'hidden text-sm text-red-600'
  error.setAttribute('role', 'alert')
  error.dataset.editError = 'true'

  const actions = document.createElement('div')
  actions.className = 'flex flex-wrap gap-2'

  const saveButton = document.createElement('button')
  saveButton.type = 'submit'
  saveButton.textContent = 'Save changes'
  saveButton.className =
    'rounded-lg bg-[#245b43] px-4 py-2 text-sm font-semibold text-white hover:bg-[#194632] focus:outline-none focus:ring-2 focus:ring-[#477858]'

  const cancelButton = document.createElement('button')
  cancelButton.type = 'button'
  cancelButton.dataset.action = 'cancel'
  cancelButton.dataset.taskId = String(task.id)
  cancelButton.textContent = 'Cancel'
  cancelButton.className =
    'rounded-lg border border-[#dcded4] px-4 py-2 text-sm font-semibold text-[#24382d] hover:bg-[#f8f7f2] focus:outline-none focus:ring-2 focus:ring-[#477858]'

  actions.append(saveButton, cancelButton)
  form.append(titleLabel, descriptionLabel, priorityLabel, error, actions)
  details.append(form)
  item.append(details)

  titleInputEdit.focus()
  titleInputEdit.select()
}

// Render all visible tasks from the state array.
function render() {
  taskList.replaceChildren()

  const visibleTasks = tasks.filter((task) => {
    const matchesFilter =
      currentFilter === 'all' ||
      (currentFilter === 'active' && !task.completed) ||
      (currentFilter === 'completed' && task.completed)

    const query = searchText.toLowerCase()
    const matchesSearch =
      task.text.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)

    return matchesFilter && matchesSearch
  })

  if (visibleTasks.length === 0) {
    const emptyItem = document.createElement('li')
    emptyItem.className =
      'rounded-2xl border border-dashed border-[#dcded4] bg-white p-8 text-center'

    const emptyTitle = document.createElement('p')
    emptyTitle.className = 'font-semibold text-[#24382d]'
    emptyTitle.textContent =
      tasks.length === 0
        ? 'Your journey starts with one task.'
        : 'No tasks match your search or filter.'

    const emptyDescription = document.createElement('p')
    emptyDescription.className = 'mt-2 text-sm text-[#73796f]'
    emptyDescription.textContent =
      tasks.length === 0
        ? 'Add your first task using the form above.'
        : 'Try another search or choose a different filter.'

    emptyItem.append(emptyTitle, emptyDescription)
    taskList.append(emptyItem)
  }

  visibleTasks.forEach((task) => {
    const item = document.createElement('li')
    item.dataset.taskId = String(task.id)
    item.className =
      'flex flex-col gap-3 rounded-2xl border border-[#e8e5db] bg-white p-4 shadow-sm transition hover:border-[#d9e5d9] hover:shadow-md sm:flex-row sm:items-center sm:justify-between'

    const details = document.createElement('div')
    details.className = 'min-w-0 flex-1'

    if (editingId === task.id) {
      renderEditForm(task, item, details)
      taskList.append(item)
      return
    }

    renderTaskDetails(task, details)

    const actions = document.createElement('div')
    actions.className = 'flex shrink-0 flex-wrap items-center gap-2'

    const checkboxLabel = document.createElement('label')
    checkboxLabel.className =
      'flex items-center gap-2 text-sm text-[#477858]'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.completed
    checkbox.dataset.action = 'toggle'
    checkbox.dataset.taskId = String(task.id)
    checkbox.setAttribute(
      'aria-label',
      `Mark ${task.text} as ${task.completed ? 'active' : 'completed'}`
    )
    checkbox.className = 'h-5 w-5 accent-[#245b43]'

    const checkboxText = document.createElement('span')
    checkboxText.textContent = task.completed ? 'Completed' : 'Complete'
    checkboxLabel.append(checkbox, checkboxText)

    const editButton = document.createElement('button')
    editButton.type = 'button'
    editButton.dataset.action = 'edit'
    editButton.dataset.taskId = String(task.id)
    editButton.textContent = 'Edit'
    editButton.setAttribute('aria-label', `Edit ${task.text}`)
    editButton.className =
      'rounded-lg px-3 py-2 text-sm font-semibold text-[#245b43] transition hover:bg-[#edf4eb] focus:outline-none focus:ring-2 focus:ring-[#477858]'

    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.dataset.action = 'delete'
    deleteButton.dataset.taskId = String(task.id)
    deleteButton.textContent = 'Delete'
    deleteButton.setAttribute('aria-label', `Delete ${task.text}`)
    deleteButton.className =
      'rounded-lg px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300'

    actions.append(checkboxLabel, editButton, deleteButton)
    item.append(details, actions)
    taskList.append(item)
  })

  // Count all unfinished tasks, regardless of the active filter or search.
  const remainingTasks = tasks.filter((task) => !task.completed).length

  taskCount.textContent =
    `${remainingTasks} ${remainingTasks === 1 ? 'task' : 'tasks'} left`

  // Calculate overall completion progress.
  const completedTasks = tasks.filter((task) => task.completed).length

  const progress = tasks.length === 0
    ? 0
    : Math.round((completedTasks / tasks.length) * 100)

  progressLabel.textContent = `${progress}% completed`
  progressFill.style.width = `${progress}%`
  progressTrack.setAttribute('aria-valuenow', String(progress))

  filterButtons.forEach((button) => {
    const active = button.dataset.filter === currentFilter
    button.setAttribute('aria-pressed', String(active))
    button.className = active
      ? 'rounded-full border border-[#245b43] bg-[#245b43] px-4 py-2 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-[#477858]'
      : 'rounded-full border border-[#dcded4] bg-white px-4 py-2 text-sm font-semibold text-[#24382d] transition hover:bg-[#edf4eb] focus:outline-none focus:ring-2 focus:ring-[#477858]'
  })

  clearCompletedButton.disabled = !tasks.some((task) => task.completed)
  clearCompletedButton.classList.toggle(
    'cursor-not-allowed',
    clearCompletedButton.disabled
  )
  clearCompletedButton.classList.toggle(
    'opacity-40',
    clearCompletedButton.disabled
  )

  saveState()
}

// Validate the title and description.
function validateTask(text, description) {
  if (!text) return 'Please enter a task before saving it.'
  if (text.length > 100) return 'Task title must be 100 characters or fewer.'
  if (description.length > 300) {
    return 'Description must be 300 characters or fewer.'
  }

  return ''
}

// Add a new task from the form.
function addTask(event) {
  event.preventDefault()

  const text = taskInput.value.trim()
  const description = descriptionInput.value.trim()
  const error = validateTask(text, description)

  if (error) {
    showError(error)
    taskInput.focus()
    return
  }

  if (!['Low', 'Medium', 'High'].includes(priorityInput.value)) {
    showError('Please select a valid priority.')
    priorityInput.focus()
    return
  }

  clearError()

  tasks.push({
    id: nextId,
    text,
    description,
    priority: priorityInput.value,
    completed: false,
  })

  nextId += 1
  taskInput.value = ''
  descriptionInput.value = ''
  priorityInput.value = 'Medium'
  currentFilter = 'all'
  searchText = ''
  searchInput.value = ''

  render()
  showToast('Your new task has been added.', 'success', 'Task added')
  taskInput.focus()
}

// Save edited task details after validation.
function saveEdit(form) {
  const taskId = Number(form.dataset.taskId)
  const text = form.elements.text.value.trim()
  const description = form.elements.description.value.trim()
  const priority = form.elements.priority.value
  const errorElement = form.querySelector('[data-edit-error]')
  const error = validateTask(text, description)

  if (error) {
    errorElement.textContent = error
    errorElement.classList.remove('hidden')
    form.elements.text.focus()
    return
  }

  if (!['Low', 'Medium', 'High'].includes(priority)) {
    errorElement.textContent = 'Please select a valid priority.'
    errorElement.classList.remove('hidden')
    form.elements.priority.focus()
    return
  }

  const task = tasks.find((item) => item.id === taskId)
  if (!task) return

  task.text = text
  task.description = description
  task.priority = priority
  editingId = null

  render()
  showToast('Your changes have been saved.', 'success', 'Task updated')
}

// Clear the main form's validation message.
function clearErrorOnInput() {
  clearError()
}

// Handle task-list button clicks using event delegation.
function handleTaskClick(event) {
  const button = event.target.closest('button[data-action]')
  if (!button || !taskList.contains(button)) return

  const taskId = Number(button.dataset.taskId)
  const action = button.dataset.action
  const task = tasks.find((item) => item.id === taskId)

  if (action === 'cancel') {
    editingId = null
    render()
    return
  }

  if (!task) return

  if (action === 'edit') {
    editingId = task.id
    render()
  }

  if (action === 'delete') {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.text}"?`
    )

    if (!confirmed) return

    tasks = tasks.filter((item) => item.id !== task.id)
    if (editingId === task.id) editingId = null

    render()
    showToast('The task was deleted.', 'success', 'Task deleted')
  }
}

// Handle task completion using event delegation.
function handleTaskChange(event) {
  const checkbox = event.target

  if (
    checkbox.matches('input[data-action="toggle"]') &&
    taskList.contains(checkbox)
  ) {
    const taskId = Number(checkbox.dataset.taskId)
    const task = tasks.find((item) => item.id === taskId)

    if (!task) return

    task.completed = checkbox.checked
    render()

    showToast(
      task.completed
        ? 'Well done! You completed a task.'
        : 'Your task is active again.',
      task.completed ? 'success' : 'info',
      task.completed ? 'Task completed' : 'Task reactivated'
    )
  }
}

// Handle editing forms through the task list.
function handleTaskSubmit(event) {
  const form = event.target

  if (!form.matches('form[data-edit-form]')) return

  event.preventDefault()
  saveEdit(form)
}

// Let Escape cancel editing.
function handleTaskKeydown(event) {
  const form = event.target.closest('form[data-edit-form]')
  if (!form) return

  if (event.key === 'Escape') {
    event.preventDefault()
    editingId = null
    render()
  }
}

// Handle global keyboard shortcuts for faster navigation.
function handleGlobalKeydown(event) {
  // Ignore shortcuts when the user is typing in a form field.
  const target = event.target
  const isTyping =
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))

  // Do not trigger shortcuts while using modifier keys.
  if (isTyping || event.ctrlKey || event.altKey || event.metaKey) {
    return
  }

  // Press "/" to focus the task search field.
  if (event.key === '/') {
    event.preventDefault()
    searchInput.focus()
  }

  // Press "N" or "n" to focus the new-task title field.
  if (event.key.toLowerCase() === 'n') {
    event.preventDefault()
    taskInput.focus()
  }
}

// Clear the validation message while typing.
taskInput.addEventListener('input', clearErrorOnInput)

// Add tasks using the form button or Enter.
taskForm.addEventListener('submit', addTask)

// Search task titles and descriptions.
searchInput.addEventListener('input', () => {
  searchText = searchInput.value.trim()
  render()
})

// Switch between All, Active, and Completed tasks.
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter
    editingId = null
    render()
  })
})

// Delete all completed tasks after confirmation.
clearCompletedButton.addEventListener('click', () => {
  const completedTasks = tasks.filter((task) => task.completed)

  if (completedTasks.length === 0) return

  const confirmed = window.confirm(
    `Clear ${completedTasks.length} completed ${completedTasks.length === 1 ? 'task' : 'tasks'}?`
  )

  if (!confirmed) return

  const clearedCount = completedTasks.length
  tasks = tasks.filter((task) => !task.completed)
  editingId = null

  render()

  showToast(
    `${clearedCount} completed ${clearedCount === 1 ? 'task' : 'tasks'} cleared.`,
    'success',
    'Completed tasks cleared'
  )
})

// Use event delegation for task actions.
taskList.addEventListener('click', handleTaskClick)
taskList.addEventListener('change', handleTaskChange)
taskList.addEventListener('submit', handleTaskSubmit)
taskList.addEventListener('keydown', handleTaskKeydown)

// Listen for global keyboard shortcuts.
document.addEventListener('keydown', handleGlobalKeydown)
// Display the app using the restored state.
render()
