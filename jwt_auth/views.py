from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from datetime import datetime, timedelta
from django.contrib.auth import get_user_model
from django.conf import settings
from rest_framework.permissions import IsAuthenticated
import jwt
from .serializers.common import UserSerializer
from .serializers.wishlist import WishlistSerializer

from products.models import Product

User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        if user_to_create.is_valid():
            user_to_create.save()
            return Response({'message': 'Registration Successful'}, status=status.HTTP_202_ACCEPTED)
        return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):
    
    def post(self,request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied(detail="Invalid Credentials")
        if not user_to_login.check_password(password):
            raise PermissionDenied(detail="Invalid Credentials")
        dt = datetime.now() + timedelta(days=7)
        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm= 'HS256'
        )
        return Response({'token':token, 'message': f"Welcome back, {user_to_login.username}", 'username':{user_to_login.username}, 'email':{user_to_login.email}, 'first_name':{user_to_login.first_name}, 'last_name': {user_to_login.last_name}})


class WishListView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        wish_list = User.objects.all()
        print()
        serialized_wishlist = WishlistSerializer(wish_list, many= True)
        return Response(serialized_wishlist.data, status=status.HTTP_200_OK)

    def put(self, request):
        request.data['owner'] = request.user.id
        user_to_update = User.objects.get(pk = request.user.id)
        product_to_add = Product.objects.get(pk = request.data['wish_list'])
        user_to_update.wish_list.add(product_to_add)
        return Response(WishlistSerializer(user_to_update).data, status=status.HTTP_201_CREATED)

class WishListDetailView(APIView):

    def delete(self, request, pk, product):
        user = User.objects.get(pk=pk)
        product_to_delete = Product.objects.get(pk = product)
        user.wish_list.remove(product_to_delete)
        # serialized_user = WishlistSerializer(user)
        return Response(status=status.HTTP_204_NO_CONTENT)
