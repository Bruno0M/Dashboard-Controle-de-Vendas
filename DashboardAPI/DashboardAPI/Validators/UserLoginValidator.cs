using DashboardAPI.Dto;
using FluentValidation;

namespace DashboardAPI.Validators
{
    public class UserLoginValidator : AbstractValidator<AuthLoginDto>
    {
        public UserLoginValidator()
        {
            RuleFor(u => u.Email)
                .EmailAddress()
                .NotEmpty();
        }
    }
}
