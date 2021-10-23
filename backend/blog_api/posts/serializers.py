from django.db import connections
from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):

  class Meta:
    model = Post
    fields = ('id', 'title', 'author', 'text', 'created_at')
