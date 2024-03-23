﻿using System.Net;

namespace DashboardAPI.Models
{
    public class Response <T>
    {
        public T? Data { get; set; }
        public string Message { get; set; } = string.Empty;
        public HttpStatusCode Status { get; set; }
    }
}
