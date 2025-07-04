from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, CategoryViewSet, ContextEntryViewSet, AISuggestionView


router = DefaultRouter()
router.register(r"tasks", TaskViewSet)
router.register(r"categories", CategoryViewSet)
router.register(r"contexts", ContextEntryViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("ai/suggest/", AISuggestionView.as_view(), name="ai-suggest"),
]
