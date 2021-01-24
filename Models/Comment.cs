using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CommentWebApp.Models
{
    public class Comment
    {
        public Guid Id { get; set; }
        public DateTime Created { get; set; }
        public string Text { get; set; }
    }
}
