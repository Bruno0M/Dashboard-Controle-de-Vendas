using DashboardAPI.Dtos;
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
        public async Task<IActionResult> Product([FromBody] ProductDto product)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            int userIdConvert;

            int.TryParse(userId, out userIdConvert);

            var response = await _product.CreateProduct(product, userIdConvert);
            return Ok(response);
        }

        [Authorize]
        [HttpGet]   
        public async Task<IActionResult> GetProductById()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            int userIdConvert;

            int.TryParse(userId, out userIdConvert);

            var response = await _product.GetProductsByUserId(userIdConvert);
            return Ok(response);
        }
    }
}
