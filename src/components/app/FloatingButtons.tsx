"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp, Phone, MessageSquare, Bot, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { chat, type ChatMessage } from "@/ai/flows/chat";

export function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isChatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

     useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    useEffect(() => {
        if (isChatOpen && messages.length === 0) {
            setLoading(true);
            chat([{ role: 'user', content: 'hello' }]).then(response => {
                setMessages(prev => [...prev, response]);
                setLoading(false);
            });
        }
    }, [isChatOpen, messages.length]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: ChatMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        const response = await chat([...messages, userMessage]);
        setMessages(prev => [...prev, response]);
        setLoading(false);
    };


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="fixed bottom-28 right-5 z-50 flex flex-col items-center gap-3">
                {/* Scroll to Top */}
                <Button
                    size="icon"
                    className={cn(
                        "rounded-full h-12 w-12 bg-primary/80 backdrop-blur-sm text-primary-foreground shadow-lg transition-opacity hover:bg-primary",
                        showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    onClick={scrollToTop}
                    aria-label="Lên đầu trang"
                >
                    <ArrowUp className="h-6 w-6" />
                </Button>

                {/* Zalo */}
                <a href="https://zalo.me/0933741779" target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo">
                     <Button size="icon" className="rounded-full h-12 w-12 bg-blue-500 text-white shadow-lg hover:bg-blue-600">
                        <MessageSquare className="h-6 w-6" />
                    </Button>
                </a>
                
                {/* Phone */}
                 <a href="tel:0933741779" aria-label="Gọi điện">
                    <Button size="icon" className="rounded-full h-12 w-12 bg-green-500 text-white shadow-lg hover:bg-green-600">
                        <Phone className="h-6 w-6" />
                    </Button>
                </a>

            </div>

             {/* Chatbot */}
            <div className="fixed bottom-5 right-5 z-50">
                 {isChatOpen && (
                    <Card className="w-80 h-[28rem] flex flex-col shadow-2xl rounded-2xl mb-2 animate-fade-in-up">
                        <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4 rounded-t-2xl">
                             <div className="flex items-center gap-3">
                                 <Avatar>
                                    <AvatarFallback>AI</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-base font-semibold">Trợ lý AI</CardTitle>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary/80" onClick={() => setChatOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </CardHeader>
                        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                             {messages.map((message, index) => (
                                <div key={index} className={cn("flex items-end gap-2", message.role === 'model' ? '' : 'justify-end')}>
                                    {message.role === 'model' && (
                                        <Avatar className="h-7 w-7">
                                            <AvatarFallback>AI</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className={cn("max-w-[80%] rounded-2xl px-4 py-2 text-sm", message.role === 'model' ? 'bg-muted rounded-bl-none' : 'bg-primary text-primary-foreground rounded-br-none')}>
                                        <p className="whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                     {message.role === 'user' && (
                                        <Avatar className="h-7 w-7">
                                             <AvatarFallback>
                                                <User className="h-5 w-5"/>
                                            </AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            ))}
                             {loading && (
                                 <div className="flex items-end gap-2">
                                     <Avatar className="h-7 w-7">
                                         <AvatarFallback>AI</AvatarFallback>
                                     </Avatar>
                                     <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm bg-muted rounded-bl-none">
                                         <div className="flex gap-1 items-center">
                                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="h-2 w-2 bg-primary/50 rounded-full animate-bounce"></span>
                                        </div>
                                     </div>
                                 </div>
                             )}
                              <div ref={messagesEndRef} />
                        </CardContent>
                        <CardFooter className="p-2 border-t">
                             <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Nhập tin nhắn..."
                                    className="flex-1"
                                    autoComplete="off"
                                />
                                <Button type="submit" size="icon" disabled={loading}>
                                    <Send className="h-4 w-4"/>
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                )}
                <Button size="icon" className="rounded-full h-16 w-16 bg-accent text-accent-foreground shadow-xl transition-transform hover:scale-110" onClick={() => setChatOpen(!isChatOpen)}>
                    {isChatOpen ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7" />}
                    <span className="sr-only">Mở chat</span>
                </Button>
            </div>
        </>
    );
}
