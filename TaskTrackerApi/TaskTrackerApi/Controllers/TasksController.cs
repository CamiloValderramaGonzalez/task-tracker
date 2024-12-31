using Microsoft.AspNetCore.Mvc;
using TaskTrackerApi.Application.Interfaces;
using TaskTrackerApi.Domain.Entities;

namespace TaskTrackerApi.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly ITaskService _taskService;

    public TasksController(ITaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpGet]
    public IActionResult GetAllTasks()
    {
        return Ok(_taskService.GetAllTasks());
    }

    [HttpPost]
    public IActionResult AddTask([FromBody] TaskItem task)
    {
        var createdTask = _taskService.AddTask(task);
        return CreatedAtAction(nameof(GetAllTasks), new { id = createdTask.Id }, createdTask);
    }
}
