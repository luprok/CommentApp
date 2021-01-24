using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CommentWebApp.Models;

namespace CommentWebApp.Data
{
    public class CommentContext : DbContext
    {
        public CommentContext (DbContextOptions<CommentContext> options)
            : base(options)
        {
        }

        public DbSet<CommentWebApp.Models.Comment> Comment { get; set; }
    }
}
