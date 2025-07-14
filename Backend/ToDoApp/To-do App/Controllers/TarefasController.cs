using Microsoft.AspNetCore.Mvc;
using To_do_App.Models;
using DatabaseModels;

namespace To_do_App.Controllers
{
    public class TarefasController : Controller
    {
        public IActionResult Index()
        {
            var db = new DatabaseHelper();
            db.TestConnection();
            db.Select_Tarefas();

            return Content("Consulta realizada com sucesso. Verifique o console para os resultados.");
        }
    }
}
