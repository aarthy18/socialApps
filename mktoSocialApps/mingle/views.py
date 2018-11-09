from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import Activity
from .serializers import ActivitySerializer


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

class ListActivitiesView(generics.ListAPIView):
	queryset = Activity.objects.all()
	serializer_class = ActivitySerializer

@api_view(["POST"])
class CreateActivityView(TemplateView):
	def get(self, request, **kwargs):
		return JsonResponse("Created")


