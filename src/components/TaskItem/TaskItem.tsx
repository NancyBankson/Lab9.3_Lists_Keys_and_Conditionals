import type { TaskItemProps } from "../../types";
import type { TaskStatus } from "../../types";

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const targetId = event.target.id;
        const newStatus = event.target.value as TaskStatus;
        onStatusChange(targetId, newStatus)
    }

    const handleDelete = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const target = event.target as HTMLElement;
        console.log(target);
        onDelete(target.id);
    }
    return (
        <div key={task.id}>
            <div className="title-row">
                <h1>{task.title}</h1>
                <select defaultValue={task.status} onChange={handleStatusChange}>
                    <option value="pending">pending</option>
                    <option value="in-progress">in-progress</option>
                    <option value="completed">completed</option>
                </select>
                <p id={task.id} onClick={handleDelete}>Delete</p>
            </div>
            <h2>{task.description}</h2>
            <h3><span>Priority: {task.priority}</span>  Due: {task.dueDate}</h3>
        </div>
    )

}