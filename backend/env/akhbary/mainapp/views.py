from django.shortcuts import render
from django.conf import settings
# Create your views here.
def home(request):
    #print(settings.BASE_DIR)
    
    return render(request,template_name="index.html" ,context={"msg":"message"})