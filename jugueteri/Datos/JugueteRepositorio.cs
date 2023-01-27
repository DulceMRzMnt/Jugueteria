using jugueteri.Models;

namespace jugueteri.Datos
{
    public static class JugueteRepositorio
    {
        public static ICollection<Juguete> ListaJuguete = new List<Juguete>();

        public static IEnumerable<Juguete> Get()
        {
            return ListaJuguete;
        }

        public static int add(Juguete nuevo)
        {
            nuevo.Id = ListaJuguete.Count + 1;
            ListaJuguete.Add(nuevo);
            return nuevo.Id;
        } 
    } 

}
