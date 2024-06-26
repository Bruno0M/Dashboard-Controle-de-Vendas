﻿using DashboardAPI.Dto;
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

            RuleFor(x => x.Category)
                .NotEmpty();

            RuleFor(x => x.Quantity)
                .NotEmpty();
        }
    }
}