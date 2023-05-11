using MagniWebAppImportExport.Models;

namespace MagniWebAppImportExport.Services
{
    public class ImportationService
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };
        private static readonly string[] Summaries2 = new[]
        {
        "", " teste", " ", " Teste", " ", " Vamos la ", "002 ", " ", " ", " "
    };


        private static readonly string[] Valores = new[]
        {
        "1.200,20",
        "1.340,20", "1.000,00","1.340,20", "1.000,00"
    };

        private static readonly string[] DataFechamento = new[]
        {"10/02/2023", "09/10/2024", "17/04/2019","22/01/2023"};

        public ImportationService() { }

        public dynamic ExcluirColuna(ExcluirColunaModel model)
        {
            var res = model.linhas.ToList();

            return res;
        }

        public LinhasResponse GetLinhasResponse()
        {
            var data = Enumerable.Range(1, 5).Select(index => new LinhasModel
            {
                DataAbertura = DataFechamento[Random.Shared.Next(DataFechamento.Length)],
                Descricao = Summaries[Random.Shared.Next(Summaries.Length)],
                Valor = Valores[Random.Shared.Next(Valores.Length)],
                Banco = Summaries2[Random.Shared.Next(Summaries2.Length)],
                DataFechamento = DataFechamento[Random.Shared.Next(DataFechamento.Length)]
            })
               .ToList();

            var colunas = new List<ColunaModel>
            {
                new ColunaModel { Nome = "dataFechamento", Formato = "dd/mm/yyyy" },
                new ColunaModel { Nome = "dataAbertura", Formato = "dd/mm/yyyy" },
                new ColunaModel { Nome = "descricao", Formato = "texto comum" },
                new ColunaModel { Nome = "valor", Formato = "0.000,00" },
                new ColunaModel { Nome = "banco", Formato = "texto comum" },
            };

            var res = new LinhasResponse
            {
                Data = data,
                Colunas = colunas
            };

            return res;
        }

        public IEnumerable<dynamic> AdicionarLinha(AdicionarLinhaModel model)
        {
            var response = new List<Object>();

            if (model.linhas != null && model.NovaLinha != null)
            {
                var linhas = model.linhas;
                response = linhas.ToList();
                response.Add(model.NovaLinha);
            }

            return response;
        }

        public ResponseNovaColuna AdicionarColuna(NovaColunaModel model)
        {
            var response = new ResponseNovaColuna();
            var linhas = model.linhas;
            var chaveValores = model.NovaColuna.Coluna;
            var valores = new List<string>();

            for (int i = 0; i < linhas.Length; i++)
            {
                string valor = chaveValores[i].Valor;

                valores.Add(valor);
            }

            response.Data = valores;
            response.NomeColuna = model.NovaColuna.Nome;
            response.Formato = model.NovaColuna.Formato;

            return response;
        }
    }
}
