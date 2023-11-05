from django.shortcuts import render

# Create your views here.
def index(request):
    my_dict = {'insert_content': "Hello im from first app"}
    return render(request, 'firstapp/index.html', context=my_dict)