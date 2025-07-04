from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .ai_processor import TaskAIProcessor
from datetime import datetime, timedelta
from rest_framework import viewsets
from .models import Task, Category, ContextEntry
from .serializers import TaskSerializer, CategorySerializer, ContextEntrySerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by("-created_at")
    serializer_class = TaskSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ContextEntryViewSet(viewsets.ModelViewSet):
    queryset = ContextEntry.objects.all().order_by("-created_at")
    serializer_class = ContextEntrySerializer


class AISuggestionView(APIView):
    def post(self, request):
        title = request.data.get("title")
        description = request.data.get("description")

        if not title:
            return Response(
                {"error": "Title is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        # Fetch recent context entries (last 3 days)
        recent_context = ContextEntry.objects.filter(
            created_at__gte=datetime.now() - timedelta(days=3)
        ).order_by("-created_at")

        context_data = ContextEntrySerializer(recent_context, many=True).data

        ai = TaskAIProcessor(context_entries=context_data)
        result = ai.analyze_task(title, description)

        return Response(result, status=200)
