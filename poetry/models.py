from django.db import models
from django.utils.text import slugify

class Poem(models.Model):
    CATEGORY_CHOICES = [
        ('poem', 'Poem'),
        ('prose', 'Prose'),
        ('song', 'Song'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True)
    content = models.TextField()
    author = models.CharField(max_length=120, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    like_count = models.PositiveIntegerField(default=0)

    category = models.CharField(
        max_length=10,
        choices=CATEGORY_CHOICES,
        default='poem',
    )

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            base = slugify(self.title)[:200]
            slug = base
            counter = 1
            while Poem.objects.filter(slug=slug).exists():
                slug = f"{base}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Comment(models.Model):
    poem = models.ForeignKey(Poem, related_name='comments', on_delete=models.CASCADE)
    user_name = models.CharField(max_length=100)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"Comment by {self.user_name} on {self.poem.title}"
