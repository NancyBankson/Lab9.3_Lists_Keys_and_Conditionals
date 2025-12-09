import { useState } from 'react'
import type { Task } from './types'
import type { TaskStatus } from './types'
import { TaskList } from './components/TaskList/TaskList'
import './App.css'
import type { TaskListProps } from './types'

function App() {
  const [tasks, settasks] = useState([
    {
      id: "1",
      title: "Buy groceries",
      description: "Get milk, bread, bananas",
      status: "pending",
      priority: "low",
      dueDate: "12/16/2025"
    },
    {
      id: "2",
      title: "Earn education",
      description: "Practice, practice, practice",
      status: "in-progress",
      priority: "high",
      dueDate: "05/08/2026"
    },
    {
      id: "3",
      title: "Win Nobel Prize",
      description: "Discover something great",
      status: "in-progress",
      priority: "medium",
      dueDate: "05/08/2036"
    }
  ])

  const newTasks: TaskListProps = {
    tasks: tasks as Task[],
    onStatusChange: (taskId: string, newStatus: TaskStatus) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        } else return task;
      });
      settasks(updatedTasks);
    },
    onDelete: (taskId: string) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      settasks(updatedTasks);
    }
  }
  return (
    <>
      <TaskList
        tasks={newTasks.tasks}
        onStatusChange={newTasks.onStatusChange}
        onDelete={newTasks.onDelete}
      />
    </>
  )
}

export default App
