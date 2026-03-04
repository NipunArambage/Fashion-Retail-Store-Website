using Backend_API.Data;
using Backend_API.Models.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbcontext dbcontext;
        public UserController(ApplicationDbcontext dbcontext)
        {
            this.dbcontext = dbcontext;
        }

        [HttpGet]
        public IActionResult GetAllUser()
        {
            var allUser = dbcontext.Users.ToList();
            return Ok(allUser);
        }

        // User registration endpoint
        [HttpPost("register")]
        public IActionResult Register([FromBody] User request)
        {
            if (!ModelState.IsValid)
            {
                return ValidationProblem(ModelState);
            }

            if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Name, Email and Password are required.");
            }

            var exists = dbcontext.Users.Any(u => u.Email == request.Email);
            if (exists)
            {
                return Conflict("Email already in use.");
            }

            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = request.Name.Trim(),
                Email = request.Email.Trim(),
                Number = request.Number?.Trim() ?? string.Empty,
                Password = request.Password.Trim()
            };

            dbcontext.Users.Add(user);
          

            return CreatedAtAction(nameof(GetAllUser), new { id = user.Id }, new { user.Id, user.Name, user.Email, user.Number });
        }

        // Login endpoint: matches registered email and password
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request is null || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Email and Password are required.");
            }

            var user = dbcontext.Users.FirstOrDefault(u => u.Email == request.Email);
            if (user is null || user.Password != request.Password)
            {
                return Unauthorized("Invalid credentials.");
            }

            Response.Cookies.Append("auth_role", "user", new CookieOptions { HttpOnly = true, Secure = true, SameSite = SameSiteMode.Strict });
            return Ok(new { message = "Login successful", role = "user" });
        }

        // Logout endpoint (clears auth cookie)
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            if (Request.Cookies.ContainsKey("auth_role"))
            {
                Response.Cookies.Delete("auth_role");
            }
            return Ok(new { message = "Logged out" });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
