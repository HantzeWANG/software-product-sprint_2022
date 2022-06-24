package com.google.sps.servlets;

import com.google.gson.Gson;

import java.io.IOException;
import java.util.ArrayList;


import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  private ArrayList<String> strings = new ArrayList<String>();
  
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    String s1 = "Hello";
    String s2 = "Hola";
    String s3 = "Guten tag";
    strings.add(s1);
    strings.add(s2);
    strings.add(s3);
    
    Gson gson = new Gson();
    String json = gson.toJson(strings);

    response.setContentType("text/json;");
    response.getWriter().println(json);
    
  }

}
