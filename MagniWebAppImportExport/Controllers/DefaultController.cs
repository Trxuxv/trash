using MagniWebAppImportExport.Services;
using MagniWebAppImportExport.Models;
using Microsoft.AspNetCore.Mvc;

namespace MagniWebAppImportExport.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DefaultController : ControllerBase
    {
        public ImportationService service = new ImportationService();

        public DefaultController()
        {
        }

        [HttpGet]
        public LinhasResponse Get()
        {
            return service.GetLinhasResponse();
        }

        [HttpPost]
        public IEnumerable<dynamic> AdicionarLinha([FromBody] AdicionarLinhaModel model)
        {
            return service.AdicionarLinha(model);
        }

        [HttpPut("novaColuna")]
        public ResponseNovaColuna AdicionarColuna(NovaColunaModel model)
        {
            return service.AdicionarColuna(model);
        }

        [HttpPost("excluirColuna")]
        public dynamic ExcluirColuna(ExcluirColunaModel model)
        {
            return service.ExcluirColuna(model);
        }
    }
}