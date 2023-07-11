"""
Database models.
"""
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)

PRODUCT_CHOICES = [
    ('small','SMALL'),
    ('medium','MEDIUM'),
    ('large','LARGE'),
]


class UserManager(BaseUserManager):
    """Manager for users."""
    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return an new user."""
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create, save and return superuser"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class Product(models.Model):
    """Product model design."""
    name = models.CharField(max_length = 255)
    ID = models.BigIntegerField(unique=True)
    description = models.TextField()
    color = models.CharField(max_length = 255)
    size = models.CharField(max_length = 255, default='small', choices = PRODUCT_CHOICES)

    def __str__(self):
        return self.name
