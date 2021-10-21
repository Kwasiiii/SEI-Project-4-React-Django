from reviews.serializers.common import ReviewSerializer
from products.serializers.common import ProductSerializer

class PopulatedProductSerializer(ProductSerializer):
    review = ReviewSerializer(many = True)