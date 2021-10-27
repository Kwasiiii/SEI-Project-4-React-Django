from django.urls import path
from .views import ProductListView, ProductDetailView, ProductsBrandView, ProductCategoryView

urlpatterns = [
    path('', ProductListView.as_view()),
    path('<int:pk>/', ProductDetailView.as_view()),
    path('brand/<str:brand>/', ProductsBrandView.as_view()),
    path('category/<str:category>/', ProductCategoryView.as_view())
]