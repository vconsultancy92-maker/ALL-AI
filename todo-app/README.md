# To-Do List Application

📝 A simple yet powerful to-do list application with local storage functionality. Manage your tasks efficiently with a clean, intuitive interface.

## Features

✅ **Task Management**
- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Edit task descriptions
- Clear all tasks

💾 **Local Storage**
- Automatic saving to browser local storage
- Persistent data across browser sessions
- No backend required

🎨 **User Interface**
- Clean and modern design
- Responsive layout for all devices
- Visual feedback for interactions
- Task filtering (All, Active, Completed)

📊 **Task Statistics**
- Total tasks counter
- Completed tasks counter
- Active tasks counter
- Progress indicator

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Storage**: Browser LocalStorage API
- **No dependencies**: Pure vanilla JavaScript

## Project Structure

```
todo-app/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── app.js              # Core application logic
├── storage.js          # LocalStorage handler
├── ui.js               # UI update functions
└── README.md           # Documentation
```

## Quick Start

1. Open `index.html` in your web browser
2. Start adding tasks
3. Tasks are automatically saved to local storage
4. Tasks persist even after closing the browser

## Usage

### Add a Task
1. Type your task in the input field
2. Press Enter or click the Add button
3. Task appears in your list

### Complete a Task
- Click the checkbox next to a task to mark it complete
- Completed tasks appear with a strikethrough

### Delete a Task
- Click the trash icon to remove a task
- Task is removed from both UI and local storage

### Filter Tasks
- Click "All" to see all tasks
- Click "Active" to see incomplete tasks
- Click "Completed" to see finished tasks

### Clear Completed
- Click "Clear Completed" to remove all finished tasks

## Local Storage Details

Tasks are stored as JSON in `localStorage` under the key `todos`.

**Storage Format:**
```json
[
  {
    "id": 1,
    "text": "Task description",
    "completed": false,
    "createdAt": "2024-01-01T12:00:00Z"
  }
]
```

## Keyboard Shortcuts

- **Enter**: Add new task (when focused on input)
- **Escape**: Clear input field

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Future Enhancements

- [ ] Due dates for tasks
- [ ] Task categories/tags
- [ ] Priority levels
- [ ] Task search functionality
- [ ] Recurring tasks
- [ ] Cloud sync (Firebase/Backend)
- [ ] Dark mode
- [ ] Export to PDF/CSV
- [ ] Drag and drop reordering
- [ ] Task notes/descriptions

## Tips

- Use clear, descriptive task names
- Regularly review and clear completed tasks
- Your data is stored locally - clearing browser data will delete tasks
- No internet connection needed

## License

MIT License - Free to use and modify
