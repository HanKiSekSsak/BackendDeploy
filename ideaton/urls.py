from django.contrib import admin
from django.urls import path
from tag_list import views
from django.contrib import auth
from account import views as account_views

app_name = "account"

urlpatterns = [
    path('admin/', admin.site.urls),

    path('home/', views.home, name= 'home'),

    path('',account_views.login,name='login'),

    # mobile바코드 생성
    path('barcode/mobile/',views.mobile,name='mobile'),

    # category url 생성
    path('category/', views.category, name = 'category'),

    # ingredient url 생성
    path('ingredient/', views.ingredient, name = 'ingredient'),

    # barcode url 생성
    path('barcode/', views.barcode, name = 'barcode'),

    # select recipe url 생성
    path('select/', views.select, name = 'select'),

    # recipe url 생성
    path('recipe/', views.recipe, name = 'recipe'),

    # 로그인 url 생성
    path('login/', account_views.login, name = 'login'),

    # 로그아웃 url 생성
    path('logout/', account_views.logout, name = 'logout'),

    # 회원가입 url 생성
    path('register/', account_views.register, name = 'register'),

    # tag_list에서 찌개 url 생성
    path('tag/jjigae/', views.jjigae, name = 'jjigae'),

    # tag_list에서 국 url 생성
    path('tag/soup/', views.soup, name = 'soup'),

    # tag_list에서 찜 url 생성
    path('tag/steam/', views.steam, name = 'steam'),

    # tag_list에서 구이 url 생성
    path('tag/roast/', views.roast, name = 'roast'),

    # tag_list에서 탕 url 생성
    path('tag/tang/', views.tang, name = 'tang'),
]
