from django.http import HttpResponse
from django.template import loader

option = {"0":"Queue","1":"Stack","2":"Tree"}
def index(request):
    template = loader.get_template('recording/index.html')
    context = {
       'option' :option,
    }
    return HttpResponse(template.render(context, request))
 