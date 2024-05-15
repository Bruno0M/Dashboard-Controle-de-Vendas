using DashboardAPI.Dtos;
using DashboardAPI.Models;

namespace DashboardAPI.Services.ProductService
{
    public interface IProductInterface
    {
        public Task<Response<ProductDto>> CreateProduct(ProductDto product, int userId);
        public Task<Response<ProductDto>> ReportSale(SaleQuantityDto quantity, int userId);
        public Task<Response<IEnumerable<ProductDto>>> GetProductsByUserId(int id);
        public Task<Response<ProductDto>> DeleteProductById(int userId, int productID);
    }
}