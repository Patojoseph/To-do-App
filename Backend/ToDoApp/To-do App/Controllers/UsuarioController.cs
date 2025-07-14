using Microsoft.AspNetCore.Mvc;
using To_do_App.Models;
using DatabaseModels;

namespace To_do_App.Controllers
{
    public class UsuarioController : Controller
    {
        public IActionResult Index()
        {
            var db = new DatabaseHelper();
            db.TestConnection();
            db.Select_Usuarios();

            return Content("Consulta realizada com sucesso. Verifique o console para os resultados.");
        }
    }
}