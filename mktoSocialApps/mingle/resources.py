from mingle.models import Activity

class ActivityResource():
    class Meta:
        queryset = Activity.objects.all()
        resource_name = 'activity'