from django.db import models
from django.db.models import fields
from rest_framework import serializers
from ..models import Category

class CategorySerializer(serializers.ModelSerializer):
    models = Category
    fields = '__all__'