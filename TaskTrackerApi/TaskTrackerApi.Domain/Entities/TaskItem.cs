namespace TaskTrackerApi.Domain.Entities;

public record TaskItem
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}
