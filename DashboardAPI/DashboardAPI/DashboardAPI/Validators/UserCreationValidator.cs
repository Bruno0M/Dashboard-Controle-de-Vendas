using DashboardAPI.Dto;
using FluentValidation;

namespace DashboardAPI.Validators
{
    public class UserCreationValidator : AbstractValidator<UserCreationDto>
    {
        public UserCreationValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .MaximumLength(50);

            RuleFor(x => x.Surname)
                .NotEmpty()
                .MaximumLength(50);

            RuleFor(u => u.Email)
                .EmailAddress()
                .NotEmpty()
                .MaximumLength(100);

            RuleFor(u => u.Password)
                .NotEmpty()
                .MinimumLength(8);

            RuleFor(u => u.ConfirmPassword)
                .Equal(u => u.Password)
                .WithMessage("Passwords do not match");
        }
    }
}
