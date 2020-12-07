using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApp.Models;

namespace ToDoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private static List<Todo> _toDos = new List<Todo>();

        public TodoController()
        {
        }

        [HttpGet]
        public ActionResult GetToDos()
        {
            return Ok(_toDos);
        }

        [HttpPost]
        public ActionResult AddToDo(Todo newToDo)
        {
            _toDos.Add(newToDo);
            return Ok(_toDos);
        }

        [HttpDelete]
        public ActionResult DeleteToDo([FromQuery]int index)
        {
            _toDos.RemoveAt(index);
            return Ok(_toDos);
        }
    }
}
