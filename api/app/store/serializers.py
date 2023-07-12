"""
Serializers for Product APIs
"""

from rest_framework import serializers

from core.models import Product


class ProductSerializer(serializers.ModelSerializer):
    """Serializer for products."""

    class Meta:
        model = Product
        fields = ['id', 'ID', 'name', 'description', 'color', 'size']
        read_only_fields = ['id']

class ProductDetailSerializer(ProductSerializer):
    """Serializer for product detail view."""

    class Meta(ProductSerializer.Meta):
        fields = ProductSerializer.Meta.fields
