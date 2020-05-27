from django.contrib.auth.models import User
from django.db import models


class Task(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tasks")
    subject = models.CharField(max_length=300)
    completed = models.BooleanField(default=False)
