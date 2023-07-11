"""
Views for the Product APIs.
"""
from rest_framework import viewsets
from core.models import Product
from store import serializers


class ProductViewSet(viewsets.ModelViewSet):
    """View for manage recipe APIs."""
    serializer_class = serializers.ProductDetailSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        """Retrieve products and order it by id"""
        return self.queryset.all().order_by('-id')

    def get_serializer_class(self):
        """Return the serializer class for request."""
        if self.action == 'list':
            return serializers.ProductSerializer

        return self.serializer_class

    def perform_create(self, serializer):
        """Create a new recipe."""
        serializer.save()
