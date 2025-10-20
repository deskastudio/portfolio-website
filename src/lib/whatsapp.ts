/**
 * Utility functions untuk integrasi WhatsApp
 */

/**
 * Format nomor telepon untuk WhatsApp (hapus +, spasi, dan karakter non-digit)
 */
export const formatWhatsAppNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/[^\d]/g, '')
}

/**
 * Buat URL WhatsApp dengan pesan yang sudah diformat
 */
export const createWhatsAppUrl = (phoneNumber: string, message: string): string => {
  const formattedNumber = formatWhatsAppNumber(phoneNumber)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${formattedNumber}?text=${encodedMessage}`
}

/**
 * Format pesan contact form untuk WhatsApp
 */
export const formatContactMessage = (data: {
  name: string
  email: string
  subject: string
  message: string
}): string => {
  return `*Pesan dari Website Portfolio*\n\n` +
    `*Nama:* ${data.name}\n` +
    `*Email:* ${data.email}\n` +
    `*Subject:* ${data.subject}\n\n` +
    `*Pesan:*\n${data.message}\n\n` +
    `_Dikirim dari: ${typeof window !== 'undefined' ? window.location.href : 'Portfolio Website'}_`
}

/**
 * Buka WhatsApp dengan pesan yang sudah diformat
 */
export const sendToWhatsApp = (phoneNumber: string, message: string): void => {
  const whatsappUrl = createWhatsAppUrl(phoneNumber, message)
  
  // Cek apakah berjalan di browser
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
}

/**
 * Format pesan simple untuk WhatsApp
 */
export const createSimpleWhatsAppMessage = (text: string): string => {
  return `Halo! ${text}\n\n_Dikirim dari Portfolio Website_`
}