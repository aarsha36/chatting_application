package com.chatapp.Demo_WebSocket.Controller;

import org.springframework.messaging.handler.annotation.*;
import org.springframework.stereotype.Controller;

import com.chatapp.Demo_WebSocket.Model.Message;

@Controller
public class chatController {

    @MessageMapping("/chat")          // client sends here
    @SendTo("/topic/messages")        // broadcast to all
    public Message sendMessage(Message message) {
    	System.out.println(message.getSender()+" : "+ message.getContent());
        return message;
    }
}