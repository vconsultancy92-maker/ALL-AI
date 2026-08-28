/**
 * Local Storage Manager
 * Handles all local storage operations for tasks
 */

class StorageManager {
    constructor() {
        this.STORAGE_KEY = 'todos';
    }

    /**
     * Get all tasks from local storage
     * @returns {Array} Array of task objects
     */
    getTasks() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error reading from local storage:', error);
            return [];
        }
    }

    /**
     * Save tasks to local storage
     * @param {Array} tasks - Array of task objects to save
     */
    saveTasks(tasks) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error('Error writing to local storage:', error);
        }
    }

    /**
     * Add a new task
     * @param {string} text - Task description
     * @returns {Object} The newly created task object
     */
    addTask(text) {
        const tasks = this.getTasks();
        const newTask = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };
        tasks.push(newTask);
        this.saveTasks(tasks);
        return newTask;
    }

    /**
     * Delete a task by ID
     * @param {number} id - Task ID
     */
    deleteTask(id) {
        const tasks = this.getTasks();
        const filtered = tasks.filter(task => task.id !== id);
        this.saveTasks(filtered);
    }

    /**
     * Toggle task completion status
     * @param {number} id - Task ID
     */
    toggleTask(id) {
        const tasks = this.getTasks();
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks(tasks);
        }
    }

    /**
     * Update task text
     * @param {number} id - Task ID
     * @param {string} text - New task text
     */
    updateTask(id, text) {
        const tasks = this.getTasks();
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.text = text.trim();
            this.saveTasks(tasks);
        }
    }

    /**
     * Delete all completed tasks
     */
    clearCompleted() {
        const tasks = this.getTasks();
        const active = tasks.filter(task => !task.completed);
        this.saveTasks(active);
    }

    /**
     * Delete all tasks
     */
    clearAll() {
        localStorage.removeItem(this.STORAGE_KEY);
    }

    /**
     * Get tasks by completion status
     * @param {string} filter - 'all', 'active', or 'completed'
     * @returns {Array} Filtered array of tasks
     */
    getFilteredTasks(filter = 'all') {
        const tasks = this.getTasks();
        switch (filter) {
            case 'active':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'all':
            default:
                return tasks;
        }
    }

    /**
     * Get statistics about tasks
     * @returns {Object} Statistics object
     */
    getStats() {
        const tasks = this.getTasks();
        const completed = tasks.filter(t => t.completed).length;
        const active = tasks.length - completed;
        return {
            total: tasks.length,
            completed: completed,
            active: active,
            percentage: tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0
        };
    }
}

// Create global instance
const storage = new StorageManager();
