/**
 * UI Manager
 * Handles all UI updates and rendering
 */

class UIManager {
    constructor() {
        this.taskList = document.getElementById('taskList');
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
        this.clearCompletedBtn = document.getElementById('clearCompleted');
        this.emptyState = document.getElementById('emptyState');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.currentFilter = 'all';
    }

    /**
     * Render all tasks in the task list
     * @param {Array} tasks - Array of task objects
     */
    renderTasks(tasks) {
        if (tasks.length === 0) {
            this.taskList.innerHTML = '';
            this.emptyState.classList.add('show');
            return;
        }

        this.emptyState.classList.remove('show');
        this.taskList.innerHTML = tasks.map(task => this.createTaskElement(task)).join('');
    }

    /**
     * Create HTML for a single task item
     * @param {Object} task - Task object
     * @returns {string} HTML string
     */
    createTaskElement(task) {
        const createdDate = new Date(task.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''}
                    data-id="${task.id}"
                >
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <div class="task-actions">
                    <button class="btn-edit" data-id="${task.id}" title="Edit task">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" data-id="${task.id}" title="Delete task">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <span class="task-date">${createdDate}</span>
            </li>
        `;
    }

    /**
     * Escape HTML special characters
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Update statistics display
     * @param {Object} stats - Statistics object from storage
     */
    updateStats(stats) {
        document.getElementById('totalTasks').textContent = stats.total;
        document.getElementById('activeTasks').textContent = stats.active;
        document.getElementById('completedTasks').textContent = stats.completed;
        document.getElementById('progressFill').style.width = stats.percentage + '%';
        document.getElementById('progressText').textContent = stats.percentage + '% Complete';
    }

    /**
     * Set active filter button
     * @param {string} filter - Filter type ('all', 'active', 'completed')
     */
    setActiveFilter(filter) {
        this.currentFilter = filter;
        this.filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
    }

    /**
     * Get current filter value
     * @returns {string} Current filter
     */
    getActiveFilter() {
        return this.currentFilter;
    }

    /**
     * Clear input field
     */
    clearInput() {
        this.taskInput.value = '';
        this.taskInput.focus();
    }

    /**
     * Show success message (temporary notification)
     * @param {string} message - Message to display
     */
    showMessage(message) {
        // Could be extended to show a toast notification
        console.log('✓ ' + message);
    }

    /**
     * Enable/disable the add button
     * @param {boolean} enabled - Whether button should be enabled
     */
    setAddButtonEnabled(enabled) {
        this.addBtn.disabled = !enabled;
    }
}

// Create global instance
const ui = new UIManager();
