from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length = 50)
    info = models.CharField(max_length=1000, default=None)
    
    def __str__(self):
        return f"{self.name}"