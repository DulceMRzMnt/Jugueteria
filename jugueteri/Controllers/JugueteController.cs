using jugueteri.Datos;
using jugueteri.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace jugueteri.Controllers
{

    [Route("api/[controller]")]
    [EnableCors("mipolitica")]
    [ApiController]
    public class JugueteController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Juguete> Get()
        {
            return JugueteRepositorio.Get();
        }
        [HttpPost]
        [EnableCors("mipolitica")]
        public int add(Juguete nuevo)
        {
            return JugueteRepositorio.add(nuevo);
        }
    }
}
