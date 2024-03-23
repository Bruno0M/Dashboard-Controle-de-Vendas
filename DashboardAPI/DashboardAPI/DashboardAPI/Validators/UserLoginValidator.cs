using DashboardAPI.Dto;
using FluentValidation;

namespace DashboardAPI.Validators
{
    public class UserLoginValidator : AbstractValidator<UserLoginDto>
    {
        public UserLoginValidator()
        {
            RuleFor(u => u.Email)
                .EmailAddress()
                .NotEmpty();
        }
    }
}
