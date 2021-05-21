using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Message.Object.Login
{
    public class LoginMessageResponse
    {
        public string Username { get; set; }

        public string Token { get; set; }
    }
}
