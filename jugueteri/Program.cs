using jugueteri.Datos;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(Options => {
    Options.AddPolicy(
    "mipolitica",
    policy =>
    {
        policy.AllowAnyMethod();
        policy.AllowAnyHeader();
       
        policy.WithOrigins("http://localhost:3000");
    }
    );
});
// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
JugueteRepositorio.add(new jugueteri.Models.Juguete
{
    Nombre = "Carro",
    EdadMinima= 8,
    Descripcion="Color azul con blanco",
}) ;
JugueteRepositorio.add(new jugueteri.Models.Juguete
{
    Nombre = "Triciclo",
    EdadMinima = 8,
    Descripcion = "Color azul con blanco",
});
JugueteRepositorio.add(new jugueteri.Models.Juguete
{
    Nombre = "Scooter",
    EdadMinima = 8,
    Descripcion = "Color azul con blanco",
});
JugueteRepositorio.add(new jugueteri.Models.Juguete
{
    Nombre = "Balón",
    EdadMinima = 8,
    Descripcion = "Color azul con blanco",
});
app.UseCors();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
