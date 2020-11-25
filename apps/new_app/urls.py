from django.conf.urls import url
from . import views
from django.urls import path 
from django.contrib import admin

app_name ='eagle'
                    
urlpatterns = [

    url(r'^$', views.index),
    url(r'^team$', views.team),
    url(r'^disc$', views.disc),
    url(r'^contact$', views.contact),
    
]
