from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Product
from .serializers.common import ProductSerializer
from .serializers.populated import PopulatedProductSerializer

class ProductListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        product = Product.objects.all()
        serialized_product = PopulatedProductSerializer(product, many = True)
        return Response(serialized_product.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner']= request.user.id
        product_to_add = ProductSerializer(data=request.data)
        if product_to_add.is_valid():
            product_to_add.save()
            return Response(product_to_add.data, status = status.HTTP_201_CREATED)
        return Response(product_to_add.errors, status = status.HTTP_422_UNPROCESSABLE_ENTITY)

class ProductDetailView(APIView):

    def get_product(self,pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise NotFound(detail="Cant Find Product")

    def get(self, _request, pk):
        product = self.get_product(pk = pk)
        serialized_product = PopulatedProductSerializer(product)
        return Response(serialized_product.data, status = status.HTTP_200_OK)

    def delete(self, _request, pk):
        product_to_delete = self.get_product(pk = pk)
        product_to_delete.delete()
        return Response(status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk):
        product_to_update = self.get_product(pk = pk)
        updated_product = ProductSerializer(product_to_update, data = request.data)
        if updated_product.is_valid():
            updated_product.save()
            return Response(updated_product.data, status = status.HTTP_202_ACCEPTED)
        return Response(updated_product.errors, status = status.HTTP_422_UNPROCESSABLE_ENTITY)

class ProductsBrandView(APIView):
    
    def get(self, _request, brand):
        product = Product.objects.filter( brand = brand)
        serialized_product = PopulatedProductSerializer(product, many = True)
        return Response(serialized_product.data, status=status.HTTP_200_OK)

class ProductCategoryView(APIView):

    def get(self, _request, category):
        product = Product.objects.filter(category__name = category)
        serialized_product = PopulatedProductSerializer(product, many = True)
        return Response(serialized_product.data, status=status.HTTP_200_OK)