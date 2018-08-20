package com.ghostben.ui.bootstrapui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @program: bootstrapui
 * @description: 用来页面转发的作用，对客户端的请求做页面转发的功能
 * @author: ghostben
 * @create: 2018-08-21 00:06
 **/

@Controller
public class IndexController {
    @GetMapping(value = "/")
    public String getinfo(){

        return "home";
    }
}