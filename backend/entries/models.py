from django.db import models

class Entry(models.Model):
    text = models.TextField()
    mood = models.CharField(max_length=20, blank=True) # analitic (positive/Neutral/Negative)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.text[:30]}..."


