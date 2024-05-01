using DashboardAPI.Dto;
using DashboardAPI.Models;
using DashboardAPI.Services.UserService;
using FluentValidation;
using FluentValidation.AspNetCore;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace DashboardAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthInterface _userInterface;
        private readonly IValidator<UserLoginDto> _loginValidator;
        private readonly IValidator<UserCreationDto> _registerValidator;
        public AuthController(IAuthInterface userInterface, IValidator<UserLoginDto> loginValidator, IValidator<UserCreationDto> registerValidator)
        {
            _userInterface = userInterface;
            _loginValidator = loginValidator;
            _registerValidator = registerValidator;
        }

        [HttpPost("Register")] 
        public async Task<IActionResult> Register([FromBody]UserCreationDto userCreationDto)
        {
            ValidationResult validatorResult = await _registerValidator.ValidateAsync(userCreationDto);

            if (!validatorResult.IsValid)
            {
                validatorResult.AddToModelState(ModelState);
                return BadRequest(ModelState);
            }

            var response = await _userInterface.UserCreation(userCreationDto);

            if (response.Status == HttpStatusCode.BadRequest)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpPost("Login")]
        [Consumes("application/json")]
        public async Task<IActionResult> Login([FromBody]UserLoginDto user)
        {
            ValidationResult validatorResult = await _loginValidator.ValidateAsync(user);

            if (!validatorResult.IsValid)
            {
                validatorResult.AddToModelState(ModelState);
                return BadRequest(ModelState);
            }

            var response = await _userInterface.Login(user);

            if(response.Status == HttpStatusCode.BadRequest)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

    }
}
