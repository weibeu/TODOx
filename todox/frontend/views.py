from django.views.generic import TemplateView


class Application(TemplateView):

    template_name = "frontend/index.html"
