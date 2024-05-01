using System.Security.Claims;

namespace DashboardAPI.Helpers
{
    public static class UserUtils
    {
        public static int GetCurrentUserId(ClaimsPrincipal User)
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            int userId;

            if (int.TryParse(userIdClaim, out userId))
            {
                return userId;
            }
            else
            {
                throw new InvalidOperationException("Unable to parse user ID.");
            }
        }
    }
}
