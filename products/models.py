from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Product(models.Model):
    brand = models.CharField(max_length = 50, default = None)
    name = models.CharField(max_length = 100, default = None)
    description = models.CharField(max_length = 500, default = None)
    price = models.CharField(max_length = 50,default=None)
    size = ArrayField(models.CharField(max_length = 50), blank=True)
    highlight = ArrayField(models.CharField(max_length = 50), blank=True)
    images = ArrayField(models.CharField(max_length = 300), blank=True)
    category = models.ManyToManyField(
        'category.Category',
        related_name= "products"
    )
    in_stock = models.BooleanField(default = True)
    owner = models.ManyToManyField(
        'jwt_auth.User',
        related_name="products"
    )

    def __str__(self):
        return f"{self.brand} - {self.name} - {self.price}"