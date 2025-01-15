'use client';

import { useState, useEffect } from 'react';
import { Calendar, Loader, X } from 'lucide-react';
import { useModal } from '@/providers/ModalProvider';

const SchedulerModal = () => {
  const { showModal, setShowModal } = useModal();
  const [step, setStep] = useState('form');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: ''
  });

  const CALENDLY_URL = 'https://calendly.com/rileysorenson/30min'; // Replace with your Calendly URL

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      
      // Capture UTM parameters
      const params = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
        utm_term: params.get('utm_term') || ''
      };
      
      setFormData(prev => ({
        ...prev,
        ...utmParams
      }));
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  useEffect(() => {
    if (step === 'calendar') {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [step]);

  const handleClose = () => {
    setShowModal(false);
    setStep('form');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const submitToHubSpot = async () => {
    setLoading(true);
    setError(null);

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
    
    const payload = {
      portalId,
      formId,
      fields: [
        {
          name: 'firstname',
          value: formData.firstName
        },
        {
          name: 'lastname',
          value: formData.lastName
        },
        {
          name: 'email',
          value: formData.email
        },
        {
          name: 'company',
          value: formData.company
        },
        {
          name: 'utm_source',
          value: formData.utm_source
        },
        {
          name: 'utm_medium',
          value: formData.utm_medium
        },
        {
          name: 'utm_campaign',
          value: formData.utm_campaign
        },
        {
          name: 'utm_content',
          value: formData.utm_content
        },
        {
          name: 'utm_term',
          value: formData.utm_term
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStep('calendar');
      } else {
        setError('There was an error submitting your information. Please try again.');
      }
    } catch (err) {
      setError('There was an error connecting to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitToHubSpot();
  };

  // Create Calendly URL with prefill parameters
  const getCalendlyUrl = () => {
    const baseUrl = CALENDLY_URL;
    const prefill = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      organization: formData.company
    };
    
    const params = new URLSearchParams();
    Object.entries(prefill).forEach(([key, value]) => {
      params.append(`prefill[${key}]`, value);
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-xl font-semibold text-blue-900">
              Schedule a Consultation
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            {step === 'form' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-4 text-red-700 bg-red-100 rounded-lg mb-4">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Calendar size={20} />
                      Continue to Schedule
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="calendly-inline-widget" data-url={getCalendlyUrl()} style={{ minWidth: '320px', height: '700px' }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulerModal;