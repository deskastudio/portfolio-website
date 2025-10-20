'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '@/lib/data'
import { sendToWhatsApp } from '@/lib/whatsapp'

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleQuickChat = () => {
    const message = 'Halo! Saya tertarik untuk berdiskusi tentang project development dan kerjasama.'
    sendToWhatsApp(personalInfo.phone, message)
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Chat WhatsApp"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
        
        {/* Quick Chat Popup */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-80 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {personalInfo.name.split(' ')[0]}
                </h4>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Frontend Developer
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Hello! 👋 How can I help you? Lets discuss your project!
            </p>
            
            <div className="space-y-2">
              <button
                onClick={handleQuickChat}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-300"
              >
                💬 Start Chat
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById('projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                    setIsOpen(false)
                  }
                }}
                className="w-full border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 py-2 px-4 rounded-lg text-sm transition-colors duration-300"
              >
                � View Projects
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default FloatingWhatsApp