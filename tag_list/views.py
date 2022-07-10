from django.shortcuts import render, redirect
from .forms import categoryform, foodform
from django.contrib import auth
from django.shortcuts import get_object_or_404
from .models import food
from django.contrib.auth.models import User

def mobile(request):
    return render(request, 'mobile.html')

# Create your views here.
def home(request):
    global user
    user = request.user
    foodname = food.objects.filter(user=user)
    return render(request, 'main.html', {'user':user,'foodname':foodname})

def category(request):
    user = request.user
    foodname = food.objects.filter(user=user)
    return render(request, 'category.html',{'foodname':foodname})

def ingredient(request):
    global user
    user = food.objects.filter(user = request.user.id)
    return render(request, 'list.html', {'user':user})

def barcode(request):
    if request.method == 'POST':
        user = request.user
        foodname = request.POST.get('foodname')
        date = request.POST.get('date')
        foodf = foodform({
            "user":user,
            "foodname":foodname,
            "date":date
        })
        if foodf.is_valid():
            foodf.save()
            return redirect('home')
    else:
        foodf = foodform()
    return render(request, 'barcode.html')

def select(request):
    return render(request, 'select_recipe.html')

def recipe(request):
    recipe_name = request.POST.get('recipe')
    return render(request, 'recipe.html', {'recipe_name' : recipe_name})

def jjigae(request):
    return render(request, 'jjigae.html')

def soup(request):
    return render(request, 'soup.html')

def steam(request):
    return render(request, 'steam.html')

def roast(request):
    return render(request, 'roast.html')

def tang(request):
    return render(request, 'tang.html')