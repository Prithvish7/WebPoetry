from django.contrib import admin
from .models import Poem, Comment

@admin.register(Poem)
class PoemAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = ("title", "author", "category", "created_at", "like_count")
    list_filter = ("category", "created_at")
    search_fields = ("title", "content", "author")
    ordering = ("-created_at",)

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("poem", "user_name", "created_at")
    search_fields = ("user_name", "text")
