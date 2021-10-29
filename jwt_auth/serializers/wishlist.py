from django.db import models
from rest_framework import serializers
from django.contrib.auth import get_user_model
from products.serializers.common import ProductSerializer

User = get_user_model()

class WishlistSerializer(serializers.ModelSerializer):
    wish_list = ProductSerializer(many=True)
    class Meta:
        model = User
        fields = ('wish_list', )
