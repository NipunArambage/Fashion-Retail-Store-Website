using System.ComponentModel.DataAnnotations;

namespace Backend_API.Models.Entities
{
    public class User
    {
        public Guid Id { get; set; }

        [Required]
        public required string Name { get; set; }

        [Required]
        [EmailAddress]
        public required string Email { get; set; }

        [Required]
        public required string Number { get; set; }

        // Registration password (demo; consider hashing for production)
        [Required]
        [MinLength(6)]
        public required string Password { get; set; }
    }
}
