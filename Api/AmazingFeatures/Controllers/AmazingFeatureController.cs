using Application.Commands.AmazingFeatures;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AmazingFeatures.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AmazingFeatureController : ApiBaseController
    {
        // GET: api/<AmazingFeatureController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AmazingFeatureController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AmazingFeatureController>
        [HttpPost]
        public void Post([FromBody] CreateAmazingFeatureCommand command)
        {
        }

        // PUT api/<AmazingFeatureController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AmazingFeatureController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
