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

    # def create(self, validated_data):
    #     wish_list_validated_data = validated_data.pop('wish_list')
    #     user = User.objects.create(**validated_data)
    #     wish_list_serializer = self.fields['wish_list']
    #     for each in wish_list_validated_data:
    #         each['user'] = user
    #     wishes = wish_list_serializer.create(wish_list_validated_data)
    #     return user