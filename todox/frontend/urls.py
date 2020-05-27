from django.urls import path
from .views import Application


urlpatterns = [
    path('', Application.as_view()),
]
