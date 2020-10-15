import { Repository } from "typeorm";
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from "./task-status.enum";
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TaskRepository extends Repository<Task> {
    GetTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
}
