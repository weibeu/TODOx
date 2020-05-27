from rest_framework import viewsets, permissions
from .serializers import TaskSerializer
# from .models import Task


class TaskViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.request.user.tasks.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
