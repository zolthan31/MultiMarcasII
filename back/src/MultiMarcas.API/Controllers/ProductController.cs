using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MultiMarcas.API.Data;
using MultiMarcas.API.Models;

namespace MultiMarcas.APIv5.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase    {
         
        private readonly DataContext _context;

         public ProductController(DataContext context) 
         {
            _context = context;

         }        

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _context.Produtos;
        }

        [HttpGet("{id}")]
        public Product GetById(int id)
        {
            return _context.Produtos.FirstOrDefault(produto => produto.ProductId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "teste post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return "teste put";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "teste delete";
        }
    }
}
