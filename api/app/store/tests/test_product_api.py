from rest_framework.test import APIClient
from rest_framework import status

from django.test import TestCase
from django.urls import reverse

from core.models import Product

from store.serializers import (
    ProductSerializer,
    ProductDetailSerializer,
)

PRODUCT_URL = reverse('store:product-list')


def detail_url(product_id):
    """Create and return a product detail URL."""
    return reverse('store:product-detail', args=[product_id])

def create_product(**params):
    """Create and return a sample recipe."""
    defaults = {
        'name': 'Sample name',
        'ID' : 56,
        'description': 'Sample description',
        'color': 'Sample color',
        'size': 'small'
    }
    defaults.update(params)

    product = Product.objects.create(**defaults)
    return product


def PublicProductAPITests(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_retrieve_products(self):
        """Test retreiving a list of products."""
        create_product()
        create_product()

        res = self.client.get(PRODUCT_URL)

        products = Product.objects.all().order_by('-id')
        serializer = ProductSerializer(products, many = True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)

    def test_get_product_detail(self):
        """Test get product detail."""
        product = create_product()

        url = detail_url(product.id)
        res = self.client.get(url)

        serializer = ProductDetailSerializer(product)
        self.assertEqual(res.data, serializer.data)

    def test_create_product(self):
        """Test creating product."""
        payload = {
            'name': 'Sample name',
            'ID' : 56,
            'description': 'Sample description',
            'color': 'Sample color',
            'size': 'small'
        }
        res = self.client.post(PRODUCT_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        product = Product.objects.get(id = res.data['id'])
        for k, v in payload.items():
            self.assertEqual(getattr(product, k), v)

    def test_partial_product_update(self):
        """Test partial product update."""
        product = create_product()
        url = detail_url(product.id)
        payload = {
            'name': 'Updated sample name',
            'description': 'Updated sample description',
        }
        res = self.client.patch(url, payload)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        product.refresh_from_db()
        self.assertEqual(product.name, payload['name'])
        self.assertEqual(product.description, payload['description'])

    def test_complete_product_update(self):
        """Test complete product update."""
        product = create_product()
        url = detail_url(product.id)
        payload = {
            'name': 'Update Sample name',
            'ID' : 500,
            'description': 'Update Sample description',
            'color': 'Update Sample color',
            'size': 'Update small'
        }
        res = self.client.patch(url, payload)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        product.refresh_from_db()
        for k, v in payload.items():
            self.assertEqual(getattr(product, k), v)

    def test_delete_product(self):
        """test deleting a product succsessful."""
        product = create_product()

        url = detail_url(product.id)
        res = self.client.delete(url)

        self.assertEqual(res.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Product.objects.filter(id = product.id).exists())






