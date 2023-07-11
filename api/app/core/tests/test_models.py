"""
Tests for models
"""

from decimal import Decimal
from django.test import TestCase
from django.contrib.auth import get_user_model

from core import models


class ModelTests(TestCase):
    """Test models."""

    def test_create_user_with_email_successful(self):
        """Test creating a user with an email is successful."""
        email = 'test@example.com'
        password = 'testpass123'
        user = get_user_model().objects.create_user(
            email=email,
            password=password,
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_create_superuser_with_email_successful(self):
        """Test creating superuser"""
        email = 'test@example.com'
        password = 'testpass123'
        user = get_user_model().objects.create_superuser(email, password)

        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)

    def test_create_product_successful(self):
        """Test creating product"""
        product = models.Product.objects.create(
            name = 'milk',
            ID = 1450,
            description = 'this is the proct description',
            color = 'orange',
            size = 'small',
        )

        self.assertEqual(str(product), product.name)

