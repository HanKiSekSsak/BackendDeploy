from django.shortcuts import redirect, render
from django.contrib import auth
from django.contrib.auth.models import User


# 로그인

def login(request):
    if request.method == 'POST':
        id = request.POST.get('user_id')
        pwd = request.POST.get('user_pw')
        user = auth.authenticate(request, username = id, password = pwd)
        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            return redirect('home')

    else:
        return render(request, 'login.html')

# 로그아웃
def logout(request):
    auth.logout(request)
    return redirect('home')

# 회원가입
def register(request):
    if request.method == 'POST':
        if request.POST.get('password') == request.POST.get('confirm'):
            user = User.objects.create_user(username = request.POST['name'], password = request.POST['password'])
            auth.login(request, user)
            return redirect('home')
    return render(request, 'register.html')