using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApp.Models
{
    public class Todo
    {
        [JsonProperty("Title")]
        public string Title { get; set; }
        [JsonProperty("IsCompleted")]
        public bool IsCompleted { get; set; }

        public Todo()
        {

        }

        public Todo(string title, bool isCompleted)
        {
            Title = title;
            IsCompleted = isCompleted;
        }
    }
}
