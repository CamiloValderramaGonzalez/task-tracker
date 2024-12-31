namespace TaskTrackerApi.Application.Interfaces;

using TaskTrackerApi.Domain.Entities;

public interface ITaskService
{
    IEnumerable<TaskItem> GetAllTasks();
    TaskItem AddTask(TaskItem task);
}
