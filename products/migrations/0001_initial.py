# Generated by Django 3.2.8 on 2021-10-21 14:16

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(default=None, max_length=50)),
                ('name', models.CharField(default=None, max_length=100)),
                ('description', models.CharField(default=None, max_length=500)),
                ('price', models.CharField(default=None, max_length=50)),
                ('size', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=50, max_length=50), size=None)),
                ('highlight', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=50, max_length=50), size=None)),
                ('in_stock', models.BooleanField(default=True)),
            ],
        ),
    ]
