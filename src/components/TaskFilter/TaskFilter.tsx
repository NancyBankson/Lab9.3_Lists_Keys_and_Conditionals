import type { TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";
import type { TaskPriority } from "../../types";

export function TaskFilter({ onStatusFilter, onPriorityFilter }: TaskFilterProps) {

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value as TaskStatus;
        onStatusFilter(newStatus);     

    }
    const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newPriority = event.target.value as TaskPriority;
         onPriorityFilter(newPriority);
    }

    return (
        <>
            <div>
                <label>Status</label>
                <select id="status-filter" onChange={handleStatusChange}>
                    <option value="">"All Statuses"</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Priority</label>
                <select id="priority-filter" onChange={handlePriorityChange}>
                    <option value="">"All Priorites"</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </>
    )
}