using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Message.Object.Login
{
    public class LoginMessageRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]

        public string Password { get; set; }
    }
}
