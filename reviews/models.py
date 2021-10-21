from typing import Text
from django.db import models

from products.models import Product

# Create your models here.
class Review(models.Model):
    text = models.TextField(max_length = 500)
    created_at = models.DateTimeField(auto_now_add = True)
    product = models.ForeignKey(
        "products.Product",
        related_name = "reviews",
        on_delete=models.PROTECT
    )