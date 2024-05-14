using DashboardAPI.Dtos;
using DashboardAPI.Helpers;
using DashboardAPI.Services.ProductService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductInterface _product;

        public ProductController(IProductInterface product)
        {
            _product = product;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ProductDto product)
        {
            var userId = UserUtils.GetCurrentUserId(User);

            var response = await _product.CreateProduct(product, userId);
            return Ok(response);
        }

        [Authorize]
        [HttpPost("ReportSale")]
        public async Task<IActionResult> ReportSale([FromBody] SaleQuantityDto quantity)
        {
            var userId = UserUtils.GetCurrentUserId(User);

            var response = await _product.ReportSale(quantity, userId);
            return Ok(response);
        }

        [Authorize]
        [HttpGet]   
        public async Task<IActionResult> GetProductById()
        {
            var userId = UserUtils.GetCurrentUserId(User);

            var response = await _product.GetProductsByUserId(userId);
            return Ok(response);
        }

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteProductById(int productID)
        {
            var userId = UserUtils.GetCurrentUserId(User);

            var response = await _product.DeleteProductById(userId, productID);
            return Ok(response);
        }
    }
}
