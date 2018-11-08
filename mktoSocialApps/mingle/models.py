from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.username

class Activity(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length=100)
	description = models.CharField(max_length=200)
	activitytime = models.DateTimeField('activity time')
	location = models.CharField(max_length=200)
	tags = models.CharField(max_length=100)

	def __str__(self):
		return self.name


class Attendance(models.Model):
    activityId = models.ForeignKey(Activity, on_delete=models.CASCADE)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.activityId ) + '-' + str(self.userId)

