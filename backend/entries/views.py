from django.shortcuts import render
from rest_framework import viewsets, status 
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Entry
from .serializers import EntrySerializer

def simple_mood_analysis(text: str) -> str:
    text_low = text.lower()
    positive_words = ['good', 'great', 'happy', 'fantastic', 'love', 'nice', 'excited', 'amazing']
    negative_words = [ 'bad', 'sad', 'angry', 'hate', 'tired', 'depressed', 'worried']

    pos = sum(word in text_low for word in positive_words)
    neg = sum(word in text_low for word in negative_words)

    if pos > neg and pos >= 1:
        return 'positive'
    if neg > pos and neg >= 1:
        return 'negative'
    return 'neutral'

class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all().order_by('-created_at')
    serializer_class = EntrySerializer

    def perform_create(self,serializer):
        text = serializer.validated_data.get('text', '')
        mood = simple_mood_analysis(text)
        serializer.save(mood=mood)

    @action(detail=False, methods=['post'])
    def analyze(self, request):
        """
        Endpoint return {text: '...'} and comeback mood without not save
        """
        text = request.data.get('text', '')
        if text == '':
            return Response({'error':'text required'}, status=status.HTTP_400_BAD_REQUEST)
        mood = simple_mood_analysis(text)
        return Response({'mood': mood})
 

