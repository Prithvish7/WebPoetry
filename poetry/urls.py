from django.urls import path
from . import views

app_name = 'poetry'

urlpatterns = [
    path('', views.index, name='index'),
    path('poem/<slug:slug>/', views.poem_detail, name='poem_detail'),
    path('poem/<slug:slug>/like/', views.like_poem, name='like_poem'),
]
