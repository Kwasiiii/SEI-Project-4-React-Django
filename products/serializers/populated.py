from reviews.serializers.populated import PopulatedReviewSerializer
from products.serializers.common import ProductSerializer
from category.serializers.common import CategorySerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedProductSerializer(ProductSerializer):
    review = PopulatedReviewSerializer(many = True)
    category = CategorySerializer(many = True)
    owner = UserSerializer(many = True)