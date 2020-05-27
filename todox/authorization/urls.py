from .api import RegistrarAPI, AuthorizeAPI, UserAPI
from knox import views as knox_views
from django.urls import path, include


urlpatterns = [
    path('', include("knox.urls")),
    path('register/', RegistrarAPI.as_view()),
    path('authorize/', AuthorizeAPI.as_view()),
    path('user/', UserAPI.as_view(), name="user"),
    path('revoke/', knox_views.LogoutView.as_view(), name="knox_logout")
]
