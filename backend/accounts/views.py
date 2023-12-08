from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.authentication import TokenAuthentication

# Create your views here.





class GetRoutes(APIView) :
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request) :
        user = request.user
        if user :
            print(user.password)
        # print(request)
        routes = [ 'auth/token', 'auth/token/refresh']
        return Response(routes)
