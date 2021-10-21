from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers.common import ReviewSerializer

class ReviewListView(APIView):

    def post(self, request):
        review_to_add = ReviewSerializer(data=request.data)
        if review_to_add.is_valid():
            review_to_add.save()
            return Response(review_to_add.data, status = status.HTTP_201_CREATED)
        return Response(review_to_add.errors, status = status.HTTP_422_UNPROCESSABLE_ENTITY)
