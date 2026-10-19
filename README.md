# TaskFlow — Interactive To-Do List App

TaskFlow is a simple, responsive task management application built with HTML, CSS, and vanilla JavaScript. It helps users organize daily activities, manage priorities, track completed work, and monitor their progress.

## Features

- **Add tasks:** Create tasks with a title, description, and priority.
- **Edit tasks:** Update existing task information.
- **Delete tasks:** Remove tasks you no longer need.
- **Mark tasks as complete:** Track finished and unfinished tasks.
- **Search tasks:** Find tasks using the search field.
- **Filter tasks:** View tasks according to their completion status.
- **Priority levels:** Organize tasks using High, Medium, and Low priorities.
- **Tasks-left counter:** See how many unfinished tasks remain.
- **Progress bar:** Monitor overall task completion as a percentage.
- **Toast notifications:** Receive feedback when performing task actions.
- **Local storage:** Keep tasks saved in the browser between page refreshes.
- **Responsive design:** Use the application on different screen sizes.
- **Keyboard interaction:** Use supported keyboard shortcuts and controls.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite
- Tailwind CSS
- Browser Local Storage

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm before running the project.

### Installation

1. Clone or download this repository.
2. Open the project folder in your terminal.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

### Build for Production

To create a production build, run:

```bash
npm run build
```

Vite generates the production files in the `dist` directory.

## How to Use

1. Enter a task title.
2. Add an optional description and select a priority.
3. Submit the form to create the task.
4. Mark tasks as complete when finished.
5. Edit or delete tasks when necessary.
6. Use search and filters to find specific tasks.
7. Monitor the tasks-left counter and progress bar.
8. Refresh the page to verify that your tasks remain saved.

## Data Storage

TaskFlow uses the browser's Local Storage to preserve task information between page refreshes on the same browser. The data is stored locally and is not automatically synchronized across devices.

## Project Structure

```text
week4-todo-app/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── src/
│   ├── main.js
│   ├── style.css
└── public/
```

*Note: Update this structure if your actual project contains different files or folders.*

## Future Improvements

- Add optional due dates and reminders.
- Support exporting and importing tasks.
- Add user accounts and cloud synchronization.
- Improve automated testing and accessibility.

## Author

**Marquise Ange Irebe**

GitHub: [marquise-ange](https://github.com/marquise-ange/week4-todo-app)

