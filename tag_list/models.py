from django.db import models
from django.contrib.auth.models import User

# category 
class category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

# barcode
class food(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    foodname = models.CharField(max_length=20)
    date = models.CharField(max_length=20)

    def __str__(self):
        return self.foodname

# recipe
class recipe(models.Model):
    recipeToken = models.CharField(max_length=20)
    title = models.CharField(max_length=20)

# recipeComment
class recipeComment(models.Model):
    commentToken = models.CharField(max_length=20)
    content = models.ForeignKey(recipe, on_delete=models.CASCADE)

# ingredient
class ingredient(models.Model):
    ingredientToken = models.CharField(max_length=20)
    name = models.CharField(max_length=40)
    # expire = models.DateTimeField(auto_now_add = True) -> 요건 잘 모르겠음....

# admin(관리자) 페이지에서 기본 설정하면 자동적으로 띄워지니까.....??