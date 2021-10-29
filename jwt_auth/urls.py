from django.urls import path
from .views import RegisterView, LoginView, WishListView, WishListDetailView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('wishlist/', WishListView.as_view()),
    path('wishlist/<int:pk>/<int:product>/', WishListDetailView.as_view()) 
]