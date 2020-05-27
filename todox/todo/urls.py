from .api import TaskViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('tasks', TaskViewSet, "tasks")

urlpatterns = router.urls
