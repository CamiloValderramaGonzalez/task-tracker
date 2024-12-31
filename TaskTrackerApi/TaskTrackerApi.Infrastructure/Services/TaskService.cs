using TaskTrackerApi.Application.Interfaces;
using TaskTrackerApi.Domain.Entities;

namespace TaskTrackerApi.Infrastructure.Services;

/// <summary>
/// Servicio que implementa la lógica para manejar tareas usando una lista en memoria.
/// </summary>
public class TaskService : ITaskService
{
    private readonly List<TaskItem> _tasks = new();

    /// <summary>
    /// Devuelve todas las tareas almacenadas.
    /// </summary>
    /// <returns>Una lista de todas las tareas.</returns>
    public IEnumerable<TaskItem> GetAllTasks()
    {
        return _tasks;
    }

    /// <summary>
    /// Agrega una nueva tarea a la lista en memoria.
    /// </summary>
    /// <param name="task">La tarea que se va a agregar.</param>
    /// <returns>La tarea creada con su identificador único.</returns>
    public TaskItem AddTask(TaskItem task)
    {
        task.Id = Guid.NewGuid(); // Generar un ID único para la tarea.
        _tasks.Add(task); // Agregar la tarea a la lista.
        return task; // Retornar la tarea creada.
    }
}
