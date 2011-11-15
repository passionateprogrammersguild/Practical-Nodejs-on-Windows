using System;
using Nancy;
using Nancy.ModelBinding;

namespace JaxArchSIG {
    public class ZombieModule : NancyModule {

        public ZombieModule() {

            Get["/js/{file}"] = p =>
            {
                return Response.AsJs("assets/scripts/" + p.file as String);
            };

            Get["/style/{file}"] = p =>
            {
                return Response.AsCss("assets/styles/" + p.file as String);
            };

            Get["/img/{file}"] = p =>
            {
                return Response.AsImage("assets/graphics/" + p.file as String);
            };

            Get["/"] = p => {
                return View["~/views/home.cshtml"];
            };
        }
    }
}