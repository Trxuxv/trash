namespace MagniWebAppImportExport
{
    public class NovaColunaModel
    {
        public object[]? linhas { get; set; }
        public NovaColunaObj? NovaColuna { get; set; }
    }

    public class NovaColunaObj
    {
        public string? Nome { get; set; }
        public string? Formato { get; set; }
        public NovaColuna[]? Coluna { get; set; }
    }

    public class NovaColuna
    {
        public string? Valor { get; set; }
    }
}