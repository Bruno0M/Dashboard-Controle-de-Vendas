using DashboardAPI.Data.Context;
using DashboardAPI.Dtos;
using DashboardAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace DashboardAPI.Services.ProductService
{
    public class ProductService : IProductInterface
    {
        private readonly DashboardContext _context;
        public ProductService(DashboardContext context)
        {
            _context = context;
        }

        public async Task<Response<IEnumerable<ProductDto>>> GetProductsByUserId(int id)
        {
            var response = new Response<IEnumerable<ProductDto>>();
            try
            {
                var products = await _context.
                    Products.Where(x => x.UserId == id).ToListAsync();

                var productDtos = products.Select(p => new ProductDto
                {
                    Name = p.Name,
                    Price = p.Price
                });

                response.Data = productDtos;
                response.Status = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }

        public async Task<Response<ProductDto>> CreateProduct(ProductDto product, int id)
        {
            var response = new Response<ProductDto>();
            try
            {

                ProductModel productModel = new ProductModel()
                {
                    Name = product.Name,
                    Price = product.Price,
                    UserId = id,
                };

                _context.Add(productModel);
                await _context.SaveChangesAsync();

                response.Message = "Product registered";
                response.Status = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }
    }
}
