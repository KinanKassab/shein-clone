/**
 * Vercel Serverless Function
 * Handles SHEIN order submission and sends notifications to Telegram Bot
 * 
 * Environment Variables Required:
 * - TELEGRAM_BOT_TOKEN: Your Telegram Bot Token (from @BotFather)
 * - TELEGRAM_CHAT_ID: Your Telegram Chat ID (where to send orders)
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  try {
    // Validate environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Validate Telegram configuration
    if (!botToken || !chatId) {
      console.error('Missing Telegram configuration');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please contact support.',
      });
    }

    // Extract order data from request body
    const { customer, product, orderNumber, date } = req.body;

    // Validate required fields
    if (!customer || !product || !orderNumber) {
      return res.status(400).json({
        success: false,
        error: 'Missing required order information',
      });
    }

    if (!customer.fullName || !customer.phone || !customer.address) {
      return res.status(400).json({
        success: false,
        error: 'Missing required customer information',
      });
    }

    if (!product.url || !product.quantity) {
      return res.status(400).json({
        success: false,
        error: 'Missing required product information',
      });
    }

    // Format order message for Telegram
    let message = `🛍️ *New SHEIN Order*\n\n`;
    
    // Customer information
    message += `👤 *Name:* ${escapeMarkdown(customer.fullName)}\n`;
    message += `📞 *Phone:* ${escapeMarkdown(customer.phone)}\n`;
    message += `📍 *Address:* ${escapeMarkdown(customer.address)}\n\n`;

    // Product information
    message += `🛒 *Product Details:*\n`;
    message += `🔗 *Product URL:* [View SHEIN Product](${product.url})\n`;
    message += `📦 *Quantity:* ${product.quantity}\n\n`;

    // Order number and date
    message += `📋 *Order Number:* ${escapeMarkdown(orderNumber)}\n`;
    if (date) {
      const orderDate = new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      message += `📅 *Date:* ${escapeMarkdown(orderDate)}\n`;
    }

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: false,
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error('Telegram API error:', telegramData);
      return res.status(500).json({
        success: false,
        error: 'Failed to send order notification. Please try again.',
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Order submitted successfully',
      orderNumber: orderNumber,
    });

  } catch (error) {
    console.error('Order submission error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    });
  }
}

/**
 * Escape special characters for Telegram Markdown formatting
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
function escapeMarkdown(text) {
  if (!text) return '';
  return String(text)
    .replace(/\_/g, '\\_')
    .replace(/\*/g, '\\*')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\~/g, '\\~')
    .replace(/\`/g, '\\`')
    .replace(/\>/g, '\\>')
    .replace(/\#/g, '\\#')
    .replace(/\+/g, '\\+')
    .replace(/\-/g, '\\-')
    .replace(/\=/g, '\\=')
    .replace(/\|/g, '\\|')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\./g, '\\.')
    .replace(/\!/g, '\\!');
}


