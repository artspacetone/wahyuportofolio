import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
// --- PERBAIKAN DI SINI ---
import { MapPinIcon, PhoneIcon, MailIcon, LinkedInIcon, PaperPlaneIcon, CheckIcon } from './icons';

const contactInfo = [
  { icon: MapPinIcon, title: 'Location', value: 'Tangerang, Banten, Indonesia' },
  { icon: PhoneIcon, title: 'Phone', value: '+62 896 7200 3771' },
  { icon: MailIcon, title: 'Email', value: 'pandanca7@gmail.com' },
  { icon: LinkedInIcon, title: 'LinkedIn', value: 'linkedin.com/in/wahyu-heriyanto' },
];

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mvgwdlve"); 

  if (state.succeeded) {
      return (
        <div className="bg-white dark:bg-charcoal-800 p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-400">
                Thank you for reaching out. I will get back to you as soon as possible.
            </p>
        </div>
      );
  }

  return (
    <section id="contact" className="py-24 bg-cyan-500/5 dark:bg-cyan-300/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Ready to collaborate? Let's discuss your project and bring your ideas to life
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-charcoal-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-charcoal-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
                <input type="text" id="name" name="name" required className="block w-full px-3 py-2 bg-gray-50 dark:bg-charcoal-700 border border-gray-300 dark:border-charcoal-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
                <input type="email" id="email" name="email" required className="block w-full px-3 py-2 bg-gray-50 dark:bg-charcoal-700 border border-gray-300 dark:border-charcoal-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject *</label>
                <input type="text" id="subject" name="subject" required className="block w-full px-3 py-2 bg-gray-50 dark:bg-charcoal-700 border border-gray-300 dark:border-charcoal-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
                <textarea id="message" name="message" rows={4} required className="block w-full px-3 py-2 bg-gray-50 dark:bg-charcoal-700 border border-gray-300 dark:border-charcoal-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
              </div>
              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-teal-400 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <PaperPlaneIcon className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;