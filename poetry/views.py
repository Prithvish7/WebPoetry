from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from .models import Poem

def index(request):
    poems = Poem.objects.filter(category='poem')
    prose_list = Poem.objects.filter(category='prose')
    songs = Poem.objects.filter(category='song')

    return render(request, 'poetry/index.html', {
        'poems': poems,
        'prose_list': prose_list,
        'songs': songs,
    })

def poem_detail(request, slug):
    poem = get_object_or_404(Poem, slug=slug)
    return render(request, 'poetry/details.html', {'poem': poem})

@require_POST
def like_poem(request, slug):
    poem = get_object_or_404(Poem, slug=slug)
    poem.like_count += 1
    poem.save()
    return JsonResponse({'like_count': poem.like_count})
