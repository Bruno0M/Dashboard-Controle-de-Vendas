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
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price,
                    Categoria = p.Categoria,
                    Quantidade = p.Quantidade,
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
                    Categoria = product.Categoria,
                    Price = product.Price,
                    Quantidade= product.Quantidade,
                    UserId = id,
                };

                _context.Add(productModel);
                await _context.SaveChangesAsync();

                response.Data = product;
                response.Message = "Product registered";
                response.Status = HttpStatusCode.Created;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }

            return response;
        }

        public async Task<Response<ProductDto>> ReportSale(SaleQuantityDto quantity, int userId)
        {
            var response = new Response<ProductDto>();

            var product = await _context.Products.Where(p => p.Id == quantity.Id && p.UserId == userId).FirstOrDefaultAsync();

            if(product != null)
            {
                if(product.Quantidade < quantity.Quantidade)
                {
                    response.Data = null;
                    response.Message = "Invalid quantity";
                    return response;
                }

                product.Quantidade -= quantity.Quantidade;
                await _context.SaveChangesAsync();

                response.Data = null;
                response.Message = "Successful sale";
            }

            return response;
        }

        public async Task<Response<ProductDto>> DeleteProductById(int userId, int productID)
        {
            var response = new Response<ProductDto>();
            try
            {
                var product = await _context.
                    Products.FirstOrDefaultAsync(x => x.UserId == userId && x.Id == productID);

                _context.Remove(product);
                await _context.SaveChangesAsync();

                response.Message = "Product deleted!";
                response.Status = HttpStatusCode.NoContent;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }
    }
}
