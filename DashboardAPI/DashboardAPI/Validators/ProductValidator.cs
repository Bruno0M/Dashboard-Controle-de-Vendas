using DashboardAPI.Dto;
using DashboardAPI.Dtos;
using FluentValidation;

namespace DashboardAPI.Validators
{
    public class ProductValidator : AbstractValidator<ProductDto>
    {
        public ProductValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty();

            RuleFor(x => x.Price)
                .NotEmpty();

            RuleFor(x => x.Categoria)
                .NotEmpty();

            RuleFor(x => x.Quantidade)
                .NotEmpty();
        }
    }
}