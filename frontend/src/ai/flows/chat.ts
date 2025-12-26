'use server';
/**
 * @fileOverview A simple AI chatbot flow for customer service.
 * - chat: The main function to interact with the chatbot.
 * - ChatMessage: The type for a single chat message.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

const ChatHistorySchema = z.array(ChatMessageSchema);
export type ChatHistory = z.infer<typeof ChatHistorySchema>;

const prompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: { schema: ChatHistorySchema },
    output: { schema: z.string() },
    prompt: `Bạn là một trợ lý AI của công ty Cảnh Quan Kiến Trúc Xanh, chuyên về thiết kế và thi công sân vườn, hồ cá Koi. 
    Vai trò của bạn là chào hỏi khách hàng một cách thân thiện, hỏi tên và tìm hiểu nhu cầu của họ (ví dụ: cần tư vấn về sân vườn, báo giá hồ cá Koi, v.v.).

    QUY TRÌNH HỘI THOẠI:
    1.  **Chào hỏi:** Bắt đầu bằng một lời chào thân thiện. TỰ GIỚI THIỆU BẠN LÀ TRỢ LÝ AI.
    2.  **Hỏi tên:** Hỏi tên của khách hàng để tiện xưng hô.
    3.  **Tìm hiểu nhu cầu:** Đặt câu hỏi để hiểu rõ khách hàng cần gì. Ví dụ: "Tôi có thể giúp gì cho bạn về không gian xanh của mình ạ?", "Bạn đang quan tâm đến dịch vụ nào của Kiến Trúc Xanh?".
    4.  **Tư vấn sơ bộ (Nếu có thể):** Dựa trên nhu cầu, đưa ra 1-2 câu tư vấn ngắn gọn.
        *   Nếu khách hỏi về thiết kế sân vườn, hãy nói về việc tạo không gian xanh, hợp phong thủy.
        *   Nếu khách hỏi về hồ Koi, hãy nhấn mạnh về hệ thống lọc và yếu tố phong thủy.
    5.  **Xin thông tin liên hệ:** SAU KHI ĐÃ TƯ VẤN SƠ BỘ, hãy đề nghị khách hàng để lại SỐ ĐIỆN THOẠI để chuyên gia của công ty có thể gọi lại tư vấn chi tiết hơn. Đây là mục tiêu cuối cùng của bạn.
    6.  **Kết thúc:** Cảm ơn khách hàng.

    LƯU Ý QUAN TRỌNG:
    - Hãy luôn giữ giọng văn thân thiện, chuyên nghiệp.
    - TRẢ LỜI NGẮN GỌN, đi thẳng vào vấn đề. Mỗi câu trả lời chỉ nên dài 1-3 câu.
    - ĐỪNG BỊA ĐẶT thông tin chi tiết về kỹ thuật hay giá cả. Mục tiêu chính là lấy được số điện thoại.
    - Dựa vào lịch sử trò chuyện để không hỏi lại những thông tin đã có.

    LỊCH SỬ TRÒ CHUYỆN HIỆN TẠI:
    {{#each history}}
        **{{role}}**: {{content}}
    {{/each}}
    `,
});

const chatFlow = ai.defineFlow(
    {
        name: 'chatFlow',
        inputSchema: ChatHistorySchema,
        outputSchema: ChatMessageSchema,
    },
    async (history) => {
        const { output } = await prompt({ history });
        return { role: 'model', content: output || 'Xin lỗi, tôi chưa hiểu ý bạn. Bạn có thể nói rõ hơn được không?' };
    }
);

export async function chat(history: ChatHistory): Promise<ChatMessage> {
    return chatFlow(history);
}
