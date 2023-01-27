namespace jugueteri.Models
{
    public class Juguete
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }

        public string Company { get; set; }
        public int EdadMinima { get; set; }
        public decimal Precio { get; set; }

    }
}   
