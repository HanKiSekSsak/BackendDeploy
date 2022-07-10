from django import forms
from .models import category
from .models import food

class categoryform(forms.ModelForm):
    class Meta:
        model = category
        fields = ['name']

class foodform(forms.ModelForm):
    class Meta:
        model = food
        fields = '__all__'



