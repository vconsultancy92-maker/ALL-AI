/**
 * To-Do List Application
 * Main application logic and event handling
 */

class TodoApp {
    constructor() {
        this.storage = storage;
        this.ui = ui;
        this.init();
    }

    /**
     * Initialize the application
     */
    init() {
        this.setupEventListeners();
        this.loadTasks();
        this.updateDisplay();
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Add task button
        this.ui.addBtn.addEventListener('click', () => this.addTask());

        // Input field - Enter key
        this.ui.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });

        // Input field - Escape key to clear
        this.ui.taskInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.ui.clearInput();
            }
        });

        // Clear completed button
        this.ui.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());

        // Filter buttons
        this.ui.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.currentTarget.dataset.filter;
                this.setFilter(filter);
            });
        });

        // Task list - delegated events
        this.ui.taskList.addEventListener('click', (e) => this.handleTaskClick(e));
    }

    /**
     * Add a new task
     */
    addTask() {
        const text = this.ui.taskInput.value.trim();

        if (!text) {
            this.ui.taskInput.focus();
            return;
        }

        if (text.length > 200) {
            alert('Task text is too long (max 200 characters)');
            return;
        }

        this.storage.addTask(text);
        this.ui.clearInput();
        this.loadTasks();
        this.updateDisplay();
        this.ui.showMessage('Task added successfully');
    }

    /**
     * Delete a task
     * @param {number} id - Task ID
     */
    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.storage.deleteTask(id);
            this.loadTasks();
            this.updateDisplay();
            this.ui.showMessage('Task deleted');
        }
    }

    /**
     * Toggle task completion
     * @param {number} id - Task ID
     */
    toggleTask(id) {
        this.storage.toggleTask(id);
        this.loadTasks();
        this.updateDisplay();
    }

    /**
     * Edit a task
     * @param {number} id - Task ID
     */
    editTask(id) {
        const tasks = this.storage.getTasks();
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        const newText = prompt('Edit task:', task.text);
        if (newText !== null && newText.trim()) {
            this.storage.updateTask(id, newText);
            this.loadTasks();
            this.updateDisplay();
            this.ui.showMessage('Task updated');
        }
    }

    /**
     * Clear all completed tasks
     */
    clearCompleted() {
        const stats = this.storage.getStats();
        if (stats.completed === 0) {
            alert('No completed tasks to clear');
            return;
        }

        if (confirm(`Delete ${stats.completed} completed task(s)?`)) {
            this.storage.clearCompleted();
            this.loadTasks();
            this.updateDisplay();
            this.ui.showMessage('Completed tasks cleared');
        }
    }

    /**
     * Set active filter
     * @param {string} filter - Filter type ('all', 'active', 'completed')
     */
    setFilter(filter) {
        this.ui.setActiveFilter(filter);
        this.loadTasks();
    }

    /**
     * Load tasks based on current filter
     */
    loadTasks() {
        const filter = this.ui.getActiveFilter();
        const tasks = this.storage.getFilteredTasks(filter);
        this.ui.renderTasks(tasks);
    }

    /**
     * Update the display (stats, progress, etc.)
     */
    updateDisplay() {
        const stats = this.storage.getStats();
        this.ui.updateStats(stats);
    }

    /**
     * Handle task list click events
     * @param {Event} e - Click event
     */
    handleTaskClick(e) {
        const checkbox = e.target.closest('.task-checkbox');
        const deleteBtn = e.target.closest('.btn-delete');
        const editBtn = e.target.closest('.btn-edit');

        if (checkbox) {
            const id = parseInt(checkbox.dataset.id);
            this.toggleTask(id);
        } else if (deleteBtn) {
            const id = parseInt(deleteBtn.dataset.id);
            this.deleteTask(id);
        } else if (editBtn) {
            const id = parseInt(editBtn.dataset.id);
            this.editTask(id);
        }
    }
}

// Initialize application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new TodoApp();
    });
} else {
    window.app = new TodoApp();
}
