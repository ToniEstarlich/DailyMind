from rest_framework import serializers
from .models import Entry

class EntrySerializer( serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id', 'text', 'mood', 'created_at']
        read_only_fields = ['id', 'mood', 'created_at']