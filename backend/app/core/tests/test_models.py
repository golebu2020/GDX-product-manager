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

    # def test_create_recipe(self):
    #     """Test creating a recipe is successful"""
    #     user = get_user_model().objects.create_user(
    #         'test@example.com',
    #         'testpass123',
    #     )
    #     recipe = models.Recipe.objects.create(
    #         user=user,
    #         title='Sample recipe name',
    #         time_minutes = 5,
    #         price = Decimal('5.50'),
    #         description = 'Sample recipe description.',
    #     )

    #     self.assertEqual(str(recipe), recipe.title)
