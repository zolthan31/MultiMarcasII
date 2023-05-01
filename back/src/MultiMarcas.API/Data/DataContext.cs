using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MultiMarcas.API.Models;

namespace MultiMarcas.API.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {            
        }
        public DbSet<Product> Produtos { get; set; }
    }
}