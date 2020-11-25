from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, "new_app/index.html")

def disc(request):
    return render(request, "new_app/disc.html")

def team(request):
    return render(request, "new_app/team.html")

def contact(request):
    return render(request, "new_app/contact.html")
